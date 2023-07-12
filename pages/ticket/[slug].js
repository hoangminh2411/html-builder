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
  
    //   const formWriteElement = document.querySelector(`[data-type="ticket-create"]`)
 
    //   if(formWriteElement) {
         
    // let issueElement = formWriteElement.querySelector(`[data-key="category-write"]`)
    // let productElement = formWriteElement.querySelector(`[data-key="product-write"]`)
    //  if(issueElement) {
    //   issueElement.innerHTML = ''
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => {
    //     console.log("users", users)
    //     issueElement.innerHTML = users.map((user)=>{
    //       return `<option value='${JSON.stringify({id:user.id, name:user.name})}'>${user.name}</option>`
            
    //     }).join('')
      
    //   })
    //   issueElement.addEventListener("change",(event)=>{
    //     if(productElement) {
    //       fetch(`https://jsonplaceholder.typicode.com/users/${JSON.parse(event.target.value).id}`)
    //       .then(response => response.json())
    //       .then(user => {
    //         productElement.innerHTML = `<option value='${JSON.stringify({id:user.id,name:user.company.name})}'>${user.company.name}</option>`
    //       })
    //     }
       
    //   })
    //  }

   
    // formWriteElement.querySelectorAll(`[data-key="classification"]`).forEach((element)=> {
    //     element.innerHTML = ''
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => {
         
    //       element.innerHTML = users.map((user)=>{
    //         return `<option value='${JSON.stringify(user)}'>${user.name}</option>`
              
    //       }).join('')
         
    //     })

    //     element.addEventListener("change",(event)=>{
    //       let selectedClassifaction = JSON.parse(event.target.value) 
    //       let classficationValuElement = element.parentElement.querySelector(`[data-key="classification-value"]`)
    //       if(classficationValuElement) {
    //         classficationValuElement.innerHTML = ''
    //         classficationValuElement.innerHTML = Object.keys(selectedClassifaction.company).map((companyKey)=>{
    //           return `<option value=${selectedClassifaction.company[companyKey]}>${companyKey}</option>`
    //         })

    //         classficationValuElement.addEventListener("change",(event)=>{
    //           let results = [];
    //           let initClassfication = {
    //             classfication: {
    //               id:selectedClassifaction.id,
    //               name:selectedClassifaction.name,
    //             },
    //             value: event.target.value
    //           }
    //           results.push(initClassfication);
    //           let classfications  = formWriteElement.querySelector(`[data-key="classifications-write"]`)
    //           if(classfications) {
    //             classfications.value = JSON.stringify(results) 
    //           }
    //         })
    //       }
         
    //     })
    // })

    //   formWriteElement.addEventListener('submit', (event) => {
    //     const form = event.target;
    //     const data = new FormData(form);
    //     let nTicketData = {};
    //     for (const [key, value] of data) {
    //       if(['classifications','category','product'].includes(key)) {
    //         nTicketData = {
    //           ...nTicketData,
    //           [key]: JSON.parse(value)
    //         };
    //       } else {
    //         nTicketData = {
    //           ...nTicketData,
    //           [key]: value
    //         };
    //       }
        
          
    //     }
    //     console.log("data create",nTicketData)
    //     // const newParams = finalizeParams(data);
    //     // alert('ticket data created successfully')
    //     // mutationAdd(newParams);
    //     //Prvent the submit event
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    //   });
    //   }
    
    //   //Form Update
    //   document.querySelectorAll(`[data-type="ticket-update"]`).forEach((Element)=>{
    //     Element.addEventListener('submit', (event) => {
    //       const form = event.target;
    //       const data = new FormData(form);
    //       // const newParams = finalizeParams(data);
    //       alert('ticket data updated successfully')
    //       // mutationAdd(newParams);
    //       //Prvent the submit event
    //       event.preventDefault();
    //       event.stopPropagation();
    //       return false;
    //     });
    //   })
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
    let element =  wrapper.querySelector(`[data-key="${dataKey}-view"][data-type="view-common"]`)
    if(element) {
      switch(element.getAttribute('data-type')) {
        case 'view-common':
         
          element.innerHTML = responseData[dataKey]
          //get Edit component
          let editElement = wrapper.querySelector(`[data-key="${dataKey}-edit"]`)
          let formElement = wrapper.querySelector(`[name="${dataKey}"]`)
          // console.log("assignedUser formElement", formElement)
          // console.log("assignedUser editElement", editElement, `[data-key="${dataKey}-edit"]`)
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
