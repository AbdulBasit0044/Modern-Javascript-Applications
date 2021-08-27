let age = 25;

//loose comparison
console.log(age == 25);////true
console.log(age == '25');////true
console.log(age != 25);////false
console.log(age != '25');////false

//strict comparison (this compares value and type both)
console.log(age === 25);////true
console.log(age === '25');////false
console.log(age !== 25);////false
console.log(age !== '25');////true