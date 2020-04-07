---
path: "/post-one"
cover: "./blocks.jpg"
date: "2018-10-15"
title: "Learn"
published: true
category: ['Destination']
tags: ['website', 'react', 'other']
---
##Reverse a string 

```javascript
function reverse(str){
  if(!str || typeof str != 'string' || str.length < 2 ) return str;
  
  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  return backwards.join('');
}

function reverse2(str){
  //check for valid input
  return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

reverse('Timbits Hi')
reverse('Timbits Hi')
reverse3('Timbits Hi')
```
##Greather than 10

```javascript
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
```

##Objects
##Implementing an object(hash table)
```javascript
class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }
  
  keys(){
    const keysArray = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.keys()
```
##Largest number in Array
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

```javascript
function largestOfFour(arr) {
  var newArr = []
  for(let i=0;i<arr.length; i++){
    newArr.push(Math.max(...arr[i]))
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

```

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

##Confirm the ending 
```javascript
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

----------------

function confirmEnding(string, target) {
  // Step 1. Use the substr method
  if (string.substr(-target.length) === target) {
  
  // What does "if (string.substr(-target.length) === target)" represents?
  // The string is 'Bastian' and the target is 'n' 
  // target.length = 1 so -target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')
  
  // Step 2. Return a boolean (true or false)
    return true;
  } else {
    return false;
  }
}

confirmEnding('Bastian', 'n');


function confirmEnding(string, target) {
  return (string.substr(-target.length) === target) ? true : false;
}
confirmEnding('Bastian', 'n');

function confirmEnding(string, target) {
  return string.substr(-target.length) === target;
}
confirmEnding('Bastian', 'n');
----------------
confirmEnding("He has to give me a new name", "name");

function confirmEnding(str, target) {
  let arr = str.split(' ');
  if (str.split(' ').length === 1) {
    let arr1 = str.split('');
    for (let i = 0; i < arr1.length; i++) {
      if (i === arr1.length - 1) {
        if (arr1[i] === 'n') {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    for (let x = 0; x < arr.length; x++) {
      console.log(arr.length);
      console.log(arr[x]);
      if (x === arr.length - 1) {
        if (arr[x].indexOf(target) !== -1) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

console.log(confirmEnding('Open sesame', 'zame'));

```
##Count Online
We've defined a function *countOnline* which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose *online* property is set to *true*. An example of a users object which could be passed to *countOnline* is shown below. Each user will have an *online* property with either a *true* or *false* value.

Using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than 10, and returned a new array containing those items.

```javascript 

The function countOnline should use a `for in` statement to iterate through the object keys of the object passed to it.
Passed
The function countOnline should return 1 when the object { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } is passed to it
Passed
The function countOnline should return 2 when the object { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } } is passed to it
Passed
The function countOnline should return 0 when the object { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } } is passed to it

function countOnline(obj) {
    // change code below this line
    var counter = 0;
    for (var user in obj) {
        if (obj[user]["online"] === true) {
            counter++
        }
        // change code above this line
    } return counter;
}

let usersObj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
countOnline(usersObj)
```

##Factorialize a Number 

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!
```javascript
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

What is factorializing a number all about?
When you factorialize a number, you are multiplying that number by each consecutive number minus one.

If your number is 5, you would have:

5! = 5 * 4 * 3 * 2 * 1
The pattern would be:

0! = 1
1! = 1
2! = 2 * 1
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
5! = 5 * 4 * 3 * 2 * 1
1. Factorialize a Number With Recursion
function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    
  // If the number is 0, its factorial is 1.
  else if (num == 0) 
      return 1;
    
  // Otherwise, call the recursive procedure again
    else {
        return (num * factorialize(num - 1));
        /* 
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls
        
        Each call: num === "?"        	         num * factorialize(num - 1)
        1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
        
        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value
        
        5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120
        
        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
    }
}
factorialize(5);
Without comments:
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);
2. Factorialize a Number with a WHILE loop
function factorialize(num) {
  // Step 1. Create a variable result to store num
  var result = num;
   
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) 
    return 1; 
 
  // Step 2. Create the WHILE loop 
  while (num > 1) { 
    num--; // decrementation by 1 at each iteration
    result = result * num; // or result *= num; 
    /* 
                    num           num--      var result      result *= num         
    1st iteration:   5             4            5             20 = 5 * 4      
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop 
    */
  }
     
  // Step 3. Return the factorial of the provided integer
  return result; // 120
}
factorialize(5);
Without comments:
function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
factorialize(5);
3. Factorialize a Number with a FOR loop
function factorialize(num) {
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1)
    return 1;
  
  // We start the FOR loop with i = 4
  // We decrement i after each iteration 
  for (var i = num - 1; i >= 1; i--) {
    // We store the value of num at each iteration
    num = num * i; // or num *= i;
    /* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
  }
  return num; //120
}
factorialize(5);
Without comments:
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5);
```
##Find recuring charachter 

```javascript
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
  }
  return undefined
}

firstRecurringCharacter2([1,5,5,1,3,4,6])


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
```



##Two sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.


```javascript

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

##Solution
```javascript
const nums = [2,3,4];
const target = 7

const twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};
// comp is going to be a key/value store where
// key === number in input array
// value === an index. Specifically,the index of the 
// complementing number needed to add to get the target.
// So 3 + 4 === 7, the key 4 would have the index 1 
// assigned to it in the array [2,3,4]
// now we iterate over nums. We hit the first condition:
if(comp[nums[i] ]>=0)

// at this point nums[i] === 2
// comp looks like this:
{
  '2': undefined
}

// so we go past the first conidtion on the first run 
// always, b/c we won't have an index assigned, that comes later.
// Now we hit:
comp[target-nums[i]] = i
// inside the brackets, we have comp[7 - 2] = 0
// or comp[5] = 0
// now comp looks like this:
// (by the way you wouldn't have keys assigned the value 
// undefined, they just would not exist in the object. I'm 
// doing this for clarity sake)
{
  '2': undefined,
  '5': 0
}
// next run: we have 3 and comp looks like:
{
  '2': undefined,
  '3': undefined,
  '5': 0
}
// then the last line comp[7-3] = 1 
// Or comp[4] = 1
{
  '2': undefined,
  '3': undefined,
  '4': 1
  '5': 0
}
// On our last run we look up comp[4] and we have a match
//greater than 0 so we enter the condition
// then we return the value of comp[4] 
//(the index of the complementing number to add to get to target, 3) 
//and the current index in an array: [1,2]
```

##Merge sorted arrays 
mergeSortedArrays([0,3,4,31], [3,4,6,30]);
//0,3,4,4,6,30,31

```javascript
function mergeSortedArrays(array1, array2){
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  
  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if(array1.length === 0) {
    return array2;
  }
  if(array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item){
   if(array2Item === undefined || array1Item < array2Item){
     mergedArray.push(array1Item);
     array1Item = array1[i];
     i++;
   }   
   else {
     mergedArray.push(array2Item);
     array2Item = array2[j];
     j++;
   }
  }
  return mergedArray;
}

mergeSortedArrays([0,3,4,31], [3,4,6,30]);
//0,3,4,4,6,30,31
```
##Longest Substring Without Repeating Characters

```javascript
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```
##Solution

```javascript
var lengthOfLongestSubstring = function(s) {
    let max_len = 0;
    let curr = 0;
    let hash = {}; 
    if(s.length < 2) {
        return s.length;
    }
    for(let i = 0; i < s.length;  i++) {
        if(hash[s[i]] == null) {
            curr += 1;
        } else {
            curr = Math.min(i - hash[s[i]], curr + 1);
        }
        max_len = Math.max(max_len, curr);
        hash[s[i]] = i; //save the index
    }
    return max_len;
};

```
The idea behind this code is to use hash maps to keep track of seen substrings.
Obviously if any string is less than two, the longest substring is equal to the length of that substring.
However, if not, then we would have to consider another approach.

Consider a string:
_ _ _ _ _ a _ _ _ _ _ f _ _ _ f _ _ _ a

Where _ means a distinct character from all the others.

As we transverse the string, we put a character into the hash table if it's not already in there where the key is the character and the value is the index. --> hash = {char: index}

If there character is already in the string, we have to update the index after we do the following procedures:

We have a curr that keeps track of the length of the substring that has not seen an already seen character. As we get to the second f, curr = 16. So, so far the max_len is going to be max(max_len = 0, curr = 16) [Since max_len has yet to be updated].

Now, we start our curr from the character after the first f. curr now becomes the distance between the first f and the second f, which is i - hash[s[i]]. We update the hash and continue.

The max_len is determined by the max of the current max_len and the curr value when it encounters a character already seen.

Finally, we have completely transversed the string and arrived at the max length of the substring that does not have any repeating characters.

Runtime: O(n)
Space Complexity: O(n)


 maximal subarray
importance: 2
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.
```javascript
For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0
Please try to think of a fast solution: O(n2) or even O(n) if you can.
```
##Solution
Let’s walk the array and keep the current partial sum of elements in the variable s. If s becomes negative at some point, then assign s=0. The maximum of all such s will be the answer.

If the description is too vague, please see the code, it’s short enough:
```javascript
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
The algorithm requires exactly 1 array pass, so the time complexity is O(n).
```
You can find more detail information about the algorithm here: [Maximum subarray problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem). If it’s still not obvious why that works, then please trace the algorithm on the examples above, see how it works, that’s better than any words.

##Move zeros
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
```javascript
Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

    This question comes under a broad category of "Array Transformation". This category is the meat of tech interviews. Mostly because arrays are such a simple and easy to use data structure. Traversal or representation doesn't require any boilerplate code and most of your code will look like the Pseudocode itself.
    
    The 2 requirements of the question are:
    
    Move all the 0's to the end of array.
    
    All the non-zero elements must retain their original order.
    
    It's good to realize here that both the requirements are mutually exclusive, i.e., you can solve the individual sub-problems and then combine them for the final solution.

```javascript



var moveZeroes = function(nums) {
    var arr = [];
    for(let i = 0; i < nums.length; ++i) {
        if(nums[i] == 0) {
            arr.push(...nums.splice(i, 1));
            i--;
        }
    }     
    nums.push(...arr);
};
```

##Contains duplicate

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
```javascript
Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```

```javascript
var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return (set.size < nums.length);
};
```

```javascript
var containsDuplicate = function(nums) {
    var newArr = new Set(nums)
    if (newArr.size < nums.length){
        return true   
    } else{
        return false
    }
```

##Rotate Array

```javascript
Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?

##Solution

```javascript
var rotate = function(nums, k) {
    return nums.unshift(...nums.splice(-(k%nums.length)))
};

function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}
```


##Largest world


```javascript

function largestOfFour(arr) {
   // Step 1. Create an array that will host the result of the 4 sub-arrays
   var largestNumber = [0,0,0,0];
 
   // Step 2. Create the first FOR loop that will iterate through the arrays
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
   /* The starting point, index 0, corresponds to the first array */
 
    // Step 3. Create the second FOR loop that will iterate through the sub-arrays
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
    /* The starting point, index 0, corresponds to the first sub-array */
       
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
          
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
          
       /* FOR loop cycles
          arrayIndex => i
          subArrayIndex => j
          
       Iteration in the first array
          For each iteration: arr[i][j]           largestNumber[i]          if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
          First iteration:    arr[0][0] => 4      largestNumber[0] => 0     4 > 0? => TRUE                       then largestNumber[0] = 4
          Second iteration:   arr[0][1] => 5      largestNumber[0] => 4     5 > 4? => TRUE                       then largestNumber[0] = 5
          Third iteration:    arr[0][2] => 1      largestNumber[0] => 5     1 > 5? => FALSE                      then largestNumber[0] = 5
          Fourth iteration:   arr[0][3] => 3      largestNumber[0] => 5     3 > 5? => FALSE                      then largestNumber[0] = 5
          Fifth iteration:    arr[0][4] => FALSE  largestNumber[0] => 5                                          largestNumber = [5,0,0,0]
       Exit the first array and continue on the second one
       Iteration in the second array
          For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
          First iteration:    arr[1][0] => 13      largestNumber[1] => 0      13 > 0? => TRUE                      then largestNumber[1] = 13
          Second iteration:   arr[1][1] => 27      largestNumber[1] => 13     27 > 13? => TRUE                     then largestNumber[1] = 27
          Third iteration:    arr[1][2] => 18      largestNumber[1] => 27     18 > 27? => FALSE                    then largestNumber[1] = 27
          Fourth iteration:   arr[1][3] => 26      largestNumber[1] => 27     26 > 27? => FALSE                    then largestNumber[1] = 27
          Fifth iteration:    arr[1][4] => FALSE   largestNumber[1] => 27                                          largestNumber = [5,27,0,0]
       Exit the first array and continue on the third one
       Iteration in the third array
          For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
          First iteration:    arr[2][0] => 32      largestNumber[2] => 0      32 > 0? => TRUE                      then largestNumber[2] = 32
          Second iteration:   arr[2][1] => 35      largestNumber[2] => 32     35 > 32? => TRUE                     then largestNumber[2] = 35
          Third iteration:    arr[2][2] => 37      largestNumber[2] => 35     37 > 35? => TRUE                     then largestNumber[2] = 37
          Fourth iteration:   arr[2][3] => 39      largestNumber[2] => 37     39 > 37? => TRUE                     then largestNumber[2] = 39
          Fifth iteration:    arr[2][4] => FALSE   largestNumber[2] => 39                                          largestNumber = [5,27,39,0]
       Exit the first array and continue on the fourth one
       Iteration in the fourth array
          For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
          First iteration:    arr[3][0] => 1000    largestNumber[3] => 0      1000 > 0? => TRUE                    then largestNumber[3] = 1000
          Second iteration:   arr[3][1] => 1001    largestNumber[3] => 1000   1001 > 1000? => TRUE                 then largestNumber[3] = 1001
          Third iteration:    arr[3][2] => 857     largestNumber[3] => 1001   857 > 1001? => FALSE                 then largestNumber[3] = 1001
          Fourth iteration:   arr[3][3] => 1       largestNumber[3] => 1001   1 > 1001? => FALSE                   then largestNumber[3] = 1001
          Fifth iteration:    arr[3][4] => FALSE   largestNumber[3] => 1001                                        largestNumber = [5,27,39,1001]
       Exit the FOR loop */
        }
    }
 }
 // Step 4. Return the largest numbers of each sub-arrays
 return largestNumber; // largestNumber = [5,27,39,1001];
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

```javascript
function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function (subArray){ // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

    // Step 2. Grab the largest numbers for each sub-arrays with reduce() method
    return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {

      return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;

      /* Map process and Reduce method cycles
      currentLargestNumber => cLN
      previousLargestNumber => pLN
      Iteration in the first array
          For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
          First iteration:         4           0        4 > 0? => TRUE              4             /
          Second iteration:        5           4        5 > 4? => TRUE              5             /
          Third iteration:         1           5        1 > 5? => FALSE             /             5
          Fourth iteration:        3           5        3 > 5? => FALSE             /             5
          Fifth iteration:         /           5                                               returns 5
       Exit the first array and continue on the second one
      Iteration in the second array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        13           0        13 > 0? => TRUE            13              /
        Second iteration:       27          13        27 > 13? => TRUE           27              /
        Third iteration:        18          27        18 > 27? => FALSE           /             27
        Fourth iteration:       26          27        26 > 27? => FALSE           /             27
        Fifth iteration:         /          27                                                returns 27
      Exit the first array and continue on the third one
      Iteration in the third array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        32           0        32 > 0? => TRUE            32              /
        Second iteration:       35          32        35 > 32? => TRUE           35              /
        Third iteration:        37          35        37 > 35? => TRUE           37              /
        Fourth iteration:       39          37        39 > 37? => TRUE           39              /
        Fifth iteration:         /          39                                                returns 39
      Exit the first array and continue on the fourth one
      Iteration in the fourth array
        For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
        First iteration:        1000         0        1000 > 0? => TRUE         1000             /
        Second iteration:       1001       1000       1001 > 1000? => TRUE      1001             /
        Third iteration:        857        1001       857 > 1001 => FALSE        /             1001
        Fourth iteration:        1         1001       1 > 1001? => FALSE         /             1001
        Fifth iteration:         /         1001                                              returns 1001
      Exit the first array and continue on the fourth one */
    }, 0); // 0 serves as the context for the first pLN in each sub array
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

```javascript

function largestOfFour(mainArray) {
  // Step 1. Map over the main arrays
  return mainArray.map(function(subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]
    
    // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
    return Math.max.apply(null, subArray);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```