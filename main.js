// Ibrahim F.
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(`Example: ${isValid}`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Check if all numbers are divisible by 5. Cache the result in a variable.
function divisible(n1, n2, n3, n4){
    if (n1%5 == 0 && n2%5 == 0 && n3%5 == 0 && n4%5 == 0)
        return true
    else
        return false
}

// Check if the first number is larger than the last. Cache the result in a variable.
function greaterThan(n1, n2){
    if (n1 > n2)
        return true
    else
        return false
}

// Accomplish the following arithmetic chain:
// - Subtract the first number from the second number.
// - Multiply the result by the third number.
// - Find the remainder of dividing the result by the fourth number.
function arithmetic(n1, n2, n3, n4){
    return ((n2-n1) * n3) % n4
}


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
function isUnder25(n1, n2, n3, n4){
    if (n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25)
        return true
    else
        return false
}

// Part 1: Test
console.log(`
Part 1: Math Problems
It is ${divisible(n1, n2, n3, n4)} that all of the numbers are divisible by 5. It is ${greaterThan(n1, n2)} that the first number is larger than the last. After doing the arithmetic operations on the numbers the result was ${arithmetic(n1, n2, n3, n4)}. It is ${isUnder25(n1, n2, n3, n4)} that all the numbers are under 25.`);


// Part 2: Practical Math

// How many gallons of fuel will you need for the entire trip?
function numberOfGallons(distance, mpg){
    return distance/mpg
}

// Will your budget be enough to cover the fuel expense?
function fuelExpense(budget, distance, cof, mpg){
    if ((numberOfGallons(distance, mpg) * cof) < budget)
        return true
    else
        return false
}

// How long will the trip take, in hours?
function travelTime(distance, mph){
    return distance / mph
}

// Part 2: Test
// mph = miles per hour
// mpg = miles per gallon
const distance = 1500;
const budget = 175;
const costOfFuel = 3;

const mph1 = 55;
const mpg1 = 30;

const mph2 = 60;
const mpg2 = 28;

const mph3 = 75;
const mpg3 = 23;

console.log(`
Part 2: Practical Math
Vehicle Info:
Speed 1: At 55 miles per hour, you get 30 miles per gallon.
Speed 2: At 60 miles per hour, you get 28 miles per gallon.
Speed 3: At 75 miles per hour, you get 23 miles per gallon.

How many gallons of fuel will you need for the entire trip?
Speed 1: ${numberOfGallons(distance, mpg1)}
Speed 2: ${numberOfGallons(distance, mpg2)}
Speed 3: ${numberOfGallons(distance, mpg3)}

Will your budget be enough to cover the fuel expense?
Speed 1: ${fuelExpense(budget, distance, costOfFuel, mpg1)}
Speed 2: ${fuelExpense(budget, distance, costOfFuel, mpg2)}
Speed 3: ${fuelExpense(budget, distance, costOfFuel, mpg3)}

How long will the trip take, in hours?
Speed 1: ${travelTime(distance, mph1)}
Speed 2: ${travelTime(distance, mph2)}
Speed 3: ${travelTime(distance, mph3)}

55 miles per hour and 60 miles per hour viable options for the cross-country trip. If fuel consumption matters then 55 miles per hour is the better option since it consumes ${numberOfGallons(distance, mpg1)} gallons of fuel, which is lower than the rest which consumes ${numberOfGallons(distance, mpg2)} gallons and ${numberOfGallons(distance, mpg3)} gallons. If speed matters then 60 miles per hour is the better option since it takes ${fuelExpense(budget, distance, costOfFuel, mpg2)} hours to get there, which is less time compared to the ${fuelExpense(budget, distance, costOfFuel, mpg1)} and ${fuelExpense(budget, distance, costOfFuel, mpg3)} hours.
`);