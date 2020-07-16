const fs = require('fs');
const getRows = require('./get-row')
const getDate = require('./get-date')
const getTotalCasesByDay = require('./get-total-cases-by-day.js');
const getNewCasesByDay = require('./get-new-cases-by-day.js');


const file = fs.readFileSync('./owid-covid-usa-data.csv', 'utf8')


let newFile = getRows(file)
console.log(newFile)

let userInput = process.argv[2];
let date = process.argv[3];

for (const item of newFile){
if (userInput === 'new' && date === getDate(item)){
    console.log('new cases' ,getNewCasesByDay(date, newFile))
} else if (userInput === 'total' && date === getDate(item)){
    console.log('total cases', getTotalCasesByDay(date, newFile))
}
}


