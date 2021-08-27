//numbers

let radius =10;
const pi = 3.14;

result = radius%7;
console.log(result);

result = pi * radius**2;
console.log(result);

//###########################################//
let likes = 10;
likes += 10;////20
likes -= 10;////10
likes *= 10;////100
likes /= 10;////10

//concatenate numbers
result = 'the blog has ' + likes + 'likes';
console.log(result);////the blog has 10likes


let title = "Best reads of today";
let author = "Ma'lord";
likes = 30;
//concatination way
result = 'The blog called ' + title + " by " + author + " has "+likes+ " likes";
console.log(result);////The blog called Best reads of today by Ma'lord has 30 likes

//###########################################//
//template string way
result = `The blod called ${title} by ${author} has ${likes} likes`;
console.log(result);////The blog called Best reads of today by Ma'lord has 30 likes

//###########################################//
//creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>${likes}</span>
`;
console.log(html);