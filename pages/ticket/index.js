// @refresh reset

import { parseDataTicketList } from "../../configs/constants"
import { listHTML, listScripts, listStyle } from "../../configs/ticket-list-html";




export default function TicketMainPage({html, css, script}) {
  return (
    <>
     <div  dangerouslySetInnerHTML={{ __html:html + css +script  }}></div>
    </>
  )
}


export async function getServerSideProps(context) {
  const {query} = context;
  
  console.log("context.params", context, query)

  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(listHTML);
  const wrapper = dom.window.document.querySelector('#root')
  const listTickets = parseDataTicketList()

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
  return {
    props: {
     html: wrapper.outerHTML,
     css:listStyle,
     script: listScripts

    }
  }
}