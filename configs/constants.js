export const headerHtml = `


<div class="tab">
  <button class="tablinks" onclick="openCity(event, 'London')">London</button>
  <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
  <button class="tablinks" onclick="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<!-- Tab content -->
<div id="London" class="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p>
</div>

<div id="Tokyo" class="tabcontent">
  <h3 data-ticket="subject" id="subject">Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>`

export const headerStyle = `<style>/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}</style>`

export const  headerScript = `<script>function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} </script>`


export const dataTicket = {
   "id": "26cff53d-07ee-41a2-a73f-4522cfd20750",
   "subject": "New Ticket",
   "code": "DES_000006",
   "priority": {
    "keyName": "PRIORITY_MEDIUM",
    "languageKey": "options_items__priority_medium"
   },
   "customer": {
    "id": "26cd7f2e-6862-4b82-bd11-b5a476bd3e6c",
    "name": "Test Account",
    "category": "CATEGORY_ACCOUNT",
    "emails": null,
    "phones": null
   },
   "process": null,
   "stage": null,
   "status": null,
   "category": {
    "id": "80983777-ab65-447e-862f-d5b8d04ed7dc",
    "name": "Support",
    "rules": [
     {
      "id": "c424edb2-bc16-4d3f-b043-ab9a71d98df6",
      "products": [
       null
      ],
      "isAllProducts": true,
      "priority": {
       "keyName": "PRIORITY_MEDIUM",
       "languageKey": "Medium"
      }
     }
    ]
   },
   "product": null,
   "classifications": [
    {
     "classification": {
      "id": "26cd7a82-e792-466d-bc52-75f6d31e2d38",
      "name": "Language"
     },
     "value": "English"
    }
   ],
   "assignedGroup": null,
   "assignedUser": {
    "user": {
     "id": "",
     "name": ""
    },
    "group": {
     "id": "",
     "name": ""
    }
   },
   "ccUsers": null,
   "channel": null,
   "tags": null,
   "content": "",
   "description": "",
   "duration": 0,
   "durationUnit": "UNIT_NONE",
   "firstRespondDue": null,
   "resolutionDue": null,
   "resolvedDate": null,
   "realDuration": -1,
   "createdBy": {
    "id": "9d33j4gg35s",
    "name": "Minh TH",
    "fullName": "Minh TH"
   },
   "createdAt": "2023-07-11T04:35:45.034Z",
   "updatedBy": {
    "id": "9d33j4gg35s",
    "name": "Minh TH",
    "fullName": "Minh TH"
   },
   "updatedAt": "2023-07-11T04:35:45.034Z",
   "closedAt": null,
   "restore": null
}
const parseTicketcategory = (category) => {
  let categoryName = category.name
  let result = []
  category.forEach((rule)=>{
    
  })
  return result.join(',')
}

export const parseDataTicket = (data) => {


  return {
    customer:'Jenny Willson Acme co.',
    code: 'TIC-000001',
    channel:'Desk Email',
    stage: 'New',
    status:'New',
    category:'Error /Product A',
    assignedUser:'Jenny Willson',
    createdAt:'2023/06/23 09:03 am',
    firstRespondDue:'2023/06/23 09:03 am',
    resolvedDate: '2023/06/24 09:03 am',
    closedAt:'2023/06/23 09:03 am'
  }
}