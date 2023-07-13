// @refresh reset

import { getTicketList } from "../../configs/ticket-list-html"



export default function TicketMainPage({html}) {
  return (
    <>
     <div  dangerouslySetInnerHTML={{ __html:html  }}></div>
    </>
  )
}


export async function getServerSideProps() {


  
  return {
    props: {
     html: getTicketList()
    }
  }
}