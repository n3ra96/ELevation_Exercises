const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/mongoose-population")
.then(()=>console.log("conneted to DB"))
.catch((err)=> console.log(err))

const SystemSchema = new Schema({ 
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}], 
    starName : String
  })
  
const planetSchema  = new Schema({ 
    name : String,
    system : {type: Schema.Types.ObjectId, ref: 'System'}, 
    visitors : [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
  })
  
const visitorSchema  = new Schema({ 
    name: String,
    homePlanet : {type: Schema.Types.ObjectId, ref: 'Planet'}, 
    visitedPlanets  : [{type: Schema.Types.ObjectId, ref: 'Planet'}] 
  })

const System = mongoose.model("System", SystemSchema)
const Planet = mongoose.model("Planet", planetSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)


let b1 = new System({
    planets: [], 
    starName : "milkyGalaxy"
})

let c1 = new Planet({
    name : "earth",
    system : b1, 
    visitors : []
})

let r1 = new Visitor({
    name: "Naarani",
    homePlanet : c1, 
    visitedPlanets  : []
})

// b1.planets.push(c1)
// c1.visitors.push(r1)
// r1.visitedPlanets.push(c1)

// b1.save()
// c1.save()
// r1.save()

// Visitor.find({}).then(function(visitors){
//         console.log(visitors)
//     })

//Find a visitor’s list of visited planets

// Visitor.findOne({})
//     .populate("visitedPlanets")
//     .then(function (visitor) {
//         console.log(visitor.visitedPlanets)
//     })

//Find all the visitors on a planet

Planet.findOne({})
    .populate("visitors")
    .then(function (planet) {
        console.log(planet.visitors)
    })

//Find all the visitors in a system (subdocuments!)  *?*

System.findOne({})
    .populate({
        path: 'planets',
        populate: {
            path: 'visitors'
        }
    })
    .then(function (solar) {
        console.log(solar.planets)
    })