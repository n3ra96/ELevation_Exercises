// const http = require('http')

// const server = http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.write('Hello, world')
//     response.end();
// })

// const port = 3000
// server.listen(port, function () {
//     console.log(`Node server created at port ${port}`)
// })



/////////express//////////

const express = require('express')
const app = express()

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})