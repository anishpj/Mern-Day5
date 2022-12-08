//   let arr = [1,2,3,4,8,5,6,7,7,]

// // Find Odd Number in array:
// let oddVal = [];
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i]%2 != 0){
//     oddVal.push(arr[i])
//    }  
// }
// console.log(`Odd Numbers in an array: ${oddVal}`);

// //Sum of all numbers in an array:
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//       sum = sum+arr[i]; 
//  }
//  console.log(`Sum of all numbers in an array : ${sum}`);

// // Return all the prime numbers in an array:
// let primeNum = [];
// let prime = true;
//     for (let i = 0; i < arr.length; i++) {
//          if (arr[i] ===1) {
//             console.log("1 is neither prime nor composite number.")
//          } else{
//            if (arr[i]%2==0) {
//            } else {
//             primeNum.push(arr[i]);
//            }
//         }}
//          console.log("Prime numbers in array : "+ primeNum)

// // Return all the palindromes in an array:
// let arr1 = [121, 123, 41414, 12345, 515, 6767];
// let arrP = [];
// let palindromeNum = [];
// let n = arrP.length;

// function palindrome(arr1, n){
//     var inputValue, tempValue, result = 0, num;
//     for(let l = 0; l<arr1.length; l++ ){
//         arrP.splice(l-l,arr1[l-1], )
//         arrP.push(arr1[l]);
//         n = arrP.length; 
//         num =  arr1[l];
//         tempValue = num;
//         result = 0
//         while (num>0) {
//             inputValue = num%10;
//             num = parseInt(num/10);
//             result = result*10+inputValue;
//         }
//         if (tempValue == result) {
//             palindromeNum.push(result);
//            // break;  
//         } else {    
//         }
//     }
//     console.log("The palindromes in an array " + palindromeNum);
// }
//    palindrome(arr1, n);

// // Remove duplicates from an array

// function removeDuplicates(arr){
// return [...new Set(arr)];
// } 
// console.log("Array without duplicates: "+removeDuplicates(arr));

// // Convert all the strings to title caps in a string array
// let text = "This is example for title caps in STRING ARRAY";
// function titleCaps(stringValue) {
//     stringValue = stringValue.toLowerCase().split(' ');
//     for (var i = 0; i < stringValue.length; i++) {
//         stringValue[i] = stringValue[i].charAt(0).toUpperCase() + stringValue[i].slice(1);
//     }
//     return stringValue.join(' ');
//   }
//   console.log("After Conversion: "+titleCaps(text));

// // Return median of two sorted arrays of the same size.
// let ar11 = [1,9,4,5,2,];
// let ar12 = [3,10,7,6,8];
// function twoMedian (ar1, ar2){
//     let totalArray = [];
//     let totalMedian = 0;
//     let median = 0;
// if (ar1.length == ar2.length) {
//     totalMedian = 0;
//     for (let i = 0; i < ar1.length; i++) {
//         totalArray.push(ar1[i])
//     }
//     for (let i = 0; i < ar2.length; i++) {
//         totalArray.push(ar2[i])
//     }
//     totalArray.sort(function(a,b){return a-b});
//     totalMedian =  (totalArray.length)/2;
//     var v1 = totalMedian-1;
//     var v2 = ((totalMedian));
//     median =  (((totalArray[v1]) + ((totalArray[v2])))/2);
//     return median;
// } else {
//     console.log("median of two sorted array with different size");
// }}
// console.log("Median of two sorted arrays of the same size.: " + twoMedian(ar11, ar12) );

// Rotate by K times
function RightRotate(a, n, k)
{
  
    // If rotation is greater
    // than size of array
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
        }
    }
}
let Array = ["as", "ds", "gd", "cf", "ed"]  //[1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
  
RightRotate(Array, N, K);