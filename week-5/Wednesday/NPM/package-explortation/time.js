let timeNow = new Date()
console.log(timeNow)

const moment = require('moment')
let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017



const request = require('request');

request('https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people', function (error, response, body) {
  console.log(body); 
});