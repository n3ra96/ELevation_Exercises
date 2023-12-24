const express = require('express')
const router = express.Router()
const Function = require('./Functions')
//////////////
router.get('/recipes/:name', function (req, res) {
      let recipe = req.params.name
       Function.getRequest(recipe).then(FiltredRecipes =>
        res.send(FiltredRecipes) 
      )
      
  })


router.get('/recipes',async function (req, res) {
    let params = JSON.parse(req.query.filter)
    let recipe = params[0]
    let Gluten = false
    let Dairy = false
    params.forEach( sensitive => {
      if(sensitive === "Gluten"){
        Gluten = true
      }
      if(sensitive === "Dairy"){
        Dairy = true
      }
    });

    if( Gluten && Dairy){
      res.send(await Function.FilterByDairyAndGluten(recipe))
    }else if( !Gluten && Dairy){
      res.send(await Function.FilterByDairy(recipe)) 
    }else if( Gluten && !Dairy){
      res.send(await Function.FilterByGluten(recipe))
    }
    
})

// router.post('/recipe', function (req, res) {
//     console.log("Someone's trying to make a post request")
//     let recipe = req.body
//     recipe.visited = false
//     recipes.push(recipe)
//     res.send("completed adding recipe")
    
// })

// router.put('/recipe/:name', function (req, res) {
//     console.log("About to update someone")
//     let recipe = req.params.name
//     recipes.find(w => w.name === recipe).visited = true
//     res.end()// don't forget to end the cycle!
    
// })

// router.delete('/recipe/:name', function (req, res) {
//     let recipe = req.params.name
//     let recipesIndex = recipes.findIndex(w => w.name === recipe)
//     recipes.splice(recipesIndex, 1)
//     res.end()
// })




module.exports = router