// Function Declaration
// If the Declaration is at the end of Javascript code, Called before declared. It will still work.

function calculate(a, b){
    console.log(a+b)
};

calculate(2, 150);


// Function Expression
// If the Expression is at the end of Javascript code, Called at the begining. It won't work.
var car = function(name = "Bugatti Veyron"){
    console.log(name);
};

car(); //Bugatti Veyron
car("Aston Martin"); //Aston Martin


// Arrown Fucntions
// If there's one parameter, We can take away the parentheses ()
const player = (firstname, lastname) => {
    console.log(firstname, lastname);
};

player("Sergio", "Ramos");


// Another way of writing functions
const calcArea = radius => console.log(3.14 * radius ** 2); 

calcArea(5);


//Callback functions
const club = ["A.C Milan", "Real Madrid C.F", "Bayern Munchen F.C", "Tottenham F.C"];

/* club.forEach(
    function(club){
    console.log(club);}
    ); */

// Same result using Arrow Functions
club.forEach(
    club => console.log(club)
    );

// Same result with multiple parameters
club.forEach(
    (club, index) => console.log(index, club)
    ); 