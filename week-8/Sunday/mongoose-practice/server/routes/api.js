const express = require('express')
const router = express.Router()

const Person = require('../../models/person')

router.get('/people', function (req, res) {
    Person.find({}).then( function (people) {
        res.send(people)
    })
})

router.post('/person', function (req, res) {
    let p1 = new Person({ 
        firstName: req.body.firstName , 
        lastName: req.body.lastName, 
        age: req.body.age })
    Person.create(p1).then( function (people) {
        res.send(people)
    })
})

router.post('/person', function (req, res) {
    let p1 = new Person({ 
        firstName: req.body.firstName , 
        lastName: req.body.lastName, 
        age: req.body.age })
    Person.create(p1).then( function (people) {
        res.send(people)
    })
})

router.put('/person/:id', function (req, res) {
    let p1 = req.params.id
    Person.findById(p1).then( function (person) {
        person.age = 80 //how time flies
        person.save()
        res.send(person)
    })
    
})

router.delete('/apocalypse', function (req, res) {
    Person.deleteMany({}).then( function (apocalypse) {
        res.send(apocalypse)
    })
    
})

module.exports = router