let favMovie = (name = "Tommy Wiseau", movie = 'The Room') => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie("Colin", "Pulp Fiction");

let getFirstName = (name) => {
    let firstName = name.split(' ');
    console.log(firstName[0]); 
}

getFirstName("Colin Huckestein");


let getFirstNameConcise = name => console.log(name.split(' ')[0]); 

getFirstNameConcise("Colin Huckestein");

let doMath = (x, y) => ({
    exponent: Math.pow(x, y),
    product: x * y
});
   
let mathResult = doMath(2, 2);
console.log(`${mathResult.exponent}`);
console.log(`${mathResult.product}`);

let myArr = ["Colin", "Birmingham", "Thai food"];
let myName = "Colin";

newFunc(...myArr);

function newFunc (name, location, favFood) {
    console.log(`I am ${name} and I'm from ${location} and my favorite food is ${favFood}`);
};

function nameFunc (name) {
    let nameSpread = [...name];

    for (i = 0; i < nameSpread.length; i++) {
        console.log(nameSpread[i]);
    };
};

nameFunc(myName);

