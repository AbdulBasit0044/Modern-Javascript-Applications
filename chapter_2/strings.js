console.log("Hello World");

let email = "hello@example.com";

console.log(email);

let firstName = "Abdul";
let lastName = "Basit";

let fullName = firstName + lastName;
console.log(fullName);

//getting characters
console.log(fullName[0]);

//getting string length
console.log(fullName.length);

//string methods
//converting to the upper case
console.log(fullName.toUpperCase());

//converting to the lower case
let result = fullName.toLowerCase(); 
console.log(result, fullName);

//getting the index of character in a string
let index = email.indexOf('@');
console.log(index);

console.log(email.lastIndexOf('i'));

//###########################################//
result = email.slice(4,10);
console.log(result);
////o@exam

//###########################################//
result = email.substr(4,10);
console.log(result);
////o@example.

result = email.replace('m','n');
console.log(result);////hello@exanple.com