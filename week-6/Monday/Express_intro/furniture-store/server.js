const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.get('/priceCheck', function (request, response) {
    response.send("Here's some stuff related to prices")
})

app.get('/priceCheck/:name', function(request, response){
    let storeID = request.params.name
    let flag = false
    for (let key in store) {
        // Console logs all the 
        if(store[key].name == storeID){
            flag = true
            response.send({name: store[key].name, price: store[key].price})
        }  // values in the objArr Array:
        
    }
    if(!flag){
        response.send({price: null})
    }
    
})

app.get('/buy/:name', function(request, response){
    let storeID = request.params.name

    for (let key in store) {
        // Console logs all the 
        if(store[key].name == storeID){
            store[key].inventory--
            response.send({name: store[key].name, price: store[key].price , inventory: store[key].inventory})
        }  // values in the objArr Array:
        
    }
    
    
})

app.get('/sale', function(request, response){
    let admin = request.query.admin
    let newArray = []

    if(admin === 'true'){
        for (let key in store) {
            // Console logs all the 
            if(store[key].inventory > 10){
                console.log("im in if")
                store[key].price = store[key].price/2
                newArray.push(store[key])
            }
            console.log(" im done")
        }
            
    }  // values in the objArr Array:
    response.send(newArray)

    
    
})

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})