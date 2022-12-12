   let arr = [1,2,3,4,8,5,6,7,7,]

// Find Odd Number in array:
let oddVal = [];
for (let i = 0; i < arr.length; i++) {
   if(arr[i]%2 != 0){
    oddVal.push(arr[i])
   }  
}
console.log(`Odd Numbers in an array I/P : ${arr}`);
console.log(`Odd Numbers in an array O/P : ${oddVal}`);

//Sum of all numbers in an array:
let sum = 0
for (let i = 0; i < arr.length; i++) {
      sum = sum+arr[i]; 
 }
 console.log(`Sum of all numbers in an array I/P : ${arr}`);
 console.log(`Sum of all numbers in an array O/P : ${sum}`);

// Return all the prime numbers in an array:
let primeNum = [];
let prime = true;
console.log("Prime numbers in array I/P : "+ arr)
    for (let i = 0; i < arr.length; i++) {
         if (arr[i] ===1) {
            console.log("1 is neither prime nor composite number.")
         } else{
           if (arr[i]%2==0) {
           } else {
            primeNum.push(arr[i]);
           }
        }}
         console.log("Prime numbers in array O/P: "+ primeNum)

// Return all the palindromes in an array:
let arr1 = [121, 123, 41414, 12345, 515, 6767];
let arrP = [];
let palindromeNum = [];
let n = arrP.length;

function palindrome(arr1, n){
    var inputValue, tempValue, result = 0, num;
    for(let l = 0; l<arr1.length; l++ ){
        arrP.splice(l-l,arr1[l-1], )
        arrP.push(arr1[l]);
        n = arrP.length; 
        num =  arr1[l];
        tempValue = num;
        result = 0
        while (num>0) {
            inputValue = num%10;
            num = parseInt(num/10);
            result = result*10+inputValue;
        }
        if (tempValue == result) {
            palindromeNum.push(result);
           // break;  
        } else {    
        }
    }
    console.log("The palindromes in an array I/P : " + arr1);
    console.log("The palindromes in an array O/P : " + palindromeNum);
}
   palindrome(arr1, n);

// Remove duplicates from an array

function removeDuplicates(arr){
return [...new Set(arr)];
} 
console.log("Array with duplicates I/P : "+arr);
console.log("Array without duplicates O/P: "+removeDuplicates(arr));

// Convert all the strings to title caps in a string array
let text = "This is example for title caps in STRING ARRAY";
function titleCaps(stringValue) {
    stringValue = stringValue.toLowerCase().split(' ');
    for (var i = 0; i < stringValue.length; i++) {
        stringValue[i] = stringValue[i].charAt(0).toUpperCase() + stringValue[i].slice(1);
    }
    return stringValue.join(' ');
  }
  console.log("Before Conversion I/P : "+text);
  console.log("After Conversion O/P : "+titleCaps(text));

// Return median of two sorted arrays of the same size.
let ar11 = [1,9,4,5,2,];
let ar12 = [3,10,7,6,8];
function twoMedian (ar1, ar2){
    let totalArray = [];
    let totalMedian = 0;
    let median = 0;
if (ar1.length == ar2.length) {
    totalMedian = 0;
    for (let i = 0; i < ar1.length; i++) {
        totalArray.push(ar1[i])
    }
    for (let i = 0; i < ar2.length; i++) {
        totalArray.push(ar2[i])
    }
    totalArray.sort(function(a,b){return a-b});
    totalMedian =  (totalArray.length)/2;
    var v1 = totalMedian-1;
    var v2 = ((totalMedian));
    median =  (((totalArray[v1]) + ((totalArray[v2])))/2);
    return median;
} else {
    console.log("median of two sorted array with different size");
}}
console.log(`Median of two sorted arrays of the same size. I/P : arr1 = ${ar11} arr2 = ${ar12}`);
console.log("Median of two sorted arrays of the same size. O/P : " + twoMedian(ar11, ar12) );

// Rotate by K times
let arrValue = ["as", "ds", "gd", "cf", "ed"]  //[1, 2, 3, 4, 5];
let arrLength = arrValue.length;
let numOfTimesRotate = 2;
let val = [];
function RightRotate(arr, arrlen, rotateK)
{
    rotateK = rotateK % arrlen;
    for (let i = 0; i < arrlen; i++) {
        if (i < rotateK) {
            var val1 = arr[arrlen + i - rotateK]; 
          val.push(val1);  
        }
        else {
            var val2 = arr[i - rotateK]
            val.push(val2); 
        }
    }
    return val
}
console.log("Rotate by K times: k = 2 & I/P arrValue =  "+ arrValue);
console.log(`O/P: ${RightRotate(arrValue, arrLength, numOfTimesRotate)}`);

//Below programs in arrow functions.
console.log("Below programs in arrow functions.");

//Find Odd Number in array using arror funtions:
let oddNum = arr.filter((val)=>{
return val%2 != 0;
})
  console.log(`Odd Numbers in an array using arrow funtions I/P : ${arr}`);
  console.log(`Odd Numbers in an array using arrow funtions O/P : ${oddNum}`);

//Sum of all numbers in an array using arror funtions:
let sum1 = 0
let oddNum1 = arr.reduce((accuValue , currentValue)=>{
    return accuValue+currentValue;
    })
    console.log(`Sum of all numbers in an array using arrow funtions I/P : ${arr}`);
    console.log(`Sum of all numbers in an array using arrow funtions O/P : ${oddNum1}`);


let text1 = "This is example for title caps in STRING ARRAY";
let titleCaps1 = (()=> {
    text1 = text1.toLowerCase().split(' ');
    for (var i = 0; i < text1.length; i++) {
        text1[i] = text1[i].charAt(0).toUpperCase() + text1[i].slice(1);
    }
    return text1.join(' ');
  })
  console.log("After Conversion using arrow funtions I/P : "+text1);
  console.log("After Conversion using arrow funtions O/P : "+titleCaps1());

  // Return all the prime numbers in an array using arrow function:
let primeNum1 = [];
let prime1 = true;
console.log("Prime numbers in array using arrow function I/P : "+ arr)
let primeNumber1 = ((arr)=>{
    for (let i = 0; i < arr.length; i++) {
         if (arr[i] ===1) {
            console.log("1 is neither prime nor composite number.")
         } else{
           if (arr[i]%2==0) {
           } else {
            primeNum1.push(arr[i]);
           }
        }}
    return primeNum1
    })
         console.log("Prime numbers in array using arrow function O/P: "+ primeNumber1(arr));

// Return all the palindromes in an array using arrow function :
let arrPal = [121, 123, 41414, 12345, 515, 6767];
let arrPPal = [];
let palindromeNumPal = [];
let nPal = arrPal.length;

let Palindromes1 = ((arrPal, nPal)=>{
    var inputValue, tempValue, result = 0, num;
    for(let l = 0; l<arrPal.length; l++ ){
        arrPPal.splice(l-l,arrPal[l-1], )
        arrPPal.push(arrPal[l]);
        nPal = arrPal.length; 
        num =  arrPal[l];
        tempValue = num;
        result = 0
        while (num>0) {
            inputValue = num%10;
            num = parseInt(num/10);
            result = result*10+inputValue;
        }
        if (tempValue == result) {
            palindromeNumPal.push(result);
           // break;  
        } else {    
        }
    }
    console.log("The palindromes in an array using arrow function I/P : " + arrPal);
    console.log("The palindromes in an array using arrow function O/P : " + palindromeNumPal);
})
Palindromes1(arrPal, nPal);



