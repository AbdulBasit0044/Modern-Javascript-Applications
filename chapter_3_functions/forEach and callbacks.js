let people = ['Geralt of Rivia', 'Prince of Persia', 'Hold the door', 'Horizon Zero:New Dawn'];

const logPersons = (element, index) =>{
    console.log(`${index} -- ${element}`);    
}

people.forEach(element => {
    console.log(element);
});

people.forEach(logPersons);


const ul = document.querySelector('.people');
let html = ``;
people.forEach(element => {
    //createing html template
    html += `<li style="color:purple">${element}</li>`
});
console.log(html);

ul.innerHTML = html;