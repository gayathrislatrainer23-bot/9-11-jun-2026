<!-- 17/6/2026 -->

html--> Hypertext markip language
<!DOCTYPE html>   html version  html5 
                  declaration line of code

<html  >
              main container/ root element
</html>

<head>
             page info 
</head>

 <title>day-1 html</title>     name of website 

<body>
              visible contant
</body>

<!-- about -->
top level ---> root elemet 
html
container --->  body

<div>
div
</div>
child elemement 

<!-- day1.html -->

18/6/2026
Why Use Semantic Tags?

➔ Improves readability and accessibility.
Example:
<header>
  <h1>Website Logo</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">Contact</a>
</nav>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content here.</p>
    <aside> tip : ….</aside>
    <aside> Did You Know?</aside>

  </article>
</main>

<footer>
  <p>© 2025 My Website</p>
</footer>


Formatting Tags:

<b> → Bold
<i> → Italic
<u> → Underline
<strong> → Important text (bold)
<em> → Emphasized text (italic)
<mark> → Highlighted text
<small> → Small text

19/6/2026

<p> -> p tag
<p>content</p> -> element
 
--> static and dynamic web
---> a tag
    href -- link
       download

 id --> unique id for element , p --> content id 
class --> group elemets  css, js 

 inline --> style="color: blueviolet;"
 internal-- style tag opening closing tag  head /below title 
 selector{
        color: chartreuse;
    }<style>
 external - link  
 
<!-- 25/6/2026 -->
<!-- inline -->
   <P style="color: blue;"> content </p>

   style = "property : " value";
   internal
   style
      
   style

        selector {
            property : value
        } 

selector - tag (p,div,h1 to h6, span ...), class, id

h1{
  color : red;
}
29/6/2026

<!-- COLORS -->

1. named format
2. hexadecimal
3. rgb

named format
color: red
hexadecimal
0 to 9 a to f
#ffff
#000000
#ff0000
#00ff00
#0000ff
#ffff00
rgb

color: rgb(255,0,0)
color: rgb(255,255,36)

30/6/2026
1.px   -->pixels  -- fixed size
20px fixed

2. em - parent related
div fornt: 
p
p 1 em = div  
2em = 2* div -size

div{
  font-size: 20px; 2*20

}
div p{
  font-size: .5em

}

3. rem --> relative to root element
html{
  font-size: 10px
}

p  --. 1rem   : 10PX
       2rem    : 20px
       .5rem  : 5px

% : relative parent
div 10px
p : 50%  5px

5. vh  - viewport height
1vh = 1% of browser height
100vh : 100% full height of browser
1000px
p : 1vh

box{
  height: 1vh
}

6. vw - viewport  width
1vw : 1% of width
100vw: 100% full width of browser

<!-- 1/7/2026 -->
1. css layout
display  properties
1.block, inline, inline block

6/7/2026

variable : it's memeory location  to store data
var - redeclare and reassign
let - can't redeclare but reassign
cont - can't redeclare and reassign

var name ;
conaole.log(?)

var - initialization - undefined , 
let -initialization -undefined, initialization line of code : value 
const - initilization must

DATA TYPES IN JKAVASCRIPT

primitive datatypes

string: "kjzdgfksdagif1234@56", 'ndas'
number : 23,67, 12.56
boolean : true, false
undefined : declared but not assigned
null : empty
let age = null

non-primitive datatypes

Array: [1,2,3] and 
object  {
name : " ramu",
age  : 23
}

<!-- 7/7/2026 -->

Operators
1. Arithametic operators
     
     +,-,/,* **, %

2. Comparision operators
  
  let a =5
  let b = 5
  console.log(a == b)
== --> only checking value not checking datatype
=== -->  checking value and checking datatype
  console.log(a === b)
!= not erqual to, only checking value
!== not erqual to, checking value and checking datatype
> greater than
>=
<
<=

3. Logical   operators
and  && -->   s + s 
           T + T = T
           f + t = f
           t + f  = f
           f + f =f
or || --->  t t t
            t f  t
            f t  t
            f f   f       
not  !        c

console.log(!true)
console.log(!false)


4. Assignment operators

a=5
<!-- a = a+10 -->
a += 10      a = a+10 
a -=10        a = a-10
a * = 10      a = a*10
a /=10         a = a/10



// 1
console.log((10 + 5 > 12) && (8 % 2 === 0));

// 2
console.log((20 - 10 == "10") || (5 * 2 < 5));

// 3
console.log(!((30 / 3) >= 15));

// 4
console.log((12 % 5 !== 2) && (8 + 2 === 10));

// 5
console.log((50 - 20 <= 25) || !(6 > 3));

// 6
console.log((7 * 5 === 35) && !(15 % 4 == 3));

// 7
console.log((100 / 4 >= 25) || (9 !== "9"));

// 8
console.log((18 + 2 === 20) && (15 - 5 > 12) || (8 % 3 == 2));

// 9
console.log(!((40 / 5) < 10) && (12 * 2 === 24));

// 10
console.log((25 % 4 == 1) && (30 / 2 === 15) && !(5 < 3));

<!--  conditional statement -->
 5>3  // true
  console.log('true')

  if(statement){
    console.log('')
  }
  
  if(age>=18){
    console.log('you are eligible for vote')
  }


if -else
   if(age>=18){
    console.log('you are eligible for vote')
  }else{
        console.log('you are not eligible for vote')
  }


  1. your number is less than 10
  2. even number  
  3. even or odd
  4. negative number  a>= 0 , a<= 0 
  5. negative and possitive

  <!-- else if ladder -->


  template literal
  '',""
  ``
  document.write(`hai ${num2}`)

let msg = 'this is a message for students'
console.log(`hai, ${msg}`)


<!-- switch statement -->
let a = 4
switch (variable = 4 ){
  case  value1  1:
  console.log('1)
  case  2 :
    console.log('1)
  case  value3 :
  case  value4 :
    console.log()
}

switch(4){
  case 1 :
  col.
  case 2: 
  c
  case 3:

  case 4 :
  console.log(4)
}
1-7
day =1 monday
day =2 tuesday
 
day 1 - monday

day - 1
print monday

<!-- 9/7/2026 -->

3. ternary

 condition ? left : right
 5 >3 ?  the number is big : 'the number is small' 
  
oop : repeat a bock of code  
       condition /limit

1 to 10
1
2
3
4 ....
1.for loop
2.while loop
3.do while 

  loop
// for loop
for(initialization; condition; increment){

}
for(let i = 0; i<4;i++){
    console.log(i)
}
<!-- first itration -->
i=0
check condition 0<4 ===> true
print 0
i++ --> i=0+1=1
<!-- 2nd itration -->


i=1
check condition 1<4 ===>true
print 1
i++ --> i=1+1=2
<!-- 3rd itration -->


i=2
check condition 2<4 ===>true
print 2
i++ --> i=2+1=3
<!-- 4rd itration -->


i=3
check condition 3<4 ===>true
print 3
i++ --> i=3+1=4
<!-- 5rd itration -->


i=4
check condition 4<4 ===>false
<!-- print 4  not print 4 -->

out
a++    a+1


a++ - post-increment
++a - pre-increment

a= 5

b= a++
a =6
b= 5

c= 8
d= ++c
c= 9
d=9

class- task: print even number 1 to 15

10/7/2026

<!-- while loop -->
while(condition){
code
}

let i = 1
while(i<2){
console.log(i)
    i++;
}



do.. while loop

do{
    <!-- code -->
}while(condition)


function
A function is a block of code designed to perform a specific task. 

function Greetings(){
    console.log("haii)
}
function --> keyword
Greatings --> Name of function
() --> invoking the fun

  function Greetings(num1){

    console.log("haii")
           do{
 console.log("num1",num1)
 num1++;

}while(num1<20)

}
let ten =15

// Greetings(0)
// Greetings(1)
Greetings(ten)

// function checking(num){

// }
function features(student){
    console.log(`${student} should be good look`)
    // template literal (back notation)
}
let student1= "Riyas"
let student2 = "sanjai"
features(student1)
features(student2)

task:
function checkEvenOrOdd(num){

}
Odd(argument1, argument2)

function features(student){
       console.log(`${student} should be good look`)

    return  (`${student} should be good look`)


}
<!-- 13/7/2026 -->

types of function

1. function declaration

function greetings(){
    console.log("haii)
}

2. fuction expression

let greetings = function {
      console.log("haii)
}
greetings()

3. Arrow function
short syntax of function 
const add = (a,b)=>console.log(a+b)
add()

Count Even Numbers
 Create a function that takes a number  and returns how many numbers are even.

<!-- 14/7/2026 -->
Anounymous function

function (){

}

Default Parameter

function greet(name = "Renu"){
    console.log(name)
}

push, pop,shift unshift,

Array --> collection of  values stored in single variable

let fruits =["Apple", "Orange"]
1. fruits[index] 
2. push -- add element to last   --fruits.push('mango')
3. pop -- remove element from last
4. shift -- remove element from first
4. unshift -- add element to first

loops in array

1. for  of loop
2. for  in loop
3. for 


Create an array of 3 Vegetables and add one more using push().


Remove the last element from an array using pop().


Add one element at the start using unshift().


Remove the first element using shift().


Print all elements of an array using a for loop.


Print all elements using for...of loop.
Print all elements using for...in loop.


itrating

<!-- 17/7/2026 -->
<!--map  -->
let nums = [1,2,3]
doubleNums = []

map --> function/ action new array return

let doubleNums = nums.map(
  (elemet)=> element*2
)
 let newarr = arr.map(
  (e)=> e-2
 )

1. Create an array [10, 20, 30].
 2. Use map() to make a new array where each number is divided by 10.
 3. Create an array [3, 6, 9, 12, 15]. Use filter() + map() to get double of numbers greater than 6.

 4. Write a program  to remove negative numbers from an array [-2, 5, -1, 8, 10] 
 5. Write a program  to find the first odd number in an array [2, 4, 6, 7, 9].
<!-- next level -->
1. From the array [1, 2, 3, 4, 5, 6, 7, 8], return only even numbers and then multiply each by 2.

2. From the array [5, 12, 8, 20, 3, 15], remove all numbers less than 10 and then add 5 to the remaining numbers.

3. From the array [25, 45, 60, 30, 80, 50], keep only marks above 40 and then convert them to percentage by multiplying by 2.

4. From the array [-10, 20, -5, 55, 70, 30], take only positive numbers and then find the first value greater than 50.

5. From the array [2, 3, 4, 5, 6, 8], remove all odd numbers, square the remaining numbers, and finally get the first number greater than 100.

 6. From [5, 8, 12, 19, 25], find the first number greater than 15.

  <!-- object utility methods -->

  <!-- Object -->






// callback function
a fun passing to an another function as an argument to execute later.

function parent(child){

  
  child()

}


function child(){

}

function main (callback){

}

