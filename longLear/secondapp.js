// /////////////////////
// // before we go deeper , lets talk about the terminologies we use here 
// ///// Collections, Documents, schema, models, schematype, field 


// /// for example 
// const puppySchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true
//     },
//     age: Number
//   });
  
//   const Puppy = mongoose.model('Puppy', puppySchema);

//   const personSchema = new mongoose.Schema({
//     name:{
//       type:String,
//       require: true
//     },
//     age: Number,
//     favoriteFoods: ["rice","beans"]
//   })
  
// const Person = mongoose.model("Person",personSchema )
// // puppySchema, this describe the shape of the document. that takes two fields , name and age 
// // The SchemaType for name is String and for age is Number. 


// ///////////////////////////
// require('dotenv').config();
// const mongoose = require('mongoose');
// const mongoDBURI = process.env.MONGO_URI;


// mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });

// const createAndSavePerson = (done) => {
//   done(null /*, data*/);
// };

// const createManyPeople = (arrayOfPeople, done) => {
//   done(null /*, data*/);
// };

// const findPeopleByName = (personName, done) => {
//   done(null /*, data*/);
// };

// const findOneByFood = (food, done) => {
//   done(null /*, data*/);
// };

// const findPersonById = (personId, done) => {
//   done(null /*, data*/);
// };

// const findEditThenSave = (personId, done) => {
//   const foodToAdd = "hamburger";

//   done(null /*, data*/);
// };

// const findAndUpdate = (personName, done) => {
//   const ageToSet = 20;

//   done(null /*, data*/);
// };

// const removeById = (personId, done) => {
//   done(null /*, data*/);
// };

// const removeManyPeople = (done) => {
//   const nameToRemove = "Mary";

//   done(null /*, data*/);
// };

// const queryChain = (done) => {
//   const foodToSearch = "burrito";

//   done(null /*, data*/);
// };

// /** **Well Done !!**
// /* You completed these challenges, let's go celebrate !
//  */

// //----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

// exports.PersonModel = Person;
// exports.createAndSavePerson = createAndSavePerson;
// exports.findPeopleByName = findPeopleByName;
// exports.findOneByFood = findOneByFood;
// exports.findPersonById = findPersonById;
// exports.findEditThenSave = findEditThenSave;
// exports.findAndUpdate = findAndUpdate;
// exports.createManyPeople = createManyPeople;
// exports.removeById = removeById;
// exports.removeManyPeople = removeManyPeople;
// exports.queryChain = queryChain;


/////////////////////////////////////////////////



// SAVING AND ACCESSING ATLAS IN MONGODB 


require('dotenv').config();
const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const mongoDBURI = process.env.MONGO_URI;


mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });

//var Person;


const personSchema = new mongoose.Schema({
  name:{
    type:String,
    require: true
  },
  age: Number,
  favoriteFoods: [{type: String,unique: true}]//// you need to change this to [String ] to prevent duplicate
})

const Person = mongoose.model("Person",personSchema )




const createAndSavePerson = (done) => {
  const person = new Person({
    name:"Paul Fidelis",
    age:55,
    favoriteFoods: ["bread", "rice"]
  })
  
  person.save(function(err, data) {
    if(err){
      console.error(err)
    }else{
      done(null, data);
    }
    
    

  });
  
};

////////

//
//// to create multiple people use 

var createManyPeople = (arrayOfPeople, done) => {

    Person.create(arrayOfPeople, function(err, data) {
      if (err) {
        return done(err);
      }else {done(null, data);}
      
    
      
  
    } );}


////////


///// to find a person by name 
const findPeopleByName = (personName, done) => {
    Person.find({name:personName},function(err, data) {
       if (err) {
         return done(err);
       }else {done(null, data);}
       
     
       
   
     }
     
   
    )
   };

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
