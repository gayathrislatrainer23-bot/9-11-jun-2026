// 1. Arithametic operators

console.log(5 + 3)
console.log(5 - 3)
console.log(5 * 3)
console.log(5 / 3)

console.log('expo', 2 ** 3)

console.log('modulus', 12 % 5)

let a = 5
let b = 5
let c = '5'
let d = 6
//   console.log(a == b)
//   console.log(a == c)
//   console.log(a === c)

console.log(a != d)
console.log(a != b)
console.log(a !== c)

console.log(a > d)
console.log(a < d)
console.log(a >= 1)
console.log(a <= 10)

console.log(5 >= 10 && 5 === 5)  //false

console.log(a === b && b !== d)

console.log(5 === '5' || 15 >= 15)  // true
console.log(50 <= 100 || 20 === '20')   // true

console.log(15 == '15' && 30 != 40)

d /= 10
console.log(d)
console.log(a)

console.log(!(5 > 3))

let age = 16
if (age >= 18) {
  console.log('you are eligible for vote')
} else {
  console.log('you are not eligible for vote')
}

let num = 34

if (num < 10) {
  console.log(' it is less than 10')
}
// day-16

// 8/7/2026

//  2. even number  
// let x = ...
// x%2 === 0
let x = 31

if (x % 2 === 0) {
  console.log('it is an even number')
} else {
  console.log('it is an odd number')
}

//  negative number  a>= 0 , a<= 0 
let num2 = 10

// if(num2<0){
//     console.log('it is a  negative number')
// }else {
//       console.log('it is a  +ve number')
// }

if (num2 < 0) {
  console.log('it is a  negative number')
  // document.write('it is a  negative number')
} else if (num2 > 0) {
  console.log('it is a  +ve number')
} else {
  console.log('it is zero')
}
// template literal
// document.write(`hai ${num2}`)

let msg = 'this is a message for students'
console.log(`hai, ${msg}`)

// switch operator
let num3 = 4
switch (num3) {
  case 1:
    console.log(1)
    break;
  case 2:
    console.log(2)
    break;
  case 3:
    console.log(3)
    break;
  case 4:
    console.log(4)
    break;
  default:
    console.log('invalid enter')

}

let num4 = 5;
let num5 = 3;
num4 > num5 ? console.log('this number is big') : console.log('this is small')

// console.log(num4 > num5 ? 'this number is big':'this is small ')

// (10 + 5 > 12) && (8 % 2 === 0)

// num4>= 0  && console.log('this is a positive number')

isShow = false;
// isShow && document.write(' hai, can you see me')


let i = 1
// i = i+1
// i++
// a++ - post-increment
// ++a - pre-increment

let j = i++
console.log(j, i)
let k = ++i
console.log(k, i)

for(let i=0;i<4;i++){
  console.log(i)
}

// 1  to 25 even i<25

// for (let i =1 ; i<25;i++){
//   if(i%2 ===0){
//     console.log(i)
//   }
// }
// // 1  to 25 odd i<25
// sum 1 to 20
// let sum =0;
// for ( let i=1; i<20;i++){
// sum +=i

// }
// 1+2+3+4
// sum =1
// sum = sum  +i
// sum +=i
// console.log(sum,'sum')

//  reverse print 10 to 1
// for (let i =10; i>1; i--){
//   console.log(i)
// }
//  multiplication table

// day-17
// 10/7/2026

let e = 1

//  while(e<2){
//   console.log(e,'e')
//  e++;
//  }
// 1 to 10
let f = 1
while (f <= 10) {
  console.log(f, 'f')
  f++;
}

let g = 10
let gSum = 0
while (g >= 1) {

  gSum += g
  g--
}
console.log('gSum:', gSum)

//  even count 
let count = 0
for (i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log(count)


let h = 1

do {
  console.log(h, 'h');

} while (h < 1)

// do{
//   console.log(h,'h');
//   h++
// }while(h<=2)
// console.log(greetings)

function greetings() {
  // console.log('welcome')
  return 'welcome'
}
let str = greetings()
console.log(str)
console.log(greetings())

function add(a, b) {

  return a + b
}

console.log(add(10, 3))
console.log(add(100, 13))

// day-18

// 13/7/2026
// 1.function expression
// checkEvenOrOdd

let checkEvenOrOdd = function (num) {
  if (num % 2 === 0) {
    return `${num} is an even number`
  } else {
    return `${num} is an odd number`
  }
}
console.log(checkEvenOrOdd(10))

// sum of a to b

let findSum = (a, b) => {
  if (a > b) {
    return `invalid `
  }
  let sum = 0
  for (let i = a; i <= b; i++) {
    sum += i
  }
  return `${sum} is the sum from ${a} to ${b} `

}
let result = findSum(10, 30)
console.log(result)

// console.log(Math.floor(10.9))
// num5= 10345
// num5/10

// 14/7/2026

// default parameter
function hai(city = 'chennai') {
  console.log(city)
}
hai()
hai('mumbai')
// Anonimous function

function main(callback) {
  callback()
}

main((a, b) => a + b)



let fruits = ["Apple", "Orange", 'papaya']

console.log(fruits)
console.log(typeof (fruits))
console.log(fruits.length)

//  console.log( fruits[index])
//  console.log( fruits[0])
//  console.log( fruits[1])
//  console.log( fruits[2])
//  console.log( fruits[3])

// first element
//  console.log( fruits[0])
// last element
//  console.log( fruits[fruits.length-1])

// for loop

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

//  for of

let students = ['manu', 'rathu', 'renu']

for (element of students) {
  console.log(element)
}

// 1. create an array of even number and print using for  loop
// 2. create an array of vegitables and print using for of
// 3. [15,29,45,88,99,5,8,9,10] and print  odd number

// for in

let num10 = [15, 29, 45, 88, 99, 5, 8, 9, 10]

// for (i=0;i<num10.length;i++){
//   if(num10[i]%2 !== 0){
//     console.log(num10[i])
//   }
// }

function printOddNumber(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i])
    }
  }

}

printOddNumber(num10)
// printOddNumber(num11)

let colors = ['red', 'green', 'blue', 'yellow', 'orange']

function printColors(arr) {

  for (index in arr) {
    console.log(arr[index])

  }
}
printColors(colors)

function findMultiplicationOfFive(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      result[result.length] = arr[i]

    }
  }
  return result;

}
console.log(findMultiplicationOfFive([5, 10, 4, 40]))

// result  length ?   0
// result[0]=?
// result[result.length] = 9;
// result[0]
// result.length=1
// result[1]

// 


// 16/7/2026

let fruits1 = ["Apple", "Orange"]
// fruits1.push('Mango')
// fruits1.pop()
// fruits1.unshift('Mango')
fruits1.shift()
console.log(fruits1)

// 16/7/2026

let nums = [1, 2, 3, 4]
let d2 = nums.map((element, i) => element * 2)

console.log(nums)
console.log(d2)

// filter
console.log(nums.filter((num, i) => num > 2))
console.log(nums.filter((num, i) => num % 2 === 0))

// Create an array [10, 20, 30].make each elemt divided by 10

//  Create an array [3, 6, 9, 12, 15]. Use filter() + map() to get double of numbers greater than 6.

let arr3 = [3, 6, 9, 12, 15]
let result2 = arr3.filter((num) => num > 6)
  .map((num) => num * 2)
console.log(result2)

// From [5, 8, 12, 19, 25], find the first number greater than 15.
let int = [5, 8, 12, 19, 25, false]
console.log(int.find((element) => element > 15))

console.log(int.includes(false))
console.log(int.includes(8))

let num15 = [10, 20, 30]
let sum = num15.reduce((acu, element) => acu + element)
console.log(sum)
// acu =0
// 0+10 = 10
// 10+20 = 30
// 30+30 = 60
// 60

let product = num15.reduce((acu, element) => acu * element)
//  arr.reduce(function,init)
//  acu -1
// 1*10 = 10
//  10*20 = 200
// 200*30 = 6000
// num15.reduce((acu,element)=>acu*element,10)
console.log(product)

// 21/7/2026

let person = {
  name: 'Gayathri',
  age: 23,
  isEligible: true

}
// 1. dot Notification
console.log(person.age)
console.log(person.isEligible)
console.log(person.name)

// 2. bracket notation 
console.log(person['age'], 'bracket notation')
console.log(person['name'], 'bracket notation')
console.log(person['isEligible'], 'bracket notation')

// add update  delete

person.gender = 'female'
console.log(person.gender)
person.name = 'Renu'
console.log(person.name)
console.log(person)
delete person.gender
console.log(person)

let student = {
  name: "Ravi",
  age: 12,
  class1: 7,
  greet:function (){
    console.log( 'hello,',this.name)
  },
  // address : {
  //   no: 1,
  //   street : '',
  //   city : 'chennai'
  // }
}
console.log(student?.address?.city,'city')
// for in 

// for (let key in student ){
//   console.log(` ${key}: ${student[key]}`)
// }

// methods in objects

student.greet()


let calculator = {
  add : function ( a,b){
    return a+b;
  },
  sub : function ( a,b){
    return a-b;
  }
}
console.log(calculator.add(10,20)) 

// 22/7/2026

  // <!-- object utility methods -->

// for keys(array of keys)
let keys = Object.keys(calculator)
console.log(keys)

// for values(array of values)
let values = Object.values(student)
console.log(values)

// entries
// [['name','ravi'],['age',4]]

let entries = Object.entries(student)
console.log(entries)

// let employee1 = {
//   name :'hari',
//   age : 34

// }

// class : blueprint object

class Employee {
  constructor(name, age,salary){
 this.name = name,
 this.age = age ,
 this.salary =salary
  }
salaryInc(amount){
    this.salary += amount
    // console.log(this.salary)
}

}

const e1 = new Employee('Raju S',34, 40000)
const e2 = new Employee('Ramu  T',41, 50000)
console.log(e1)
console.log(e2)
e1.salaryInc(10000)
console.log(e1.salary)

// 23/7/2026
// localStorage

localStorage.setItem('theme','dark')
localStorage.setItem('theme2','light')
let name1 =localStorage.getItem('name')
console.log(name1)
 localStorage.removeItem('name')
localStorage.clear()

// session storage

sessionStorage.setItem('id', 12345)
sessionStorage.setItem('_id', 123450)
console.log(sessionStorage.getItem('id'))
 sessionStorage.removeItem('_id')
 sessionStorage.clear()

//  cookies

document.cookie = 'userName=Raju'
console.log(document.cookie)
let date = new Date()
date.setMinutes(date.getMinutes()+1)
 document.cookie = `id=123; expires=${date.toUTCString()}; path=/ }`

// DESTRUCTURING

      let colors1  =['red', 'green', 'orange'] 
      let [c1,c2,c3] =colors1 
      console.log(c1)

      let {name, greet, class1,age: userAge} = student

      console.log(name)
      console.log(userAge)
      console.log(class1)
      console.log(greet)

      //  spread and rest operator

      // spread operator
      // copy

      let nums1 = [1,2,3]
      let newNums = [...nums1]
      console.log("nums:",nums1)
      console.log("newNums:",newNums)
      let nums2 = [4,5,6]
      // merge 
      const merge = [...nums1,...nums2]
      let r = [nums2,nums2]
      console.log('merge',merge)
      console.log('r',r)
  //     let re = nums1 + nums2
  // console.log('re',re)

// rest operator
// ...
// rest in destructuring

let [first,second,...others] = [10,20,30,309]

console.log(first)
console.log(second)
console.log(others)

// function 

function sumOfNums(...numbers){
let sum= 0
for(let n of numbers ){
  sum +=n
}
console.log(sum)
}
sumOfNums(5,4,7,9,50)

sumOfNums(...nums1)

// setTimeout

console.log('taking first order')
setTimeout(()=>{
console.log('first order cooked')
},2000)
console.log("taking second order")

// 27/7/2026

setInterval
let count1 = 0
let id =setInterval(()=>{
console.log('run every 2 s')
count1++;
if(count1 === 2){
clearInterval(id)
}
},2000)

// otp
// console.log('otp sent')
// let orginalOtp = '123'
// let enteredOtp = '124'
// setTimeout(()=>{
// if(enteredOtp === orginalOtp){
//   console.log('otp varified')

// }else{
//   console.log('invalid otp')
// }
// },20000)

//task:1 auto logout

// let loggedIn = true;
// if(loggedIn){
//   localStorage.setItem('token', 'kdbfhfd')
// }

// setTimeout(()=>{
// localStorage.removeItem('token')
// console.log('session expared,Login again')
// }, 20000)

// let progress = 0;
// let upload = setInterval(()=>{
// progress += 10
// console.log(`uploading.... ${progress}% COMPLETED`)
// if(progress === 100){
//   console.log('upload completed')
//   clearInterval(upload)
// }
// },2000)

// TIMER

// callback function

// 1. function : specific task 
  //  2. fun2     : task...Employee,fun1

//   function bye (){
//     console.log('GOODBYE')
//   }
// function greet1(task2){
// console.log('haii, good morning')
// task2()
// }
// greet1(bye)

// payment
function invoice(){
  console.log('invoice created')
  
}
function makePayment (calback){

  console.log('processing payment... ')
  setTimeout(()=>{
console.log('payment successful')
calback()
  },2000)
}
 makePayment(invoice)


//  28/7/2026
// Error handling

function division(a,b){
try{

  if(b===0){
    throw  new Error(`can't devided by 0`)
  }

  console.log( a/b)
}catch(err){
  console.log(err.message)
}
}
// division(6,0)

// promise 

let promise = new Promise((resolve,reject)=>{
  let isSuccess = true;
  if(isSuccess){
    // console.log('payment successfull')
    resolve('payment successfull')
  }else{
    reject('payment failed')
  }
}
)
promise.then((result)=>console.log(result))
       .catch((err)=>console.log(err))

 
function sum1(a,b,callback){
result = a+b
console.log(result,'sum')
callback(result)
}  

function subutration(num,calback) {
let subResult = num-5
console.log(subResult,'subResult')
 callback(subResult)

}

function multiplication (subResult){
let mult = subResult *2
console.log(mult,"nult")
}
sum1(10,20,(sum)=>{
subutration(sum,(sub)=>{
multiplication(sub)
})
})

sum1(10,20, )


// let num1 = 10
// let num12 = 20
// function add(a,b){
// return a+b
// }
// function sub(a,b){
// return a-b
// }
// function mult(a,b){
// return a*b
// }

// let sum4 = add (num1, num12)
// let sub4 = sub(sum4,5)
// let final = mult(sub4,10)
// console.log(final)



