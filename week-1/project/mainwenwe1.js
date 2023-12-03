//scopes
//section 1

/*
const run = true

if (run) {
    let distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 
*/

//section 2

/*
if (13 == "space") {
    let cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}
*/

//section 3

/*
const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)
*/


//section 4

/*
const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()
*/

//section 5

/*
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}
*/

//section 6

/*
const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}
*/

////////////////////functions////////////////////////////

//Exersice 1

/* Write a function called isEven that accepts a number as a parameter and checks if the number is even 
or not. Return true if it is even or false if it is odd. Don’t Google this one ;) Use modulo % */

/*
function isEven(x) {
    return Boolean(!(x%2)) 
}

console.log(isEven(6))
console.log(isEven(7))
*/

//Exercise 2

/* Write a function that takes in an array of numbers.
The function should loop through the numbers and (using the function from Exercise 1) print out
 the odd numbers. */
/*
 function isEven(x) {
    return Boolean(!(x%2)) 
}

function Odd_Arr(arr){
    for(let number in arr){
        if(!isEven(arr[number])){
            console.log(arr[number])
        }
    }
} 
let arr = [11,23,33,44,56,45,31]
Odd_Arr(arr)
*/





//Exercise 3

/* Write a JavaScript function that accepts two parameters: one being an array of integers, 
and the other being a number. The function should return true or false depending on whether the number
 exists in the array. */

/*
 function checkExists( arr , x) {

    for (let number in arr){
        if(arr[number]===x){
            return true
        }

    }
    return false
 }

 console.log(checkExists([1, 2, 3], 2))
 console.log(checkExists([1, 2, 3], 5))
 */

 //Exercise 3

 /* Create an object called calculator.
It should have two methods: add and subtract
Both methods take two parameters, and should return the sum/difference of both numbers. */

/*
const calculator = {
    add: function(x,y){
        return x+y
    },
    subtract: function(x,y){
        return x-y
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42
*/


//Exercise 5 (Extra Practice)

/*
function increaseByNameLength(money, name){
       return name.length * money
}

function makeRegal(name){
    return `His Royal Highness, ${name}`;

}

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
 */




//2. Functions Galore

/* And say I want to write up a basic summary of each person, but:
All proper nouns* should be capitalized
The city and country should come together with a comma in between
If the age is below 21, it should say “Underage” instead
If the age is above 55 it should say “55+” instead
The catchphrase should be wrapped in quotes with its first letter capitalized */

/*
people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]



  const getSummary = function(person){
    let name = person.name.toUpperCase()
    let age
    if( person.age < 21){
        age= "Underage"
    }else{
        age= "55+"
    }
    let place = `${person.city} , ${person.country}`
    let Newcatchphrase = ""
    for(let i in person.catchphrase){
        if(i == 0){
            Newcatchphrase += person.catchphrase[i].toUpperCase() 
        }else{
            Newcatchphrase += person.catchphrase[i]
        }
    }
       
    let summary = `${name} is ${age} from ${place} and his/her catchphrase is "${Newcatchphrase}"`//modify the summary string with the person parameterreturn summary
    return summary
  }


  const summary = getSummary(people_info[2])
  console.log(summary)
  */




  //Functions Mini Lesson - Optional!

  /* Alright now you.

1.  Create the other functions. Make this bad boy work.
2.  Write a loop that calls `getSummary` for each person.

  

----------

  

Next, you'll have to write everything from scratch. Given this setup: */


const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}



const countWords = function(sentence){
    const cleanSentence = cleanText(sentence)
    for(word of cleanSentence){
      addToCounter(word)
    }
  }
  
  const addToCounter = function(word){
    //If word exists in wordCounts, increase its value by 1
    //Otherwise, set its value to 1
  }
  
  const cleanText = function(sentence){
    //Lowercase sentence
    //Call the removeSpecialChars function with sentence and return its value
  }
  
  const removeSpecialChars = function(sentence){
    //For each special character, remove it from sentence using the .split().join() we talked about before
    //Remember that .split().join() returns a new value each time
    //Return the updated sentence
  }
  
  countWords(story)
  console.log(wordCounts)
