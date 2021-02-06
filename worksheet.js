const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP*** Iterate through each item in the array and will allow us to transform the items in the array.
//1. Get array of all names - take a cb function and define the parameter and transform the individual item to the new item in the resulting array
// do in implicit return - one line
const names = characters.map(character => character.name)
console.log(names);

//2. Get array of all heights
const heights = characters.map((character) => character.height);
console.log(heights);

//3. Get array of objects with just name and height properties
const newArray = characters.map((character) => ({
    // return the object with name and height property
    name: character.name, 
    height: character.height,
}));
console.log(newArray);
//4. Get array of all first names - 0th index
const firstNames = characters.map(character => character.name.split(" ")[0]);
console.log(firstNames);

//***REDUCE*** - Iterate through each item in the array and get some ending result. 0 starting, then adding on to each character.
// First parameter is a cb function, second is the initial accumulator(value to build up or accumulate on).

//1. Get total mass of all characters
const totalMass = characters.reduce((accumulator, current) => {
    // take acc and add on the current mass
    return accumulator + current.mass;
}, 0)
console.log(totalMass)

//2. Get total height of all characters
// Short-hand version of arrow function with a one-line return
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
console.log(totalHeight);

//3. Get total number of characters by eye color
// const charEyeColor = characters.reduce((acc, cur) => {
    // full function with an empty object. If acc already has a key of the current eye color
//     if(acc[cur.eye_color]) {
    // if the we have seen this eye color before, take acc object with the current key and set it the existing value then add 1
//         acc[cur.eye_color] = acc[cur.eye_color] + 1
//          otherwise, set acc at value of eye color to 1
//     } else {
//         acc[cur.eye_color] = 1
//     }
// }, {})

// OR
const charEyeColor = characters.reduce((acc, cur) => { 
    const color = cur.eye_color;
    if (acc[color]) {
        acc[color]++
    } else {
        acc[color] = 1;
    }
    return acc;
}, {});
console.log(charEyeColor)

//4. Get total number of characters in all the character names
// add the length to the acc, with 0 as the initial value
const totalNames = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalNames);


//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
