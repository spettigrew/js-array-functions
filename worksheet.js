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


//***FILTER*** Take array of items and pick out what you want based on the filter
//1. Get characters with mass greater than 100
// filter take a cb function (arrow function)
// return each individual item
const greatMass = characters.filter(character => character.mass > 100)
console.log(greatMass);

//2. Get characters with height less than 200
// for each char, implicit return and if height is less than 200
const shortHeight = characters.filter(character => character.height < 200);
console.log(shortHeight);

//3. Get all male characters
const maleCharacters = characters.filter(character => character.gender === "male");
console.log(maleCharacters);

//4. Get all female characters
const femaleCharacters = characters.filter(character => characters.gender === "female");
console.log(femaleCharacters);


//***SORT*** - iterate through each item in the array and sort it.
//1. Sort by mass
// cb function with two parameters (a, b) compare function. If result is positive, return b is sorted before a. If result is negative a is sorted before b.
const byMass = characters.sort((a, b) => {
    return a.mass - b.mass; // returns an ascending order
})
console.log(byMass);

//2. Sort by height
const byHeight = characters.sort((a, b) => {
    return a.height - b.height
})
console.log(byHeight);
// OR
// const byHeight = characters.sort((a, b) => a.height - b.height) - one line shorthand

//3. Sort by name
const byName = characters.sort((a, b) => {
    // compare a and b. Can't add/subtract strings.
    if (a.name < b.name) return 1;
    return -1
})
console.log(byName);

//4. Sort by gender
const byGender = characters.sort((a, b) => {
    //  logs list with female first.
    if (a.gender === 'female') return -1;
    return 1
})
console.log(byGender);



//***EVERY***  - give it a condition and it will check if every item in that array meets that condition. JS will find that condition
//1. Does every character have blue eyes?
const allBlueEyes = characters.every((character) => characters.eye_color === "blue")
// false because not ALL characters have blue eyes
console.log(allBlueEyes);

//2. Does every character have mass more than 40?
const massGreater40 = characters.every((character) => characters.mass > 40);
console.log(massGreater40);

//3. Is every character shorter than 200?
// character is the parameter and the condition is if the height is less than 200
const short = characters.every((character) => character.height < 200);
console.log(short);

//4. Is every character male?
// === compares the string. Hard equal
const male = characters.every((character) => character.gender === "male")
console.log(male);


//***SOME*** Determines if 1 item in the array meets one or some condition.
//1. Is there at least one male character?
const oneMale = characters.some((character) => character.gender === "male")
console.log(oneMale);

//2. Is there at least one character with blue eyes?
// condition of blue eye color from character parameter
const oneBlue = characters.some((character) => character.eye_color === "blue")
console.log(oneBlue);

//3. Is there at least one character taller than 210?
// false. No character with a mass greater than 210 (condition)
const tallCharacter = characters.some((character) => character.height > 210)
console.log(tallCharacter);

//4. Is there at least one character that has mass less than 50?
// condition of less than 50 = true
const smallCharacter = characters.some((character) => characters.mass < 50);
console.log(smallCharacter);
