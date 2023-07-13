export const listHTML = ` <div id="root" class="container">
<div class="bottom-toolbar-container hidden">
  <input hidden value id="ticketIds" />
  <button class="bottom-toolbar-btn">
    Print
  </button>
  <button class="bottom-toolbar-btn">
    Export
  </button>
</div>
<div class="toolbar-container">
  <div class="toolbar-container-left">
    <!-- Filter -->
    <nav role="navigation" class="primary-navigation">
      <ul>
        <li><a class="groupBy selected" href="#">Group By &dtrif;</a></a>
          <ul class="dropdown">
            <li><a class="filter groupBy" href="all"> All Tickets</a></li>
            <li><a class="filter groupBy" href="resolved">Resolved Tickets</a></li>
            <li><a class="filter groupBy" href="closed">Closed Tickets</a></li>
            <li><a class="filter groupBy" href="my">My Tickets</a></li>
            <li><a class="filter groupBy" href="myResolved">My Resolved Tickets</a></li>
            <li><a class="filter groupBy" href="myClosed">My Closed Tickets</a></li>
          </ul>
        </li>
        <li><a href="#">Filter By &dtrif;</a>
          <form class="form-container">
            <ul class="dropdown">
              <li>

                <details>
                  <summary>Priority</summary>
                  <input style="width: 100%;" name="priority" data-key="priority-write" />
                </details>
              </li>
              <li>
                <details>
                  <summary>Category</summary>
                  <input style="width: 100%;" name="category" data-key="category-write" />
                </details>
              </li>
              <li>
                <details>
                  <summary>Classfication</summary>
                  <input style="width: 100%;" name="classfications" data-key="classfications-write" />
                </details>
              </li>
              <li>
                <details>
                  <summary>Created Date</summary>
                  <input style="width: 100%;" name="createdAt" data-key="createdAt-write" type="date" />
                </details>
              </li>
              <li>
                <details>
                  <summary>Updated Date</summary>
                  <input style="width: 100%;" name="updatedAt" data-key="updatedAt-write" type="date" />
                </details>
              </li>
              <li>
                <details>
                  <summary>1st Responded Date</summary>
                  <input style="width: 100%;" name="firstResponseDue" data-key="firstResponseDue-write"
                    type="date" />
                </details>
              </li>
              <li>
                <details>
                  <summary>Resolved Date</summary>
                  <input style="width: 100%;" name="resolvedDate" data-key="resolvedAt-write" type="date" />
                </details>
              </li>
              <li>
                <details>
                  <summary>Closed Date</summary>
                  <input style="width: 100%;" name="closedAt" data-key="closedAt-write" type="date" />
                </details>
              </li>
              <li>
                <div class="button-group">
                  <button id="buttonCloseDialog" type="button">Cancel</button>
                  <button id="buttonSaveDialog" class="save-btn" type="submit" value="Submit">Save</button>
                </div>
              </li>
            </ul>
          </form>
        </li>

        <li><a href="#">Sort By &dtrif;</a>
          <ul class="dropdown">
            <li><a class="filter sortBy" href="subject">Subject </a></li>
            <li><a class="filter sortBy" href="code">Ticket ID</a></li>
            <li><a class="filter sortBy" href="createdAt">Created Date</a></li>
            <li><a class="filter sortBy" href="firstRespondDue">1st Response Due</a></li>
            <li><a class="filter sortBy" href="resolutionDue">Resolution Due</a></li>
            <li><a class="filter sortBy" href="closedAt">Closed Date</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- end of filter -->
  </div>
  <div class="toolbar-container-right">
    <form class="search-form">
      <div class="search-container">

        <input type="text" placeholder="Search..." value="" class="search-input" name="subject" />
        <svg aria-hidden="true" viewBox="0 0 24 24" data-testid="SearchIcon" id="search-icon">
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
          </path>
        </svg>
        <fieldset aria-hidden="true" class="search-icon-box">
          <legend id="i0q4o">
            <span class="notranslate">&ZeroWidthSpace;</span>
          </legend>
        </fieldset>



      </div>
    </form>
  </div>
</div>

<table id="list-table">
  <th><input type="checkbox" id="all-checkbox" name="all-select" value="all"></th>
  <th class="hidden" data-type="column-list" data-key="subject">Subject</th>
  <th class="hidden" data-type="column-list" data-key="category">Category</th>
  <th class="hidden" data-type="column-list" data-key="stage">Stage</th>
  <th class="hidden" data-type="column-list" data-key="status">Status</th>
  <th class="hidden" data-type="column-list" data-key="assignedUser">Assigned Rep</th>
  <th class="hidden" data-type="column-list" data-key="resolvedDate">Resolved Date</th>
  <th class="hidden" data-type="column-list" data-key="closedAt">Close Date</th>


  <tr data-type="list-common">
    <td><input type="checkbox" data-key="select-list" value="123"></td>
    <td class="hidden" data-type="column-list" data-key="subject"><a data-key="subject-list" class="title-text">Amet
        minim mollit non deserunt ullamco est si venimollit est</a></td>
    <td class="hidden" data-type="column-list" data-key="category">
      <div data-key="category-list">Error/Product A</div>
    </td>
    <td class="hidden" data-type="column-list" data-key="stage">
      <div class="priority-chip">
        <div class="chip-title" data-key="stage-list">Open</div>
      </div>
    </td>
    <td class="hidden" data-type="column-list" data-key="status">
      <div class="priority-chip">
        <div class="chip-title" data-key="status-list">Waiting</div>
      </div>
    </td>
    <td class="hidden" data-type="column-list" data-key="assignedUser">
      <div data-key="assignedUser-list">Robert Fox</div>
    </td>
    <td class="hidden" data-type="column-list" data-key="resolvedDate"><span
        data-key="resolvedDate-list">2023-06-20</span> </td>
    <td class="hidden" data-type="column-list" data-key="closedAt"><span data-key="closedAt-list">2023-06-20</span>
    </td>

  </tr>

</table>
<div class="footer-list">
  <div class="pagination-container">
    <div class="typography"><span>Row per page
      </span></div>
    <nav role="navigation" class="primary-navigation">
      <ul>
        <li class="page-size-box"><a class="pageSize selected" href="#">5 &dtrif;</a></a>
          <ul class="dropdown">
            <li><a class="filter pageSize" href="5">5</a></li>
            <li><a class="filter pageSize" href="10">10</a></li>
            <li><a class="filter pageSize" href="15">15</a></li>
            <li><a class="filter pageSize" href="20">20</a></li>
          </ul>
        </li>
      </ul>
    </nav>



    <!-- <select name="pageSize" class="page-size-box">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select> -->
    <div class="typography"><span>1-5 of 13
      </span></div>
    <button class="pagination-btn">
      < </button>
        <button class="pagination-btn"> > </button>

  </div>
</div>
</div>`
export const  listStyle = `<style>* {
  box-sizing: border-box;
}

div {
  font-family: Roboto, sans-serif;
}

a {
  font-family: Roboto, sans-serif;
}

.container {
  margin: 22px;
  overflow-x: hidden;
  position: relative;
  height: calc(100vh - 100px);
}

#list-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#list-table td {
  border: 1px solid #ddd;
  line-height: 1.66;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid rgb(240, 240, 240);
  text-align: left;
  color: rgb(38, 38, 38);
  font-size: 0.875rem;
  padding: 12px;
  border-top-color: rgb(240, 240, 240);
  border-right: none;
  border-left: none;
  position: relative;
}

/* #list-table tr {
  border: none;
} */

#list-table tr:hover {
  background-color: rgb(245, 245, 245);
}

#list-table th {
  background-color: rgb(250, 250, 250);
  border: 1px solid #ddd;
  line-height: 1.60714rem;
  font-family: Roboto, sans-serif;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid rgb(240, 240, 240);
  text-align: left;
  color: rgb(38, 38, 38);
  padding: 12px;
  border-top-color: rgb(240, 240, 240);
  border-right-color: rgb(240, 240, 240);
  border-left-color: rgb(240, 240, 240);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  min-width: auto;
  width: auto;
}


.search-container:focus {
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.search-container {
  font-size: 0.75rem;
  line-height: 1.4375em;
  font-weight: 400;
  color: rgb(38, 38, 38);
  box-sizing: border-box;
  position: relative;
  cursor: text;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  padding-right: 8px;
}

.search-input {
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  padding: 4px 0 5px;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
  display: block;
  min-width: 0;
  width: 100%;
  -webkit-animation-name: mui-auto-fill-cancel;
  animation-name: mui-auto-fill-cancel;
  -webkit-animation-duration: 10ms;
  animation-duration: 10ms;
  padding-top: 1px;
  padding: 8.5px 14px;
  padding-right: 0;
  padding: 10.5px 14px 10.5px 12px;
  padding: 7.5px 8px 7.5px 12px;
  font-family: Roboto, sans-serif
}

.search-input:focus {
  outline: 0
}

#search-icon {
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentcolor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.33929rem;
}

.search-icon-box {
  text-align: left;
  position: absolute;
  bottom: 0;
  right: 0;
  top: -5px;
  left: 0;
  margin: 0;
  padding: 0 8px;
  pointer-events: none;
  border-radius: inherit;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  min-width: 0%;
  border-color: rgba(0, 0, 0, 0.23);
  border-color: #d9d9d9;
}

#i0q4o {
  float: unset;
  width: auto;
  overflow: hidden;
  padding: 0px;
  line-height: 11px;
  transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.toolbar-container {
  height: 48px;
  position: relative;
  padding: 16px 8px;
  display: flex;
  align-items: center;

}

.toolbar-container-right {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.title-text {
  margin: 0;
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: #1890ff;
  -webkit-text-decoration: none;
  text-decoration: none;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  white-space: normal;
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
}


nav.primary-navigation {
  margin: 0 auto;
  display: block;
  padding: 0;
  text-align: center;
  /* Body 14/Regular */
  font-family: Public Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  /* 157.143% */
}

nav.primary-navigation li {
  list-style: none;
  margin: 0 auto;
  display: inline-block;
  padding: 8px;
  position: relative;
  text-decoration: none;
  text-align: center;
  font-family: arvo;
  margin: 0;
  z-index: 1300;
}

nav.primary-navigation ul {
  list-style: none;
  margin: 0 auto;
  display: inline-block;
  padding: 0;
  position: relative;
  text-decoration: none;
  text-align: center;
  font-family: arvo;
  margin: 0;
}

nav.primary-navigation li a {
  color: black;
}

nav.primary-navigation li a:hover {
  color: #3ca0e7;
}


nav.primary-navigation li:hover {
  cursor: pointer;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.04);
  /* background-color: rgba(0, 0, 0, 0.04); */
}

nav.primary-navigation ul li ul {
  visibility: hidden;
  opacity: 1;
  position: absolute;
  padding-left: 0;
  left: 0;
  display: none;
  background: white;
}

nav.primary-navigation ul li:focus-within .dropdown,
nav.primary-navigation ul li .dropdown:focus {
  visibility: visible;
  opacity: 1;
  display: block;
  min-width: 250px;
  text-align: left;
  padding-top: 20px;
  box-shadow: 0px 3px 5px -1px #ccc;
}

nav.primary-navigation ul li ul:focus {
  visibility: visible;
  opacity: 1;
  display: block;
  min-width: 250px;
  text-align: left;
  padding-top: 20px;
  box-shadow: 0px 3px 5px -1px #ccc;
}

nav.primary-navigation ul li ul li {
  clear: both;
  width: 100%;
  text-align: left;
  border-style: none;
}

/* nav.primary-navigation ul li ul li a:hover {
  text-decoration: none;

  background-color: rgba(0, 0, 0, 0.04);
} */
a {

  text-decoration: none;

}

a:hover {
  color: #3CA0E7;
}

ul li ul li a {
  transition: all 0.5s ease;
}

.dropdown {
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgb(217 217 217) 0px 0px 0px 1px, rgb(109 110 111 / 8%) 0px 5px 20px 0px;
}

.dropdown .selected {
  background: rgba(0, 0, 0, 0.08)
}

.priority-chip {
  max-width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 0.8705357142857143rem;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 24px;
  color: #262626;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  white-space: nowrap;
  -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: default;
  outline: 0;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: 0;
  padding: 0;
  vertical-align: middle;
  box-sizing: border-box;
  border-radius: 4px;
  color: #1890ff;
  background-color: #e6f7ff;
}

.chip-title {
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 8px;
  padding-right: 8px;
  white-space: nowrap;
}

.footer-list {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 24px;
}

.pagination-container {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 5px;
}

.page-size-box {
  margin-left: 8px;
  margin-right: 8px
}

.typography {
  margin: 0px;
  font-size: 0.875rem;
  line-height: 1.57;
  font-family: Roboto, sans-serif;
  font-weight: 400;
}

.pagination-btn {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  padding: 8px;
  overflow: visible;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 36px;
  height: 36px;
  font-size: 1rem;
  position: relative;
  border-radius: 50%;
  color: rgb(217, 217, 217);
}

.bottom-toolbar-container {
  width: 100%;
  padding: 0px 22px;
  height: 44px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0px;
  /* position: absolute;
  top: 108px;
  right: 0px;
  left: 0px; */
  z-index: 1400;
  transition: all 0.1s ease 0s;
  background-color: rgb(240, 240, 240);
}

.bottom-toolbar-btn {
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-transform: capitalize;
  font-family: Roboto, sans-serif;
  font-size: 0.870536rem;
  line-height: 1.75;
  min-width: 64px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition-duration: 250ms, 250ms, 250ms, 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0ms, 0ms, 0ms, 0ms;
  transition-property: background-color, box-shadow, border-color, color;
  color: inherit;
  font-weight: 400;
  box-shadow: none;
  border: 1px solid transparent;
  padding: 0.2rem 0.9rem;
  position: relative;
}

.bottom-toolbar-btn:hover {
  border: 1px solid;
}

.hidden {
  display: none !important;
}

.filter {
  display: block;
}

details[open] summary~* {
  animation: open 0.3s ease-in-out;
}

@keyframes open {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

details summary::-webkit-details-marker {
  display: none;
}

details summary {
  width: 100%;
  padding: 0.5rem 0;
  position: relative;
  cursor: pointer;
  list-style: none;
}

details summary:after {
  content: ">";
  color: black;
  position: absolute;
  line-height: 0;
  margin-top: 0.75rem;
  right: 0;
  font-weight: 200;
  transform-origin: center;
  transition: 200ms linear;
}

details[open] summary:after {
  transform: rotate(90deg);

}

details summary {
  outline: 0;
}

details p {
  font-size: 0.95rem;
  margin: 0 0 1rem;
  padding-top: 1rem;
}

.button-group {
  display: flex;
height: 50px;
padding: 0px 10px 0px 30px;
justify-content: flex-end;
align-items: center;
gap: 7px;
align-self: stretch;
border-top: 0.1px solid var(--icon, rgba(0, 0, 0, 0.54));
}

.button-group #buttonCloseDialog {
  display: flex;
  width: 64px;
  height: 30px;
  padding: 9px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  /* drop-shadow / button-secondary */
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
  cursor: pointer;
}

.button-group #buttonSaveDialog {
  display: flex;
  width: 64px;
  height: 30px;
  padding: 9px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
border-radius: 4px;
border: 1px solid #1890FF;
background: #1890FF;
box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.02);
cursor: pointer;
}</style>`
export const  listScripts=  `<script>/**
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


</script>
`