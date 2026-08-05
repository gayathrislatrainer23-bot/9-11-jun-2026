<!-- 1. operators --------------------------------- -->

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

console.log(100 === 100 && 50 >= 60);
console.log(8 !== 8 || 12 > 10);
console.log(7 < 5 || 9 == "9");
console.log(5 == "5" && 10 > 5);
console.log(5 === "5" || 20 < 10);
console.log(10 != 20 && 15 >= 15);


<!-- 2. condition if,else if, else if ladder --------------------->


1. let age = 22;

// 0-12  -> Child
// 13-19 -> Teenager
// 20-59 -> Adult
// 60+   -> Senior Citizen

2. let salary = 45000;

// 50000+ -> Bonus 10000
// 30000+ -> Bonus 5000
// 20000+ -> Bonus 2000
// Otherwise -> No Bonus

3. let temp = 35;

// 40+ -> Very Hot
// 30+ -> Hot
// 20+ -> Warm
// Otherwise -> Cold

4. let color = "yellow";

// red    -> Stop
// yellow -> Ready
// green  -> Go
// Otherwise -> Invalid Color

5. let amount = 3500;

// 5000+ -> 30% Discount
// 3000+ -> 20% Discount
// 1000+ -> 10% Discount
// Otherwise -> No Discount

6. let attempts = 4;

// 1 -> First Attempt
// 2 -> Second Attempt
// 3 -> Third Attempt
// More than 3 -> Account Locked

7. let age = 10;

// Below 5  -> Free
// Below 18 -> ₹100
// Below 60 -> ₹200
// Otherwise -> ₹150


<!-- 3. switch ---------------------------------------------->


1. Write a `switch` statement to display the **day of the week** based on a number (1–7).

2. Write a `switch` statement to display the **month name** based on a number (1–12).

3. Write a `switch` statement to perform **addition, subtraction, multiplication, or division** based on the operator (`+`, `-`, `*`, `/`).

4. Write a `switch` statement to display the **grade message** (`A`, `B`, `C`, `D`, `F`).

5. Write a `switch` statement to display the **traffic signal action** (`Red`, `Yellow`, `Green`).

6. Write a `switch` statement to display the **fruit price** for `Apple`, `Banana`, `Orange`, and `Mango`.

7. Write a `switch` statement to display the **season** based on the month (`Summer`, `Rainy`, `Winter`).

8. Write a `switch` statement to display the **browser name** (`Chrome`, `Firefox`, `Edge`, `Safari`).

9. Write a `switch` statement to display the **department name** based on a department code (`HR`, `IT`, `Sales`, `Finance`).

10. Write a `switch` statement to display the **menu option**:

* 1 → View Profile
* 2 → Edit Profile
* 3 → Settings
* 4 → Logout
* Any other value → Invalid Option


<!-- Array loop  ---------------------------------------------- -->

// 1.
let arr = [10, 20, 30, 40, 50];
// Print all elements using a loop.

// 2.
let arr = [12, 45, 7, 89, 23];
// Find the sum of all elements.

// 3.
let arr = [15, 25, 35, 45, 55];
// Find the average of the array.

// 4.
let arr = [12, 45, 7, 89, 23];
// Find the largest number.

// 5.
let arr = [12, 45, 7, 89, 23];
// Find the smallest number.

// 6.
let arr = [2, 5, 8, 9, 10, 13];
// Count the even numbers.

// 7.
let arr = [2, 5, 8, 9, 10, 13];
// Count the odd numbers.

// 8.
let arr = [10, -5, 20, -15, 30];
// Print only positive numbers.

// 9.
let arr = [10, -5, 20, -15, 30];
// Print only negative numbers.

// 10.
let arr = [5, 8, 5, 2, 8, 1, 5];
// Count how many times 5 appears.

// 11.
let arr = [10, 20, 30, 40, 50];
// Check whether 30 exists in the array.

// 12.
let arr = [12, 45, 7, 89, 23];
// Find the index of 89 without using indexOf().

// 13.
let arr = [5, 8, 5, 2, 8, 1, 5];
// Print the array without duplicate values.

// 14.
let arr = [2, 4, 6, 8];
// Create a new array containing the square of each element.

// 15.
let arr = [12, 45, 7, 89, 23];
// Find the second largest number.

// 16.
let arr = [2, 5, 8, 9, 10, 13];
// Store even numbers in one array and odd numbers in another.

// 17.
let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// Merge both arrays without using concat().

// 18.
let arr = [10, 20, 30, 40, 50];
// Reverse the array using a loop (without reverse()).

// 19.
let arr = [10, 20, 30, 40, 50];
// Rotate the array one position to the left.

// 20.
let arr = [10, 20, 30, 40, 50];
// Rotate the array one position to the right.

<!-- ARRAY-PUSH POP------------------------------------- -->

// 1. Create an empty array. Using a loop, add the numbers 1 to 10 into the array using push(). Print the array.

// 2. Given:
let arr1 = [10, 20, 30, 40, 50];
// Remove the last two elements using pop() and print the array.

// 3. Given:
let arr2 = [5, 10, 15, 20, 25];
// Using a loop, create a new array containing double the values using push().

// 4. Given:
let arr3 = [12, 7, 18, 5, 22, 9];
// Using a loop, push only the numbers greater than 10 into a new array.

// 5. Given:
let arr4 = [2, 4, 6, 8, 10];
// Using a loop, calculate the sum of all elements.

// 6. Given:
let arr5 = [1, 2, 3, 4, 5];
// Using a loop, create a new array containing the squares of each number using push().

// 7. Given:
let arr6 = [3, 8, 1, 9, 4];
// Using a loop, find the largest number in the array.

// 8. Given:
let arr7 = [11, 22, 33, 44, 55];
// Using a loop, push only the even numbers into a new array.

// 9. Create an empty array.
// Using a loop, push all odd numbers from 1 to 20 into the array. Print the array.

// 10. Given:
let arr8 = [100, 200, 300, 400, 500];
// Using a loop, remove all elements one by one using pop() until the array becomes empty.
// Print each removed element.

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

  <!-- reduce -->

  // 1. Find the sum of all numbers
const arr1 = [10, 20, 30, 40, 50];

// 2. Find the product (multiplication) of all numbers
const arr2 = [2, 3, 4, 5];

// 3. Find the largest number
const arr3 = [12, 45, 8, 90, 32];

// 4. Find the smallest number
const arr4 = [15, 7, 22, 3, 18];

// 5. Count the total number of elements
const arr5 = [5, 8, 2, 6, 9, 1];

// 6. Count how many even numbers are present
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8];

// 7. Find the sum of only even numbers
const arr7 = [10, 15, 20, 25, 30, 35];

// 8. Find the sum of only odd numbers
const arr8 = [11, 14, 17, 20, 23, 26];

// 9. Count how many numbers are greater than 50
const arr9 = [25, 60, 45, 80, 55, 10, 90];

// 10. Create a frequency object
const arr10 = ["apple", "banana", "apple", "orange", "banana", "apple"];
