//for loops
let number = 10;
// for (let i = 0; i < number; i++) {
//     console.log(i);
// }

let names = ['The White Wolf', 'Geralt of Rivia', 'Robert James Bobby Fischer'];
for (let i = 0; i < names.length; i++) {
    let customNamesHtml = `<div>${names[i]}</div>`;
    console.log(customNamesHtml);
}

console.log('That\"s something ninja like');

console.log("this is something ");

const password= 'p@ssword';

if(password.length >=8 && password.includes('@')){
    console.log("this is okaie");
}

