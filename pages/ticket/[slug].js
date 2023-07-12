// @refresh reset
import { useEffect } from "react"
import { parseCommentsTicket, parseDataTicket, parseDataTicketList } from "../../configs/constants"
import { headerHtml, headerScript, headerStyle } from "../../configs/template-data"
import { getTicketForm } from "../../configs/ticket-form-html"



export default function TicketViewPage({html, css, script, ticketId}) {
  const handleSubmitTicketForm = ()=>{

  }
  useEffect(()=>{
    if(html) {
      //Form Create
      const formWriteElement = document.querySelector(`[data-type="ticket-create"]`)
      console.log("formWriteElement",formWriteElement)
      //Add action submit form Write
      if(formWriteElement) {
        formWriteElement.addEventListener('submit', (event) => {
          const form = event.target;
          const data = new FormData(form);
          // const newParams = finalizeParams(data);
          alert('ticket data created successfully')
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
          // const newParams = finalizeParams(data);
          alert('ticket data updated successfully')
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
        let childElement = defaultTicketComponent.querySelector(`[data-key="${ticketKey}"]`)
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
    let element =  wrapper.querySelector(`[data-key="${dataKey}"][data-type="common"]`)
    if(element) {
      switch(element.getAttribute('data-type')) {
        case 'common':
         
          element.innerHTML = responseData[dataKey]
          //get Edit component
          let editElement = wrapper.querySelector(`[data-key="${dataKey}-edit"]`)
          let formElement = wrapper.querySelector(`[name="${dataKey}"]`)
          console.log("assignedUser formElement", formElement)
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
  if(commentsElement) {
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
