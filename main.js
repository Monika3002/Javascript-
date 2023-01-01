//log a statement using console.log()
console.log('hello ') //hello

//variable
let age = 25
console.log(age)   //25

const salary = 80000
console.log(salary)    //80000

//difference  between let and constant are we required the let if we want to change the vaule 
// while in const we can't change the value of variable

let sum = 0
sum = 23
console.log(sum)    //23


//datatypes
// total number of datatyoe are 2 primitive and non primitive
// primitive data type are string , number, boolean, undefined, null, bigint , symbol

//string
const string = 'Monika'
const language = 'Javascript'
const website = 'vscode'
console.log(string, language, website)      //Monika Javascript vscode

//number
let mark = 89
let percentage = 99.9
console.log(mark, percentage)           //89 99.9

//boolean
const isPrime = true
let isGood = false
console.log(isPrime, isGood)            //true false

//undefined
let value
console.log(value)              //undefined

//null
const secondValue = null
console.log(secondValue)             //null


//primitive datatype

//literals-collection of different datatype in variable contain key and datatype
const person = {
    'firstName': 'Monika',
    'lastName': 'Basene',
    'age': 19,
    'marks': 9.9,
    'isGood': true,
}
console.log(person.age, person.lastName);       //19 Basene

//array
const newArray = [2, 4, 5, 67, 34, 56, 7, 8, 9]
console.log(newArray[3]);      //67

//operators
//asssignment operator,arthmetic operators, comparision operator
//logical operator,string operator,other operator

let x = 10
let y = 5
console.log(x + y)                ///15
console.log(x % y)                  //0

console.log(x / y);              //2
console.log(x > 8 && 8 > y);              //true

console.log('Monika ' + 'Basene');   // Monika Basene  concatenation when used with string and adtion with number
console.log('6' + '7');    // 67  concatenation when used with string and adtion with number


//tertiary operator

const isEven = 10 % 3 == 0 ? true : false
console.log(isEven); //false

//type conversions:two type of conversion
//1 Implicit conversion called as type coercion 
//2 explicit conversion 
console.log(true + '3')    ///true3
console.log("4" - "5");   //-1
console.log('5' + '6');   //56
console.log("4" * "5");  //20
console.log("4" / "5");  //0.8
console.log(false * '3');
console.log('bruce' - 'wayen');  //NaN



console.log(Number('5'))  //5  number
console.log(parseFloat('8.1'));    ///6  floating number
console.log(String(400))    ///400
console.log(Boolean(10));  //null undefined 0 ' NaN

// equality :  (==) coercion    (===)without coercion
const var1 = 10
const var2 = '10'
console.log(var1 == var2)
console.log(var1 === var2)

//conditional statement
const num = 5
if (num > 0) {
    console.log('Number is positive')
}
else if (num = 0) {
    console.log('Number is zero');
}
else {
    console.log('Number is negative')
}


//SWITCH
const color = 'red'
switch (color) {
    case 'red':
        console.log('Color is red');
        break
    case 'Orange':
        console.log('Color is Orange');
        break
    case 'green':
        console.log('Color is green');
        break
    case 'blue':
        console.log('Color is blue');
        break
    default:
        console.log('Not valid')
        break
}


//conditional statement

//for, while ,do..while,  for of loop
console.log('for loop')
for (let i = 1; i <= 5; i++) {
    console.log('Iteration number ' + i);
}

console.log('do loop')
let j = 5
while (j <= 7) {
    console.log('Iteration number ' + j);
    j++
}

console.log('do..while loop')
let k = 9
do {
    console.log('Iteration number ' + k);
    k++
}
while (k <= 3)

console.log('for..of..loop')
// for,,of,,loop is used to iterate the collection of data
let numArray = [2, 5, 4, 7, 8, 5, 4]
for (const num of numArray) {
    console.log('Iteration number ' + num);

}

//function

function greet(user) {
    console.log('good night ' + user);
}

greet('monika')
greet('Mama')
greet('Nani')

function add(a, b) {
    return a + b
}
const addition = add(24, 34)
console.log(addition);
console.log(add(24, 34));

//arrow function in another way of representing a function
arrowSum = (c, d) => {
    return c + d
}

const Sum = arrowSum(30, 30)
console.log(Sum)

// scope
// block scope
// function scope
//gobal scope outside the block defined in every way

