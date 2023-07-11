import { headerHtml, headerScript, headerStyle } from "../configs/constants";

export default function Home(props) {
  return (
    <>
      {props.headerHTML}
       <div  dangerouslySetInnerHTML={{ __html: headerStyle + headerHtml + headerScript  }}></div>
    </>
  )
}

export async function getServerSideProps() {

 
  const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  const dom = new JSDOM(headerHtml);
  console.log(dom.window.document.querySelector('[data-ticket="subject"]').textContent); // "Hello world"
  const data = await response.json()

  return {
    props: {
      headerHTML:dom.window.document.querySelector('[data-ticket="subject"]').textContent,
      forecast: data.properties.periods[0].detailedForecast
    }
  }
}
