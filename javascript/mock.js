// JavaScript Mock Test Questions (30)

// 1. Write a JavaScript function to find the largest number in an array.

let Largest = (num)=>{
    let max = -Infinity;
    for(let i=0;i<num.length;i++){
        if(num[i] > max)
        {
            max = num[i];
        }
    }
     return max;
}
console.log(Largest([70,50,100,40,30]));

// / 6. Write a JavaScript function to count the number of elements in an array.

function count(arr){
    count=0;
    for(let elements of arr){
    count++; 
    }
    return count;
}
console.log(count([10,20,30,40]));

// 12. Write a JavaScript function to copy one array into another array.

let num=[2,4,6,8,10]
copy = function(num){
    let result=[]
    for(i=0;i<num.length;i++){
        result[i]=num[i]
    }
    return result
}
console.log(copy(num))
//  11. Write a JavaScript function to reverse an array without using reverse() method.

// function reversearray(arr){
//     let reverse = [0];
//     let result = [0];
//     for(let i=0;i<arr.length;i++){
        
//     }
// }

// 14. Write a JavaScript function to remove duplicate values from an array.
let arr = [1,1,2,3,4,4]
function removeDuplicates(arr){
    let result = []
    for(num of arr){
        if(!result.includes(num)){
            result.push(num);
        }
    }
    return result;
}
console.log(removeDuplicates(arr))

// 9. Write a JavaScript function to find the total number of positive numbers in an array.
let arr2=[2,-5,79,-78,56]
function positive(arr2){
    let count1=0
    for(let i=0;i<arr2.length;i++){
    if(arr2[i]>=0){
        count1++;
    }  
}
console.log(count1)

}
positive(arr2)

// 4. Write a JavaScript function to find the sum of all numbers in an array.
// function sum(arr){
//     result =[]
//     for(let sum of elemnet){
//         sum=+sum
//     }
//     return result;
// }
// console.log(sum[10,20,30])

// 7. Write a JavaScript function to print all even numbers from an array.
// function evennumber(arr){
//     for(let i=0; i=>arguments.length; i++){
//         if(i%2===0);
//     }   
// }
// console.log(evennumber([1,2,3,4,5,6]));

//5.. Write a JavaScript function to find the average of array elements.
function avg(arr){
    let sum=0
    for(i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    let average=sum/arr.length
    return average
}
console.log(avg([10,20,30]))

// 16. Write a JavaScript function to find the product of all numbers in an array.

function productArray(arr){
    let product=1;
    for(i=0;i<arr.length;i++){
        product*=arr[i];
    }
    return product;
}
let arr3 = [1,2,3,4,5,6];
result1 = productArray(arr3);
console.log(result1);

// 13. Write a JavaScript function to find whether a given element exists in an array.

function findTarget(arr13,target){
   for(let k=0;k<arr13.length;k++){
        if(arr13[k]==target){
            console.log(`${target} present in the array`)
        }
   }
}
findTarget([12,5,16,7,8],5)


// 8. Write a JavaScript function to print count of odd numbers from an array.
function odd(arr){
    let count = 0
    for(i=0;i<arr.length;i++){
        if(arr[i]%2 !== 0){
            count++
        }
    }
    return count
}
console.log(odd([1,3,2,6,3]))

// 11. Write a JavaScript function to reverse an array without using reverse() method.

function reversearr(arr){
let result=[];
for(let i=arr.length-1;i>=0;i--){
    result.push(arr[i]);
}
console.log(result)

}

reversearr([1,2,3,4,5])

//Write a JavaScript function to find the sum of all numbers in an array.
function sum1(num){
    sum3 = 0 
for(i=0; i<num.length; i++){
    sum3 = sum3 + num[i]
   

}
 return sum3
}
console.log(sum1([3,5,6,7,8]))

//Write a JavaScript function to print all odd numbers from an array.
// function num(arr){
//     let odd =0
//     for(i=1;i<arr.length;i++){
//         if(arr%2==0){

//         }
//     }
// }
// let value=[1,2,3,4,5,6,7]
// console,log(num(value))

//Write a JavaScript function to print count all odd numbers from an array

// function num(arr){
//     let num =0
//     for(leti=
//     )
// }
// 16. Write a JavaScript function to find the average of all numbers in an array.
function average(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
    }
    let avg = sum/arr.length
    return avg;
}
console.log(average([1,2]))
// Write a JavaScript function to find the total number of positive numbers in an array.

// 2. Write a JavaScript function to find the smallest number in an array.

// let arr1 = [10,2,3,4,5,1]
// let smallest = arr1[0]
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]<smallest){
//         smallest = arr1[i]
//     }
//     console.log(smallest)

// }

// 27. Write a JavaScript function to count how many times a number appears in an array.
function numtimes(arr,n){
    let count = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]==n){
            count++
        }
    }
    return count
}
let brr = [8,8,9,4]
console.log(numtimes(brr,8))








// 2. Write a JavaScript function to find the smallest number in an array.

// 3. Write a JavaScript function to find the second largest number in an array.

// 4. Write a JavaScript function to find the sum of all numbers in an array.

// 5. Write a JavaScript function to find the average of array elements.

// 6. Write a JavaScript function to count the number of elements in an array.

// 7. Write a JavaScript function to print all even numbers from an array.

// 8. Write a JavaScript function to print all odd numbers from an array.

// 9. Write a JavaScript function to find the total number of positive numbers in an array.

// 10. Write a JavaScript function to find the total number of negative numbers in an array.

// 11. Write a JavaScript function to reverse an array without using reverse() method.

// 12. Write a JavaScript function to copy one array into another array.

// 13. Write a JavaScript function to find whether a given element exists in an array.

// 14. Write a JavaScript function to remove duplicate values from an array.

// 15. Write a JavaScript function to print array elements using for loop.

// 16. Write a JavaScript function to find the product of all numbers in an array.

// 17. Write a JavaScript function to find the first element of an array.

// 18. Write a JavaScript function to find the last element of an array.

// 19. Write a JavaScript function to add a new element into an array.

// 20. Write a JavaScript function to remove an element from an array.

// 21. Write a JavaScript function using map() to double each number in an array.

// 22. Write a JavaScript function using map() to convert an array of names into uppercase.

// 23. Write a JavaScript function using filter() to get numbers greater than 10.

// 24. Write a JavaScript function using filter() to get only even numbers from an array.

// 25. Write a JavaScript function using reduce() to find the sum of array values.

// 26. Write a JavaScript function using reduce() to find the largest number in an array.

// 27. Write a JavaScript function to count how many times a number appears in an array.

// 28. Write a JavaScript function to find the common elements between two simple arrays.

// 29. Write a JavaScript function to combine two arrays.

// 30. Write a JavaScript function to sort an array in ascending order.