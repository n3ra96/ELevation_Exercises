/*alert((5 > 2) && false);
alert(!("knife" === "sword"));
alert((1 < 2) || (-1 > -1) || !false);
alert(" ");
alert((31 % 5) == "1");
alert(!!true);
alert("5th Avenue" != "5th Avenue");
alert(52 !== "52");
alert((undefined || null));*/

////exercise 9


/*let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    alert(yearOfTeslaPurchase)
}

if ((currentYear - yearOfTeslaPurchase)>=4) {
    alert("would you like an upgrade?")
}else{
    alert("Are uou satisfied with the car?")
}
if(!isUSCitizen && boughtTesla) {
    alert("would you like to move to the us?")
}
if(!boughtTesla){
    alert("Are you intersted in buying tesla?")
}
*/

////////// Exercise 11



/* delete the second and third elements
change the fourth element to 1
delete the last 4 elements
add another element 0 to the beginning of the array
print the modified array */

/*
const numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.splice(1,2)
numbers[3]=1
numbers.slice(4,4)
numbers.unshift(0)
alert(numbers)*/


///////// 13 exercise 
///////// exercise 1

/* If the people are the same age
If the people live in the same city
Print “Jill wanted to date Robert”
If they’re not in the same city
Print “Jill wanted to date Robert, but couldn’t” */
/*
let p1 = { name: "jill" , age: "18" ,city: "haifa"}
let p2 = { name: "robert" , age: "18",city: "haifa"}

if( p1.age == p2.age){
    alert("jill wanted to date robert")
}

if( p1.city == p2.city){
    alert("jill wanted to date robert") 
} else{
    alert("jill wanted to date robert, but couldn't")
}*/


///////// exercise 2



/* Create an object called library that has a books key
The value of books should be an array of book objects
Each book should have a title and author key */

/*let Book = [
    {
     BookName: "The Road To FullStack",
     AuthorName: "Ameer"
    },
    {
     BookName: "Welcome To Elevation",
     AuthorName: "Roni"
    }
];

let library = { books: Book }*/




///////// exercise 3

/* After receiving the name from the prompt,
If the reservation exists and is unclaimed, welcome the user (console log or use alert)
If the reservation exists and is already claimed, inform the user about the situation
If there is no reservation, tell the user there is nothing under their name
Use ‘Bob’ and ‘Ted’ to test your code:
When you test Bob, it should say “Welcome, Bob”
When you test Ted, it should say “Hmm, someone already claimed this reservation”
If you try a different name, it should say “You have no reservation” */

/*
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');


  let Newname = name
  let lowername = Newname.toLowerCase()
  let keys = Object.keys(reservations)
  for( let key in keys){
    if ( keys[key].toLowerCase() == lowername){
        lowername = keys[key]
    }
  }
  

  if ( lowername in reservations  ){
    if( reservations[lowername] == true ){
        alert('Welcome, Ted')
    }else{
        alert('Hmm, someone already claimed this reservation')
    }

  }else{
    alert('You have no reservation')
    reservations[name] = {claimed: true}

  }

  console.log(reservations)
  */
  




  ///////// Extensions



/* You’re going to console log these four options conditionally, based on the values you selected for hasOven and works:
hasOven: true and works: true
Geraldine’s raddish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.
hasOven: false and works: true
Geraldine’s raddish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn’t have an oven to cook the raddish in.
hasOven: true and works: false
Geraldine’s raddish expired 1 day ago. Probably because her fridge doesn’t work. Luckily, she has an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.
hasOven: false and works: false
Geraldine’s raddish expired 1 day ago. Probably because her fridge doesn’t work. Too bad she doesn’t have an oven to cook the raddish in. And she’ll have to pay 250 to fix the fridge.
Note that the expired 1 day ago should be calculated based off the date variable and expiryDate property.
Also, she’ll have to pay 250 to fix the fridge should be calculated based off the price property in fridge - it should be half the price.
Make sure to only use information from the variables you’ve been given.
Do not write out "raddish". Instead, use kitchen.fridge.items… */


/*
  const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true/false, // choose one
    fridge: {
        price: 500,
        works: true/false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
*/




//////////Loops///////////

//Exercise 1
/*
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i=0; i<3;i++){
    people[i] = { name : names[i] , age: ages[i]};
}
console.log(people)
*/
//Exercise 2 (Extra Practice)
/*
let txt = "";
for (let x in people) {
txt += people[x].name + " is " + people[x].age + " years old";
console.log(txt)
txt = ""
};
*/

//Exercise 3

/* Write some code that removes the post with an id of 2 from the posts array. Can’t have any negative reviews of our product!
Obviously, do not do posts.splice(1, 1) - you have to find the post to remove! (Of course, you will use splice - just not hard coded!) */

/*
const posts = [
    {id: 1, text: "Love this product"},
    {id: 3, text: "So glad I found this. Bought four already!"},
    {id: 2, text: "This is the worst. DON'T BUY!"}
  ]

 let idYouWant = 2;

 
for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === idYouWant) {
        posts.splice(i,1)
        console.log(posts);
    }
}
*/


//Exercise 4

/* You are given 2 as the ID of a post. Write some code that finds the comment with an ID of 3 (inside of a post with an ID of 2), and remove just that one comment. */
/*
const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  const idYouWant = 2;
  const SubIdYouWant = 3;

 
for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === idYouWant) {
        

        for (let j = 0; j < posts[i].comments.length; j++) {
           

            if (posts[i].comments[j].id === SubIdYouWant) {
        
                posts[i].comments.splice(j,1)
                
            }
        }
    }
}
console.log(posts);
*/




















