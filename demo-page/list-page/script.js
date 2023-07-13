/**
 * groupBy
 * sortBy
 * SortField
 * search
 * page
 * pageSize
 * priority
 * resolvedDate
 * firstResponseDate
 * closedAt
 * updatedAt
 * createdAt
 * classfication
 * category
 * priority
 */

// An array to store the IDs of selected tickets
let ticketIds = []

// An object defining columns for different grouping options
const columnsByGroupBy = {
  resolved: ['subject', 'category', 'stage', 'status', 'assignedUser', 'resolvedDate'],
  closed: ['subject', 'category', 'stage', 'status', 'assignedUser', 'closedAt'],
  my: ['subject', 'category', 'stage', 'status', 'assignedUser', 'resolvedDate', 'closedAt'],
  myResolved: ['subject', 'category', 'stage', 'status', 'assignedUser', 'resolvedDate'],
  myClosed: ['subject', 'category', 'stage', 'status', 'assignedUser', 'closedAt'],
}

// Get the query string from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const updateLayoutWithQuery = (key, value, Element) => {
  switch (key) {
    case 'groupBy':
      let filterSelectedElement = document.querySelector("." + key + ".selected")
      if (filterSelectedElement) {
        filterSelectedElement.innerHTML = Element.innerHTML + '&dtrif;'
      }
      break;
    case 'sortBy':
      Element.parentNode.classList.add("selected")
      break;
    case 'subject':
      let searchInputElement = Element.querySelector('input')
      if (searchInputElement) {
        searchInputElement.value = value
        searchInputElement.setAttribute("value", value)
      }
    case 'pageSize':
      let pageSizeElement = document.querySelector("." + key + ".selected")
      if (pageSizeElement) {
        pageSizeElement.innerHTML = Element.innerHTML + '&dtrif;'
      }
    default:
      break;
  }
}

const getFilterQuery = (filterKey, filterValue, Element) => {
  let initSearchParam = '?' + filterKey + '=' + filterValue;
  for (const key of urlParams.keys()) {
    if (key !== filterKey) {
      initSearchParam += '&&' + key + '=' + urlParams.get(key)
    } else if (key == filterKey && filterValue == urlParams.get(key)) {
      //Add selected or default value with query value from param
      updateLayoutWithQuery(filterKey, filterValue, Element)
    }
  }

  return initSearchParam
}


//Initial Href for filter parameters
const allFilterLink = document.querySelectorAll('.filter');
Array.from(allFilterLink).forEach((Element) => {
  const filterKey = Element.classList[1];
  const filterValue = Element.getAttribute('href')
  let initSearchParam = getFilterQuery(filterKey, filterValue, Element)

  Element.href = initSearchParam
})

const filterSearchElement = document.querySelector('.search-form')
updateLayoutWithQuery('subject', urlParams.get('subject'), filterSearchElement)

filterSearchElement.addEventListener('submit', (event) => {
  const formData = new FormData(filterSearchElement);
  const filterKey = 'subject';
  const filterValue = formData.get('subject')
  let initSearchParam = getFilterQuery(filterKey, filterValue, filterSearchElement)
  window.location.search = initSearchParam


  event.preventDefault();
  event.stopPropagation();
})


// Get the groupBy parameter from the query string
const groupBy = urlParams.get('groupBy')

// Determine the table columns based on the groupBy parameter
let tablesColumns = columnsByGroupBy['my'];
if (groupBy && Object.keys(columnsByGroupBy).includes(groupBy)) {
  tablesColumns = columnsByGroupBy[groupBy]
}

// Toggle the visibility of columns based on the tableColumns
tablesColumns.forEach((column) => {
  let dataKey = "[data-key=" + column + "]";
  document.querySelectorAll(dataKey + "[data-type=column-list]").forEach((Element) => {
    Element.classList.toggle("hidden")
  })
})

// Select all checkbox elements and overall checkbox element
const allCheckboxs = document.querySelectorAll('[data-key=select-list]');
const overallCheckbox = document.querySelector("#all-checkbox")

// Function to update the display based on selected checkboxes
function updateDisplay(ticketIds) {
  if (overallCheckbox) {
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
    if (ticketIds.length > 0) {
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
function saveIdChecked(ticketIds) {
  let ticketIdsElement = document.querySelector("#ticketIds")
  ticketIdsElement.setAttribute('value', JSON.stringify(ticketIds))
  ticketIdsElement.value = JSON.stringify(ticketIds)
}

// Add change event listener to each checkbox
allCheckboxs.forEach((Element) => {
  let ticketId = Element.getAttribute('value')
  Element.addEventListener("change", (event) => {
    if (event.target.checked) {
      ticketIds.push(ticketId)
    } else {
      ticketIds = ticketIds.filter((id) => id !== ticketId)
    }


    saveIdChecked(ticketIds)
    updateDisplay(ticketIds);
  })
})

// Add change event listener to the overall checkbox
overallCheckbox.addEventListener("change", (event) => {
  let newIds = [];
  if (event.target.checked) {
    allCheckboxs.forEach((Element) => {
      Element.checked = true;
      newIds.push(Element.value)
    })
  } else {
    allCheckboxs.forEach((Element) => {
      Element.checked = false;
    })
  }
  saveIdChecked(newIds)
  updateDisplay(newIds);
})

