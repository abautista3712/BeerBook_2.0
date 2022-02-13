const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Beers collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactbeers");

// const beerSeed = [
//   {
//     picture: "",
//     name: "nameTest",
//     beerStyle: "beerStyleTest",
//     abv: 30,
//     shortDesc: "shortDescTest",
//     beerCategory: "categoryTest"
//   }
// ];

// //seeding beers
// db.Beer.remove({}) //clears the database of all data before seeding
//   .then(() => db.Beer.collection.insertMany(beerSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

const userSeed = [
  {
    username: "Alice",
    password: "wonderland",
    email: "rabbithole@yahoo.com",
    name: "Alice Margatroid",
    beerCollection: [
      {
        picture: "",
        name: "Mad Hatter's Mix",
        beerStyle: "Unusual",
        abv: 40,
        shortDesc: "A very merry un-birthday!",
        beerCategory: "Fizzy",
      },
      {
        picture: "",
        name: "Chesire Cat's Concoction",
        beerStyle: "Mysterious",
        abv: 30,
        shortDesc: "Riddles and riddles!",
        beerCategory: "Foamy",
      },
    ],
  },
  {
    username: "Bob",
    password: "builder",
    email: "wecanfixit@google.com",
    name: "Bob the Builder",
    beerCollection: [
      {
        picture: "",
        name: "Tom Nook's Tequila",
        beerStyle: "Tanuki",
        abv: 60,
        shortDesc: "Very good, very good!",
        beerCategory: "Real Estate",
      },
      {
        picture: "",
        name: "Redd's Razzle Dazzle",
        beerStyle: "Kitsune",
        abv: 45,
        shortDesc: "Thanks, cuz!",
        beerCategory: "Forgery",
      },
    ],
  },
];
//seeding user data
db.UserData.remove({}) //clear database
  .then(() => db.UserData.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
