// In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

// SAME KEYS AND VALUES
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
// Same keys and values ES2015
/* Write an ES2015 Version */

const createInstructor = (firstName, lastName) => ({firstName, lastName});


// COMPUTED PROPERTY NAMES
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
// Computed Property Names ES2015
/* Write an ES2015 Version */

const favoriteNumber = 42;
const instructor = {
    firtname: 'Colt',
    [favoriteNumber] : "That is my favorite!"
};


// OBJECT METHODS
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

// Object Methods ES2015
// /* Write an ES2015 Version */

const instructor2 = {
    firstName: "Colt",
    sayHi() {return 'Hi!';},
    sayBye() {return this.firstName + " says bye!";}
}


// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:

// > species: the species of animal (‘cat’, ‘dog’)
// > verb: a string used to name a function (‘bark’, ‘bleet’)
// > noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.
const createAnimal = (species, verb, noise) => ({
    species,
    [verb]() {console.log(noise)}
})

//FOR TESTING
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
console.log(d.species);
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
console.log(s.species);
s.bleet() //"BAAAAaaaa"



