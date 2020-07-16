const getTotalCasesByDay = require('./get-total-cases-by-day.js');
const getNewCasesByDay = require('./get-new-cases-by-day.js');

let tDay = getTotalCasesByDay;
let nDay = getNewCasesByDay

let  diffDays = nDay.diff(tDay, 'days');
console.log(diffDays);