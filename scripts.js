const name = "Joshua";
let age = 44;

// accessing OBJECT named 'console' and using DOT NOTATION to access a KEY
// That KEY is a METHOD, so we INVOKE it with ().
// We also pass in an argument as a STRING.
// ARGUMENTS provide additional that a METHOD needs to do its job.

console.log("Hello World");

// We are using the '+' as a CONCATENATION OPERATOR.
// Whenever STRINGS are present, '+'

console.log(
  "My name is " + name + " and I have been living for " + age + " years"
);

// Template Literals and Interpolation
console.log(`My name is ${name}`);

const timeOfDay = "Afternoon";

console.log(typeof timeOfDay);

console.log(`The variable timeOfDay is of type: ${typeof timeOfDay}.`);

console.log(typeof "hello" + 22);

console.log(22 + 22);

// Dynamic
let x = 23;

// This is an OBJECT

const me = {
  name: "Joshua",
  age: "44",
  pets: {
    cat: "Mindy",
    dog: "Tiva"
  }
};

console.log(me.pets.cat);

// create a new key value pair
me.age = 44;

me.name = "Cygnus";

// References the key 'name' inside of OBJECT me.
console.log(me.name);

// References all keys within OBJECT me.
console.log(me);

// will list all console commands
console.log(console);
