//log a statement using console.log()
console.log('hello ')

//variable
let age = 25
console.log(age)

const salary = 80000
console.log(salary)

//difference  between let and constant are we required the let if we want to change the vaule 
// while in const we can't change the value of variable

let sum = 0
sum = 23
console.log(sum)


//datatypes
// total number of datatyoe are 2 primitive and non primitive
// primitive data type are string , number, boolean, undefined, null, bigint , symbol

//string
const string = 'Monika'
const language = 'Javascript'
const website = 'vscode'
console.log(string, language, website)

//number
let mark = 89
let percentage = 99.9
console.log(mark, percentage)

//boolean
const isPrime = true
let isGood = false
console.log(isPrime, isGood)

//undefined
let value
console.log(value)

//null
const secondValue = null
console.log(secondValue)


//primitive datatype

//literals-collection of different datatype in variable contain key and datatype
const person = {
    'firstName': 'Monika',
    'lastName': 'Basene',
    'age': 19,
    'marks': 9.9,
    'isGood': true,
}
console.log(person.age, person.lastName);