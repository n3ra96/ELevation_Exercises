const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect("mongodb://127.0.0.1:27017/mongoose-population", {
  useNewUrlParser: true,
})
.then(()=>console.log("conneted to DB"))
.catch((err)=> console.log(err))

const bookSchema = new Schema({ 
    title: String,
    author: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}] //reference to an array of Review documents
  })
  
  const reviewSchema = new Schema({ 
    book: {type: Schema.Types.ObjectId, ref: 'Book'}, //reference to a Book document
    reviewText: String,
    critic: {type: Schema.Types.ObjectId, ref: 'Critic'} //reference to a Critic document
  })
  
  const criticSchema = new Schema({ 
    name: String,
    reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}], //reference to an array of Review documents
  })

const Book = mongoose.model("Book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)


let b1 = new Book({
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    reviews: []
})

let c1 = new Critic({
    name: "William Jeffery",
    reviews: []
})

let r1 = new Review({
    book: b1,
    critic: c1,
    reviewText: "Excellent Book"
})



// b1.reviews.push(r1)
// c1.reviews.push(r1)

// b1.save()
// c1.save()
// r1.save()

// Book.find({}).then(function(books){
//     console.log(books)
// })

// Review.find({}).then(function(reviewss){
//     console.log(reviewss)
// })

// Book.findOne({})
//     .populate("reviews")
//     .then(function (book) {
//         console.log(book.reviews)
//     })

// Book.findOne({})
//     .populate({
//         path: 'reviews',
//         populate: {
//             path: 'critic'
//         }
//     })
//     .then(function (book) {
//         console.log(book.reviews)
//     })

// Review.find({})
//     .populate('book critic')
//     .then(function (reviews) {
//         console.log(reviews)
//     })

Critic.findOne({}).then(function(critic) {
    //now we have a single critic
    critic.populate('reviews').then(function() {
      console.log(critic.reviews)
    })
  })