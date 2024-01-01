function bakeCake() {
    console.log("Starting the cake baking process...");
  
    const batter = prepareBatter().then((batter) => {
      const cake = bakeBatter(batter).then((cake) => { 
      const frostedCake = frostCake(cake);
      console.log("Cake baking process completed!");
      console.log("Final Cake:", JSON.stringify(frostedCake));
      return frostedCake } );

    });
    
  
    // console.log("Cake baking process completed!");
    // console.log("Final Cake:", JSON.stringify(cake));
  }
  

  function prepareBatter() {
    console.log("Preparing cake batter...");
    const flour = measureIngredients("flour", 2).then((ingredient) => { return ingredient });
    const sugar = measureIngredients("sugar", 1).then((ingredient) => { return ingredient });
    const eggs = measureIngredients("eggs", 3).then((ingredient) => { return ingredient });
    const butter = measureIngredients("butter", 0.5).then((ingredient) => { return ingredient });
    return Promise.all([flour,sugar,eggs,butter]).then(([flour,sugar,eggs,butter]) =>{
      const batter = mixIngredients([flour, sugar, eggs, butter]).then((ingredient) => { return ingredient });
      return batter;
    } )
  }
  
  function measureIngredients(ingredient, quantity) {
    console.log(`Measuring ${quantity} cups of ${ingredient}...`);
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Measurement complete for ${ingredient}!`);
        const measuredIngredient = {
          ingredient,
          quantity,
        };
        resolve(measuredIngredient);
      }, 2000); 
    });
  }
  
  function mixIngredients(ingredients) {
    console.log("Mixing ingredients together...");
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mixing complete!");
        const mixedBatter = {
          mixture: ingredients,
          consistency: "smooth",
        };
        resolve(mixedBatter);
      }, 3000); 
    });
  }
  
  
  function bakeBatter(batter) {
    console.log("Baking the batter...");
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Baking complete!");
        const bakedCake = {
          batter,
          status: "baked",
        };
        resolve(bakedCake);
      }, 5000);
    });
  }
  
  function frostCake(cake) {
      if(cake.status != "baked"){
          throw new Error("Cake is not baked!!! Gooey! Mush!")
    }
    console.log("Frosting the cake...");

    cake["status"]= "frosted",
    cake["decoration"]= "sprinkles"

    const frostedCake = cake
    return frostedCake;
  }
  
bakeCake();
//console.log(bakeCake())