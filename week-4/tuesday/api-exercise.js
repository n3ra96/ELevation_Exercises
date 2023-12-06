


// people  https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people
// pet     https://ele-people-api-8eb0b1bd9b96.herokuapp.com/pets



let owner = $.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people", function(result){
    
    console.log(result[0].name.first+result[0].name.last)
})

let pets = $.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/pets", function(result){
    console.log(result[18].owner)
})