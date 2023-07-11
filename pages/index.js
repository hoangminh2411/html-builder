// @refresh reset
import { headerHtml, headerScript, headerStyle, parseDataTicket } from "../configs/constants";

export default function Home({html, css, script}) {
  return (
    <>
     
       <div  dangerouslySetInnerHTML={{ __html: css + html + script  }}></div>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log("id",  context.params)
  const responseData = parseDataTicket()
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(headerHtml);
  const wrapper = dom.window.document.querySelector('#root')
  Object.keys(responseData).forEach((dataKey)=>{
    let element =  wrapper.querySelector(`[data-key="${dataKey}"]`)
    if(element) {
      switch(element.getAttribute('data-type')) {
        case 'common':
          element.innerHTML = responseData[dataKey]
          break;
        case 'comment':
          let commentData = responseData[dataKey]
      
          element.outerHTML = commentData.map((comment)=>{
            let defaultCommentComponent = element.cloneNode(true);
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
  // console.log(dom.window.document.querySelector('[data-ticket="subject"]').textContent); // "Hello world"
  
  return {
    props: {
     
      html:wrapper.outerHTML,
      css:headerStyle,
      script: headerScript
    }
  }
}
