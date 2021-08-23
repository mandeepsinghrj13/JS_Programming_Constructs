//Question-04 read random five 2 digit numbers, find their sum and average.

let firstTwoDigit = Math.floor(Math.random() * (99 - 10)) + 10;
let secondTwoDigit = Math.floor(Math.random() * (99 - 10)) + 10;
let thirdTwoDigit = Math.floor(Math.random() * (99 - 10)) + 10;
let forthTwoDigit = Math.floor(Math.random() * (99 - 10)) + 10;
let fifthTwoDigit = Math.floor(Math.random() * (99 - 10)) + 10;

let sum =
  firstTwoDigit +
  secondTwoDigit +
  thirdTwoDigit +
  forthTwoDigit +
  firstTwoDigit;
let average = sum / 5;

console.log("Sum of five two digit random numbers is : " + sum);
console.log("Average is : " + average);
