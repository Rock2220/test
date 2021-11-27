// function wordblanks(myNoun, myAdjective, myVerb, myAdverb){
//   var result = "";
//   result+= "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
//   return result;}
// console.log(wordblanks("perro", "big", "ran", "quickly"))
// console.log(wordblanks("bike", "slow", "flew", "quickly"))


/* Arrays */
// var myarr =["John", 23];
// var indexData = myarr[0];   // John
// console.log(indexData)

// var nestedarr = [["Mark", 28], ["John", 23]];
// var Data1 = nestedarr[0][1] // 28

//////////////////////////////////////////////////////////////////////////

// var nestedarr2 = [[1,2,3], [4,5,6], [7,8,9], [[10, 11, 12], 13, 14]];
// var Data2 = nestedarr2[3][0][1] // 11
// console.log(Data2)

// nestedarr2.push(1555)
// nestedarr2.push(23)
// console.log(nestedarr2)

// nestedarr2.pop()
// console.log(nestedarr2)

//////////////////////////////////////////////////////////////////////////

// var myarr2 =["John", 23, "W"];
// myarr2.shift();
// console.log(myarr2) // [ 23, 'W' ]

// myarr2.unshift("Madrid")
// console.log(myarr2) // [ 'Madrid', 23, 'W' ]

//////////////////////////////////////////////////////////////////////////

// var club = "Real Madrid";

// function myFavClub(){
//   var club = "A.C. Milan";
//   return club;
// }

// console.log(myFavClub()); // A.C. Milan
// console.log(club); // Real Madrid

//////////////////////////////////////////////////////////////////////////

// function testLogicalAnd(val)
// {
//   if(val <=50 || val>=25){
//     return "True"
//   }
//   return "False"
// }

// console.log(testLogicalAnd(65));

//////////////////////////////////////////////////////////////////////////

// function testElseIf(val)
// {
//   if(val > 10){
//     return "Greater than 10"
//   }
//   else if(val < 5){
//     return "Smaller than 5";
//   }
//   else{
//     return "Between 5 and 10"
//   }
// }
// console.log(testElseIf(7));

//////////////////////////////////////////////////////////////////////////

// function orderMyLogic(val)
// {
//   if(val < 5){
//     return "Less than 5"
//   }
//   else if(val < 10){
//     return "Less than 10";
//   }
//   else{
//     return "Between 5 and 10"
//   }
// }

// console.log(orderMyLogic(3));

//////////////////////////////////////////////////////////////////////////
/* Chaining If Else Statements */

// function testSize(num){
//   if (num < 5){
//     return "Tiny"
//   }
//   else if (num < 10){
//     return "Small"
//   }
//   else if (num < 15){
//     return "Medium"
//   }
//   else if (num < 20){
//     return "Large"
//   }
//   else{
//     return "Huge"
//   }

// }

// console.log(testSize(17));

//////////////////////////////////////////////////////////////////////////

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

// function golfScore(par, strokes)
// {
//     if (strokes == 1){
//         return names[0];
//     }
//     else if(strokes <= (par-2)){
//         return names[1];
//     }
//     else if(strokes == (par-1)){
//         return names[2];
//     }
//     else if (strokes == par){
//         return names[3];
//     }
//     else if(strokes == (par+1)){
//         return names[4];
//     }
//     else if (strokes == (par+3)){
//         return names[5];
//     }
//     else if (strokes >= (par+3)){
//         return names[6];
//     }
//     else{
//         return "Change Me";
//     }
// }

// console.log(golfScore(5,4)); //Birdie

// console.log(golfScore(1,1)); //Hole-in-one!

////////////////////////////////////////////////////////////////////////
// Switch Statement
// function switchFunction(val){
//   answer = " ";
//   switch(val){
//     case 1:
//       answer = "Alpha";
//       break;
//     case 2:
//       answer = "Beta";
//       break;
//     case 3:
//       answer = "Gamma";
//       break;
//     case 4:
//       answer = "Delta"
//       break;
//     default:
//       answer = "Default is like an else statement";
//       break;
//   }
//   return answer;
// }

// console.log(switchFunction(2));

//////////////////////////////////////////////////////////////////////////////

// function switchFunc(val){
//   answer = " "
//   switch(val){
//     case 1:
//     case 2:
//     case 3:
//       answer = "Values from 1 to 3 will run this!";
//       default:
//       answer = "First 3 cases!";
//     case 4:
//     case 5:
//     case 6:
//       answer = "Values from 4 to 6 will run this!";

//   }
//   return answer;
// }

// console.log(switchFunc(1));
//////////////////////////////////////////////////////////////////////////////

 /* JavaScript Objects */
// var myPlane = [
//   {"name": "Boeing 337",
//   "num_of_passengers": 150,
//   1995: "Mid Nintees"
// },
// {
//   "secondName": "Boeing 555",
//   "Year": 1880
// }
// ];

// var PlaneName = myPlane.name;
// var PassengersNum = myPlane['num_of_passengers'];

// var year = 1995;
// var YearManufactured = myPlane[year];

// console.log(PlaneName);
// console.log(PassengersNum);
// console.log(YearManufactured);


// // Adding properties to an object
// myPlane['Country'] = "Egypt";

// // Deleting object properties
// //delete myPlane.Country;

// console.log(myPlane);

// Accessing Nested properties

// var myPlane = {
//   "plane": {
//     "flies": {
//       "Above": "Sky"
//     },
//   }
// };


// console.log(myPlane.plane.inside)


////////////////////////////////////////////////////////////////////
/* Accessing Nested Arrays */
// var car = [
//   {
//     name: "Aston Martin",
//     color: [
//       "yellow",
//       "blue",
//       "red"
//     ]
//   },
//   {
//     type: "Test",
//     Direction: [
//       "Forward",
//       "Down",
//       "Left"
//     ]
//   }
// ];

// var myCar = car[1].Direction[0];
// console.log(myCar); //Forward

////////////////////////////////////////////////////////////////////

// /* While Loops */

// var myIncrementArr = [];
// i = 0;

// while(i< 50){
//     myIncrementArr.push(i);
//     i++;
// }

// console.log(myIncrementArr);

////////////////////////////////////////////////////////////////////

//  Iterating Numbers with For Loop
// var myArr = [];

// for(var i=0; i < 10; i++){
//     myArr.push(i);
// }

// console.log(myArr);

/* Counting Even Numbers using For Loop */
// var myEven = [];
// var myOdd = [];

// for(var i=0; i < 10; i+=2){
//     myEven.push(i);
// }

// for(var i=1; i < 10; i+=2){
//     myOdd.push(i);
// }

// console.log(myOdd);

/* Iterating through an array */
// var index = 0;
// for(index in myEven){
//     console.log(myEven[index]);
// }

// /* Another way */

// for(x=0; x<myEven.length; x++){
//     console.log(myEven[x]);
// }
////////////////////////////////////////////////////////////////////

/* var myArr = [[1,2], [3,4], [5,6,7]];
var product = 1;
for(var i = 0; i < myArr.length; i++){
    for (var k = 0; k < myArr[i].length; k++){
        product *= myArr[i][k];
    }
}

console.log(product); // 5040 */

/////////////////////////////////////////////////////////////////////
/* Do While Loop */
/* var myArr = [];
var i = 10;

do{
  myArr.push(i);
  i++;
} while(i<5)

console.log(myArr); */
/////////////////////////////////////////////////////////////////////

// Generating Random Fraction
/*
function RandomFraction(){
  return Math.random();
}

console.log(RandomFraction()); */
// Returns a Decimal Random Number between 0 and 1 but not including 1


// Returns a Random Number between 0 and 20 but not including 20
// console.log(Math.floor(Math.random() * 20));

// Returns a Random Number between 0 and 20 but not including 10
// console.log(Math.floor(Math.random() * 10));

/////////////////////////////////////////////////////////////////////

// Converting String to Integer
/* console.log(parseInt("999"));
console.log(typeof(parseInt("999")));
*/

/* console.log(parseInt("110010", 2)); // Output = 50

console.log(parseInt("110010", 3)); // Output = 327

console.log(parseInt("110010", 8)); // Output = 36872

console.log(parseInt("110010", 9)); // Output = 65619

console.log(parseInt("110010", 10)); // Output = 110010 */
