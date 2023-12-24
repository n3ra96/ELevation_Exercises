const model = new RecipeApi()
const renderer = new Render()


const showrecipe = function(){
    let newrecipe = $(NEW_INPUT).val()
    let checkboxes = $(CHECKBOX_INPUT);
    let values = [];

    values.push(newrecipe)
    checkboxes.each((checkbox) => {
    values.push($(checkboxes[checkbox]).val());
    });

    if( values.length == 1 ){
        model.getRecipe(newrecipe).then(function (response) {
            renderer.render(response)
        })
    }else if(values.length > 1){
        model.getRecipeQuery(values).then( function (response){
            renderer.render(response)
        })
    }   
}

$("#recipes").on("click", "img" , function(){
    let alertIngredient = $(this).closest(".recipe").find("li:first").text()
    alert(alertIngredient);
    
})
    

// const updateVisited = function (recipe) {
//     $.ajax({
//         url: `recipe/${recipe}`,
//         method: "PUT",
//         success: function (response) {
//             console.log("PUT complete")
//             fetch()
//         }
//     })
// }

// $("#recipes").on("click", ".visit", function(){
//     let recipe = $(this).closest(".recipe").find(".name").text()
//     updateVisited(recipe.split("-")[0].trim())
//     //PUT this to the server: update the recipe's `visited` status to `true`
//     fetch()
// })


