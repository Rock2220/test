// https://www.youtube.com/watch?v=aAhGzfUHes8&list=PLDoPjvoNmBAy3siU1b04xY24ZlstofO9M&index=2


// Lesson 2 - Variables

// var
//  - Function Scope
//  - Can be redeclared
//  - Undefined when accessing a variable before being declared
//  - Create Properties in the window object

// let
// - Block Scope
// - Cannot be redeclared
// - ReferenceError when accessing a variable before being declared
// - Doesn't create Properties in the window object

// const
// - Block Scope
// - Cannot be redeclared
// - ReferenceError when accessing a variable before being declared
// - Doesn't create Properties in the window object

// var isco = 5;
// let ramos = 3;

// console.log(window.isco);
// console.log(window.ramos);

//////////////////////////////////
 // Working with const

const name = "Isco";

if(true){
    const name = "Ramos";
    console.log(name);
}

console.log(name);

// Can push values to an array
const players = [];
players.push("Ramos", "Casillas");
console.log(players);

// Can change values of objects

const club = {
    name: "Real Madrid"
};

console.log(club.name);
club.name = "A.C. Milan";
console.log(club.name);

///////////////////////////////////////////// 

// Regular Vs. Arrow Functions

// Regular Function without any Parameters
function printRegular(){
    return 2;
};

let printArrow = () => 2;
let printArrow2 = _ => 9999;

console.log(printArrow());
console.log(printArrow2());


// Regular Function with multiple parameters
function RegularMultiply(x, y){
    return x * y;
};

console.log(RegularMultiply(7,8)); //56

// Arrow Function with multiple parameters
let ArrowMultiply = (a, b) => a * b;

console.log(ArrowMultiply(5, 6)); // 30

///////////////////////////////////////////////////////
// Template Literals

const car = "Aston Martin";
const country = "Italy";
const year = 1998;
let myFavCar = "My favorite car is: " + car + " and was manufactured in " + country + ".";

console.log(myFavCar);


// Using the backtick
console.log(`My favorite car is: ${car} and was manufactured in ${country === "Italy" ? "Milan" : "Spain"}.`);

// Another advantage of using the backtick

// const myHTMLMarkup = `
//     <div class="maindiv">
//         <h2 class="header2">${car}</h2>
//         <span class="ManuYear">${year}</span>
//     </div>`;

// document.body.innerHTML = myHTMLMarkup;


///////////////////////////////////////////////////////

// Spread Operator

// const arr1 = ['x', 'y', 'z'];
// const arr2 = ['a', 'b', 'c'];

// let arrX = [1, 2, 3];
// const arrY = [4, 5, 6];

// console.log(arr1.concat(arr2));

// arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let combinedArray = [...arr1, ...arrX, ...arrY];

// // console.log(sum(arrX));             // Won't work this way

// console.log(arrX);                   // [ 1, 2, 3 ]
// console.log(...arrX);               // 1 2 3 
// console.log(...combinedArray);     // x y z 1 2 3 4 5 6



// let arrZero = [1, 2, 3];
// let arrOne = arrZero;

// arrOne.push(4444);
// console.log(arrZero);                  // BUG, use the spread operator
// console.log(arrOne);      

// console.log(Math.max(arrZero));       //NaN
// console.log(Math.max(...arrZero));    //4444

///////////////////////////////////////////////////////

// Default Parameter

function showInfo(uname, job, shirtcolor){

    uname = uname === undefined? "Admin" : uname;

    // Another way using truthy-falsy pattern
    uname = uname || "Admin";

    job = job === undefined ? "Football Player" : job;

    shirtcolor = shirtcolor === undefined ? "Red" : shirtcolor;

    return `Hello ${uname}, Your job is: ${job}, Shirt color is: ${shirtcolor}`;
}

// Rest Operator
console.log(showInfo()); // Hello undefined, Your job is: undefined, Shirt color is: undefined

console.log(showInfo("Ramos")); // Hello Ramos, Your job is: undefined, Shirt color is: undefined

console.log(showInfo("Isco", "Football Player")); // Hello Isco, Your job is: Football Player, Shirt color is: undefined

console.log(showInfo("Isco", "Football Player", "Yellow")); // Hello Isco, Your job is: Football Player, Shirt color is: Yellow

