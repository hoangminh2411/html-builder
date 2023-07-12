export const ViewFieldsConfig =[
  {
    keyName: 'customer',
    languageKey: "Customer",
    userPermission: { isEdit: true, isShow: true }
  },
  {
    keyName: 'code',
    languageKey: "Ticket ID",
    userPermission: { isEdit: true, isShow: true }
  },
  {
    keyName: 'channel',
    languageKey: "Channel",
    userPermission: { isEdit: false, isShow: true }

  }
]

// export interface ViewFieldsConfig {
//   keyName: string;
//   languageKey: string;
//   userPermission: {
//     isEdit: Boolean;
//     isShow: Boolean;
//   }
// }