console.log('1 loose:', 3 == '3');
console.log('1 strict:', 3 === '3');
// There is a difference, on the first case the number 3 is equal to the string 3 because is a loose comparison. In the second case it returns false because we are comparing a string to a number and strictly comparing a string will never equal a number.
// Using console.log('1 strict:', 3 = '3'); returns a syntax error, because we are trying to assign a string value to a number.

let value = true;

console.log('2:', (value === true) ? false : true);

let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);

//It prints firstName, which is 'Stacey' because givenName doesn't have a value.