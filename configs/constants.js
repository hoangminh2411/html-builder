




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

export const parseDataTicketList = () =>{
  return [{
    id:'12',
    subject:'Create New Ticket 1',
    code:'TIC-000014',
    priority:'Medium',
    stage:'New',
    status:'New',
    customer:'Jenny Willson Minh'
  },
  {
    id:'13',
    subject:'Create New Ticket 2',
    code:'TIC-00001',
    priority:'Medium',
    stage:'New',
    status:'New',
    customer:'Jenny Willson Tinh'
  },
  {
    id:'14',
    subject:'Create New Ticket 3',
    code:'TIC-000013',
    priority:'Medium',
    stage:'New',
    status:'New',
    customer:'Jenny Willson Minh'
  },
  {
    id:'15',
    subject:'Create New Ticket 4',
    code:'TIC-000012',
    priority:'Medium',
    stage:'New',
    status:'New',
    customer:'Jenny Willson Tinh'
  }]
}
export const parseDataTicket = () => {
  return {
    customer:'Tinh Chikitori',
    code: 'TIC-000001 Test',
    channel:'Direct Test',
    stage: 'New Test',
    status:'New Test',
    category:'Error /Product A Test',
    assignedUser:'Jenny Willson Test',
    createdAt:'2023/06/23 09:03 am Test',
    firstRespondDue:'2023/06/23 09:03 am Test' ,
    resolvedDate: '2023/06/24 09:03 am Test',
    closedAt:'2023/06/23 09:03 am Test',
    content:'This Ticket in Desk Site',
  }
}

export const parseCommentsTicket =()=>{
  return [{
    user:'Tinh Chikitori',
    createdAt:'8/10/2022 23:30',
    content:'met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    user:'Tinh Chikitori 2',
    createdAt:'8/10/2022 23:30',
    content:'met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    user:'Tinh Chikitori 3',
    createdAt:'8/10/2022 23:30',
    content:'met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  {
    user:'Tinh Chikitori 4',
    createdAt:'8/10/2022 23:30',
    content:'met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  }, {
    user:'Tinh Chikitori 5',
    createdAt:'8/10/2022 23:30',
    content:'met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
  },
  ]
}