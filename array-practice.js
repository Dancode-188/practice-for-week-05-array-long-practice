const findMinimum = arr => {
  let min = arr[0];  // O(1) - array access

  // O(n) - loop through the array
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) { // O(1) - array access & comparison
      min = arr[i];
    }
  }
  return min;

};

// Time complexity: O(n) - we iterate through the array once
// Space complexity: O(1) - we only use a single variable to store the minimum

const runningSum = arr => {
  let sum = 0;  // O(1) - single variable

  // O(n) - loop through the array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // O(1) - array access & addition
    arr[i] = sum;  // O(1) - array access
  }
  return arr;
};

// Time complexity: O(n) - we iterate through the array once
// Space complexity: O(1) - we only use a single variable to store the sum

const evenNumOfChars = arr => {
  let count = 0;  // O(1) - single variable

  // O(n) - loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) { // O(1) - array access & length calculation
      count++;  // O(1) - addition
    }
  }
  return count;
};

// Time complexity: O(n) - we iterate through the array once
// Space complexity: O(1) - we only use a single variable to store the count

const smallerThanCurr = arr => {
  const result = [];  // O(1) - single variable

  // O(n^2) - nested loop
  for (let i = 0; i < arr.length; i++) {
    let count = 0;  // O(1) - single variable

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {  // O(1) - array access & comparison
        count++;  // O(1) - addition
      }
    }
    result.push(count);  // O(1) - array access
  }
  return result;
};

// Time complexity: O(n^2) - we iterate through the array twice
// Space complexity: O(n) - we store the result in an array

const twoSum = (arr, target) => {
  // O(n^2) - nested loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {  // O(1) - array access & addition
        return true;
      }
    }
  }
  return false;
};

// Time complexity: O(n^2) - we iterate through the array twice
// Space complexity: O(1) - we only use a single variable to store the result

const secondLargest = arr => {

  if (arr.length < 2) {
    // O(1) - array access
    return undefined;
  }

  let max = -Infinity;  // O(1) - array access
  let secondMax = -Infinity;  // O(1) - single variable

  // O(n) - loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {  // O(1) - array access & comparison
      secondMax = max;  // O(1) - array access & assignment
      max = arr[i];  // O(1) - array access & assignment
    } else if (arr[i] > secondMax) {  // O(1) - array access & comparison
      secondMax = arr[i];  // O(1) - array access
    }
  }
  return secondMax === -Infinity ? undefined : secondMax;
};

// Time complexity: O(n) - we iterate through the array once
// Space complexity: O(1) - we only use two variables to store the maximum and second maximum

const shuffle = (arr) => {
  const result = arr.slice();  // Create a copy of the array

  // Fisher-Yates shuffle algorithm
  for (let i = result.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));  // Generate a random index
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];  // Swap elements
  }
  return result;
};

// Time complexity: O(n) - we iterate through the array once
// Space complexity: O(n) - we store the result in an array


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];