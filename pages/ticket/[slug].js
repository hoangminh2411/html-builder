// @refresh reset

import { headerHtml, headerScript, headerStyle, parseDataTicket, parseDataTicketList } from "../../configs/constants";


export default function TicketViewPage({html, css, script, ticketId}) {
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
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(headerHtml);
  const wrapper = dom.window.document.querySelector('#root')
  //get View Data
  Object.keys(responseData).forEach((dataKey)=>{
    let element =  wrapper.querySelector(`[data-key="${dataKey}"]`)
    if(element) {
      switch(element.getAttribute('data-type')) {
        case 'common':
          element.innerHTML = responseData[dataKey]
          break;
        case 'comment':
          let commentData = responseData[dataKey]
      
          element.outerHTML = commentData.map((comment,index)=>{
            let defaultCommentComponent = element.cloneNode(true);
            if(index !== 0) {
              defaultCommentComponent.style="visibility:hidden"
            } 
            Object.keys(comment).forEach((commonKey)=>{
              defaultCommentComponent.querySelector(`[data-key="${commonKey}"]`).innerHTML = comment[commonKey]
              
            })
            return defaultCommentComponent.outerHTML
          }).join('')
        break;
        default:
          break;          
      }
     
    }  
  })

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
