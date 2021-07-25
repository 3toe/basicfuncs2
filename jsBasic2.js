// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big". 
// Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
// 
function makeItBig(arr){
   for(e in arr){
      if(arr[e] > 0){
         arr[e] = "big";
      }
   }
   return arr;
}
// test
// console.log(makeItBig([-1, 2, 3, -2]))


// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the 
// lowest value in the array, and return the highest value in the array.
// 
function highLow(arr){
   var max = arr[0];
   var min = arr[0];
   for(e in arr){
      if(arr[e] > max){
         max = arr[e];
      }
      if(arr[e] < min){
         min = arr[e];
      }
   }
   console.log(min);
   return max;
}
// test
// console.log(highLow([1, 2, 4, 8, 4, 5, -3]))


// Print One, Return Another - Build a function that takes in an array of numbers.  The function should 
// print the second-to-last value in the array, and return the first odd value in the array.
// 
function doStuff(arr){
   console.log(arr[arr.length-2]);
   var firstOdd = "No odd numbers"
      for(e in arr){
         if(Math.abs(arr[e] % 2) == 1){
            firstOdd = arr[e];
            return firstOdd;
         }
      }
}
// test
// console.log(doStuff([0, 2, 7, -2, 4, 8, 4, -1, 5, -3]));


// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns
// a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should
// return [2,4,6] without changing the original array.
// 
function doubler(arr){
   var darr = [];
   for(e in arr){
      darr[e] = arr[e] * 2;
   }
   return darr;
}
// test
// console.log(doubler([0, 2, 7, -2, 4, 8, 4, -1, 5, -3]));


// Count Positives - Given an array of numbers, create a function to replace the last value with the number 
// of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to 
// [-1,1,1,3] and returns it.
// 
function countPos(arr){
   var count = 0;
   for(e in arr){
      if(arr[e] > 0){
         count++;
      }
   }
   arr[arr.length-1] = count;
   return arr;
}
// test
// console.log(countPos([0, 2, 7, -2, 4, 8, 4, -1, 5, -3]));


// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in
// a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
// 
function EaO(arr){
   var oCount = 0;
   var eCount = 0;
   for(var i=0; i<arr.length; i++){
      if(Math.abs(arr[i]%2) == 1){
         oCount++;
         eCount = 0;
      } else if(Math.abs(arr[i]%2) == 0){
         oCount = 0;
         eCount++;
      } else {
         oCount = eCount = 0;
      }

      if(oCount > 2){
         console.log("That's odd!");
      }
      if(eCount > 2){
         console.log("Even more so!");
      }
   }
   // return undefined
}
// test
// console.log(EaO([0, 2, 7, -2, 4, 8, 4, -1, 5, -3]));


// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, 
// specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  
// Afterward, console.log each array value and return arr.
// 
function IncEvOther(arr){
   for(var i=1; i<arr.length; i+=2){
      arr[i]++; 
   }
   console.log(arr);
   return arr;
}
// test
// console.log(IncEvOther([0, 2, 7, -2, 4, 8, 4, -1, 5, -3]));


// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array')
// containing strings.  Working within that same array, replace each string with a number - the length of
// the string at the previous array index - and return the array.  For example, previousLengths(["hello",
// "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
// 
function previousLengths(arr){
   for(i=arr.length-1; i>0; i--){
      arr[i] = arr[i-1].length;
   }
   return arr;
}
// test
// console.log(previousLengths(["hello", "dojo", "awesome"]));


// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, 
// but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
// 
function addSeven(arr){
   var newArr = []
   for(e in arr){
      newArr[e] = arr[e] + 7;
   }
   return newArr
}
// test
// console.log(addSeven([0, 2, 7, -2, 4, 8, 4, -1, 5, -3]));


// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) 
// returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty
// temporary array.  (Hint: you'll need to swap values).
// 
function reverser(arr){
   var x = 0;
   for(var e=0; e<arr.length/2; e++){
      x = arr[e];
      arr[e] = arr[arr.length-1-e];
      arr[arr.length-1-e] = x;
   }
   return arr;
}
// test
// console.log(reverser([0, 2, 7, -2, 10, 0, 4, -1, 5, -3]));


// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, 
// but make them all negative (negative values should remain negative). Given [1,-3,5], return [-1,-3,-5].
// 
function negit(arr){
   newArr = [];
   for(e in arr){
      if(arr[e] <= 0){
         newArr[e] = arr[e];
      } else{
         newArr[e] = arr[e]*-1;
      }
   }
   return newArr;
}
// test
// console.log(negit([0, 2, 7, -2, 10, 0, 4, -1, 5, -3]));


// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal
// to "food".  If no array values are "food", then print "I'm hungry" once.
// 
function hungry(arr){
   var food = false;
   for(e in arr){
      if(arr[e] == "food"){
         console.log("yummy");
         food = true;
      }
   }
   if(food == false){
      console.log("I'm hungry");
   }
   // return undefined;
}
// test
// console.log(hungry([0, 2, 7, -2, 10, 0, 4, -1, 5, -3]));
// console.log(hungry([0, 2, 7, -2, 10, "food", 4, -1, 5, -3]));


// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
// Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  
// swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
// 
function stc(arr){
   var x = 0;
   for(var e=0; e<arr.length/2; e+=2){
      x = arr[e];
      arr[e] = arr[arr.length-1-e];
      arr[arr.length-1-e] = x;
   }
}
// test (only functional if a return statement is added)
// console.log(stc([0, 2, 7, -2, 10, "food", -1, 5, -3]));


// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, 
// and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
// 
function sta(arr, num){
   for(e in arr){
      arr[e] = arr[e]*num;
   }
   return arr;
}
// test
// console.log(sta([0, 2, 7, -2, 10, -1, 5, -3], 3));