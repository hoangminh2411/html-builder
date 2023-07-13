const columnsByGroupBy = {
  resolved: ['subject', 'category','stage','status','assginedUser', 'resolvedDate'],
  closed:['subject', 'category','stage','status','assginedUser', 'closedDate'],
  my:['subject', 'category','stage','status','assginedUser','resolvedDate', 'closedDate'],
  myResolved: ['subject', 'category','stage','status','assginedUser', 'resolvedDate'],
  myClosed:['subject', 'category','stage','status','assginedUser', 'closedDate'],
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const groupBy = urlParams.get('groupBy')
let tablesColumns = [];
if(groupBy && Object.keys(columnsByGroupBy).includes(groupBy)) {
  tablesColumns = columnsByGroupBy[groupBy]
}

console.log("this is list groupBy", tablesColumns)