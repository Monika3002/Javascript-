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

