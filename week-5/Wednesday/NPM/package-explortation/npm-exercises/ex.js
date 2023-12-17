// //Ex. 1
// //Check whether "shoobert@dylan" is a valid email (should be false)
// var validator = require('validator');

// validator.isEmail('shoobert@dylan'); //=>
// console.log(validator.isEmail('shoobert@dylan'))
// //Ex. 2
// //Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
// var validator = require('validator');

// validator.isMobilePhone("786-329-9958",'en-US');
// console.log(validator.isMobilePhone("786-329-9958",'en-US'))

// //Ex. 3
// //Use the following blacklist
// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// //Along with validator's `blacklist` method to clean this text:
// let text = "I'M SO EXCITED!!!~!"
// //Ultimately, it should print "im so excited"
// var validator = require('validator');

// validator.blacklist(text, blacklist);
// console.log(validator.blacklist(text, blacklist))



//////ex2

const { faker } = require('@faker-js/faker');

function  makeHuman(num){
    for(let i = 0 ; i < num ; i++ ){
        Hname = faker.person.fullName()
        avatar = faker.image.avatar()
        company = faker.company.name()

        console.log(Hname,avatar,company)
    }

}


makeHuman(3)
