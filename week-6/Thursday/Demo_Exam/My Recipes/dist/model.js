class RecipeApi{
    
    getRecipe(ingredient){
        return $.get('/recipes/'+ingredient)
    }

    getRecipeQuery(ingredientArray){
        return $.get(`/recipes/?filter=${JSON.stringify(ingredientArray)}`)
    }
}    