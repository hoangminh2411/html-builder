let ticketIds = []
const columnsByGroupBy = {
  resolved: ['subject', 'category','stage','status','assignedUser', 'resolvedDate'],
  closed:['subject', 'category','stage','status','assignedUser', 'closedAt'],
  my:['subject', 'category','stage','status','assignedUser','resolvedDate', 'closedAt'],
  myResolved: ['subject', 'category','stage','status','assignedUser', 'resolvedDate'],
  myClosed:['subject', 'category','stage','status','assignedUser', 'closedAt'],
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

console.log(`~~~~ queryString`,queryString);
if (queryString !=='') {
  const allFilter = document.querySelectorAll('.filter');
  Array.from(allFilter).map((filter)=>{
    const filterType = filter.classList[1];
    console.log(`filterType`,filterType)
    const oldHref = filter.getAttribute("href");
    console.log(`oldhref`,oldHref);

    const paramsState = urlParams.get(filterType)
    console.log(`paramsState`,paramsState)
    if(paramsState == null) {   filter.setAttribute('href',`${queryString}&&${oldHref}`)}  
    
  })
}

const groupBy = urlParams.get('groupBy')
let tablesColumns = columnsByGroupBy['my'];
if(groupBy && Object.keys(columnsByGroupBy).includes(groupBy)) {
  tablesColumns = columnsByGroupBy[groupBy]
}
tablesColumns.forEach((column)=>{
  let dataKey  = "[data-key="+column+"]";
  document.querySelectorAll(dataKey+"[data-type=column-list]").forEach((Element)=>{
    Element.classList.toggle("hidden")
  })
})
const allCheckboxs = document.querySelectorAll('[data-key=select-list]');
const overallCheckbox  = document.querySelector("#all-checkbox")
function updateDisplay (ticketIds) {
  if(overallCheckbox){
    if (ticketIds.length === 0) {
      overallCheckbox.checked = false;
      overallCheckbox.indeterminate = false;
    } else if (ticketIds.length === allCheckboxs.length) {
      overallCheckbox.checked = true;
      overallCheckbox.indeterminate = false;
    } else {
      overallCheckbox.checked = false;
      overallCheckbox.indeterminate = true;
    }
    let bottomToolbar = document.querySelector('.bottom-toolbar-container')
    if(ticketIds.length > 0) {     
        bottomToolbar.classList.remove("hidden")
    } else {
      bottomToolbar.classList.add("hidden")
    }
  
    // allCheckBoxElement.addEventListener((event)=>{
    //   if(event.target.checked) {
    //     document.querySelectorAll('[data-key=select-list]').forEach((Element)=>{
    //       Element.checked = true
    //     })
    //   }
    // })
  }
}
function saveIdChecked (ticketIds) {
  let ticketIdsElement = document.querySelector("#ticketIds")
  ticketIdsElement.setAttribute('value',JSON.stringify(ticketIds))
  ticketIdsElement.value = JSON.stringify(ticketIds)
}
allCheckboxs.forEach((Element)=>{
  let ticketId = Element.getAttribute('value')
  Element.addEventListener("change",(event)=>{
    if(event.target.checked ) {
      ticketIds.push(ticketId)
    } else {
      ticketIds = ticketIds.filter((id)=> id !== ticketId)
    }

 
    saveIdChecked(ticketIds)
    updateDisplay(ticketIds);
  })
})

overallCheckbox.addEventListener("change",(event)=>{
  let newIds = [];
  if(event.target.checked) { 
    allCheckboxs.forEach((Element)=>{
      Element.checked = true;
      newIds.push(Element.value)
    })
  } else {
    allCheckboxs.forEach((Element)=>{
      Element.checked = false;
    })
  }
  saveIdChecked(newIds)
  updateDisplay(newIds);
})

