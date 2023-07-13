




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
  return [
    {
      id: '12',
      subject: 'Create New Ticket 1',
      code: 'TIC-000014',
      priority: 'Medium',
      stage: 'New',
      status: 'New',
      customer: 'Jenny Willson Minh',
      assignedUser: 'Tinh',
      category: 'Error/Product A'
    },
    {
      id: '78',
      subject: 'Update Ticket Details',
      code: 'TIC-000087',
      priority: 'High',
      stage: 'In Progress',
      status: 'Assigned',
      customer: 'John Smith',
      assignedUser: 'Lisa',
      category: 'Bug/Product B'
    },
    {
      id: '23',
      subject: 'Resolve Technical Issue',
      code: 'TIC-000031',
      priority: 'Low',
      stage: 'Closed',
      status: 'Resolved',
      customer: 'Mike Johnson',
      assignedUser: 'Sarah',
      category: 'Enhancement/Product C'
    },
    {
      id: '56',
      subject: 'Investigate Error Message',
      code: 'TIC-000062',
      priority: 'Medium',
      stage: 'New',
      status: 'New',
      customer: 'Emily Davis',
      assignedUser: 'Alex',
      category: 'Error/Product A'
    },
    {
      id: '34',
      subject: 'Fix Performance Bottleneck',
      code: 'TIC-000041',
      priority: 'High',
      stage: 'In Progress',
      status: 'Assigned',
      customer: 'Robert Thompson',
      assignedUser: 'Jessica',
      category: 'Bug/Product B'
    },
    {
      id: '97',
      subject: 'Implement New Feature',
      code: 'TIC-000102',
      priority: 'Medium',
      stage: 'New',
      status: 'New',
      customer: 'Sophia Wilson',
      assignedUser: 'Michael',
      category: 'Enhancement/Product C'
    },
    {
      id: '45',
      subject: 'Resolve Login Issue',
      code: 'TIC-000056',
      priority: 'High',
      stage: 'In Progress',
      status: 'Assigned',
      customer: 'David Johnson',
      assignedUser: 'Emily',
      category: 'Error/Product A'
    },
    {
      id: '67',
      subject: 'Request Feature Enhancement',
      code: 'TIC-000077',
      priority: 'Medium',
      stage: 'New',
      status: 'New',
      customer: 'Olivia Davis',
      assignedUser: 'Daniel',
      category: 'Enhancement/Product B'
    },
    {
      id: '28',
      subject: 'Investigate Database Error',
      code: 'TIC-000036',
      priority: 'High',
      stage: 'In Progress',
      status: 'Assigned',
      customer: 'Grace Thompson',
      assignedUser: 'Jessica',
      category: 'Bug/Product C'
    },
    {
      id: '89',
      subject: 'Fix UI Layout Issue',
      code: 'TIC-000079',
      priority: 'Low',
      stage: 'Closed',
      status: 'Resolved',
      customer: 'Sophia Wilson',
      assignedUser: 'Lisa',
      category: 'Error/Product A'
    }
  ]
}  
export const parseDataTicket = () => {
  return {
    subject:"Ticket Subject",
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
  // return []
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