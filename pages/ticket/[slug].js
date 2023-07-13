// @refresh reset
import { useEffect } from "react"
import { parseCommentsTicket, parseDataTicket, parseDataTicketList } from "../../configs/constants"
import { headerHtml, headerScript, headerStyle } from "../../configs/template-data"
import { getTicketForm } from "../../configs/ticket-form-html"



export default function TicketViewPage({html, css, script, ticketId}) {

  useEffect(()=>{
    if(html) {
  
      const formWriteElement = document.querySelector(`[data-type="ticket-create"]`)
 
      if(formWriteElement) {
         
      formWriteElement.addEventListener('submit', (event) => {
        const form = event.target;
        const data = new FormData(form);
        let nTicketData = {};
        for (const [key, value] of data) {
          if(['classifications','category','product'].includes(key)) {
            nTicketData = {
              ...nTicketData,
              [key]: JSON.parse(value)
            };
          } else {
            nTicketData = {
              ...nTicketData,
              [key]: value
            };
          }
        
          
        }
        console.log("data create",nTicketData)
        // const newParams = finalizeParams(data);
        // alert('ticket data created successfully')
        // mutationAdd(newParams);
        //Prvent the submit event
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
      }
    
      //Form Update
      document.querySelectorAll(`[data-type="ticket-update"]`).forEach((Element)=>{
        Element.addEventListener('submit', (event) => {
          const form = event.target;
          const data = new FormData(form);
          let nTicketData = {};
          for (const [key, value] of data) {
            if(['classifications','category','product'].includes(key)) {
              nTicketData = {
                ...nTicketData,
                [key]: JSON.parse(value)
              };
            } else {
              nTicketData = {
                ...nTicketData,
                [key]: value
              };
            }
          
            
          }
          console.log("data update",nTicketData)
          // mutationAdd(newParams);
          //Prvent the submit event
          event.preventDefault();
          event.stopPropagation();
          return false;
        });
      })
    }
  },[])

  return (
    <>
        Ticket ID: {ticketId}
       <div  dangerouslySetInnerHTML={{ __html: css + html + script  }}></div>
    </>
  )
}

export async function getServerSideProps(context) {
  const {slug} = context.params

  const listTickets = parseDataTicketList()
  const responseData = parseDataTicket()
  const commentsData = parseCommentsTicket()

  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(headerHtml);
  const wrapper = dom.window.document.querySelector('#root')
  
  // List Data 
  let element =  wrapper.querySelector(`[data-type="list-common"]`)
  if(element) {
    element.outerHTML = listTickets.map((ticket)=>{
      let defaultTicketComponent = element.cloneNode(true);
        Object.keys(ticket).forEach((ticketKey)=>{
        let childElement = defaultTicketComponent.querySelector(`[data-key="${ticketKey}-list"]`)
        if(childElement) {
          childElement.innerHTML = ticket[ticketKey]
        if(ticketKey == 'subject') {
          childElement.setAttribute('href',`/ticket/${ticket.id}`)
        }  
        }
         
      })
      return defaultTicketComponent.outerHTML
    }).join('')
  }

   //Write
   let formWriteElement = wrapper.querySelector(`[data-type="ticket-write"]`)
   if(formWriteElement) {
     let formSouceId =  formWriteElement.getAttribute('source')
     let htmlForm =  getTicketForm(formSouceId)
     formWriteElement.outerHTML = htmlForm
   }

  //get View Data
  Object.keys(responseData).forEach((dataKey)=>{
    let element =  wrapper.querySelector(`[data-key="${dataKey}-view"][data-type="view-common"]`)
    console.log("data-key", dataKey,element )
    if(element) {
      switch(element.getAttribute('data-type')) {
        case 'view-common':
         
          element.innerHTML = responseData[dataKey]
          //get Edit component
          let editElement = wrapper.querySelector(`[data-key="${dataKey}-edit"]`)
          let formElement = wrapper.querySelector(`[name="${dataKey}"]`)
          let writeElement = wrapper.querySelector(`[data-key="${dataKey}-write"]`)
          if(dataKey == 'customer' && writeElement ) {
            writeElement.setAttribute('value', responseData[dataKey])
             writeElement.value = responseData[dataKey]
            // console.log("assignedUser writeElement", writeElement)
          }
          
         console.log("assignedUser editElement", editElement, `[data-key="${dataKey}-edit"]`)
          if(editElement && formElement ) {
            let editComponent = formElement.cloneNode(true)
            editComponent.style.width = '100%'
            editElement.innerHTML = editComponent.outerHTML
          }
          break;
        default:
          break;          
      }
     
    }  
  })
  //get Comment Data
  let commentsElement  = wrapper.querySelector(`[data-key="comment"]`)
  if(commentsElement && commentsData?.length > 0) {
    commentsElement.outerHTML = commentsData.map((comment,index)=>{
      let defaultCommentComponent = commentsElement.cloneNode(true);
      if(index !== 0) {
        defaultCommentComponent.setAttribute('hidden', true)
      } 
      Object.keys(comment).forEach((commonKey)=>{
        defaultCommentComponent.querySelector(`[data-key="${commonKey}"]`).innerHTML = comment[commonKey]
        
      })
      return defaultCommentComponent.outerHTML
    }).join('')
  } else {
    let deskCommentElement = wrapper.querySelector('#desk-comment')
    deskCommentElement?.setAttribute('hidden',true);
  }


 
  
  // console.log(dom.window.document.querySelector('[data-ticket="subject"]').textContent); // "Hello world"
  
  return {
    props: {
      ticketId: slug,
      html:wrapper.outerHTML,
      css:headerStyle,
      script: headerScript
    }
  }
}
