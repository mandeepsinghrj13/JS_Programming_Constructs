//UC1
const IS_ABSENT = 0;

let empCheck1 = Math.floor(Math.random() * 10) % 2;
if (empCheck1 == IS_ABSENT) {
  console.log("Employee is ABSENT");
  return;
} else {
  console.log("Employee is PRESENT");
}

//UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
  case IS_PART_TIME:
    empHrs = PART_TIME_HOURS;
    break;
  case IS_FULL_TIME:
    empHrs = FULL_TIME_HOURS;
    break;
  default:
    empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOURS;
console.log("UC2 : Emp Wage: " + empWage);

//Uc3
function getWorkingHours(empCheck2) {
  switch (empCheck2) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}
//let empHrs = 0;
let empCheck2 = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck2);
//let empWage = empHrs * WAGE_PER_HOURS;
console.log("UC3: Emp Wage: " + empWage);

//Uc4
const NUM_OF_WORKING_DAYS = 2;
//let empHrs = 0;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
  let empCheck3 = Math.floor(Math.random() * 10) % 3;
  empHrs += getWorkingHours(empCheck3);
}
//let empWage = empHrs * WAGE_PER_HOURS;
console.log(
  "Uc4 - Total Hrs: " +
    empHrs +
    " wage per hours: " +
    WAGE_PER_HOURS +
    " Emp Wage: " +
    empWage
);

//Uc5
const MAX_HRS_IN_MONTH = 100;
const NUMBER_OF_WORKING_DAYS = 10;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (
  totalEmpHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUMBER_OF_WORKING_DAYS
) {
  totalWorkingDays++;
  let empCheck4 = Math.floor(Math.random() * 10) % 3;
  totalEmpHrs += getWorkingHours(empCheck4);
}
//let empWage = empHrs * WAGE_PER_HOURS;
console.log(
  "Uc5 - Total Days: " +
    totalWorkingDays +
    " Total Hrs : " +
    totalEmpHrs +
    " Emp Wage: " +
    empWage
);
