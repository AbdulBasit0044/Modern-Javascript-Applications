let user = {
    name: 'Geralt',
    age: 32,
    email: 'geraltofrivia@witcher.com',
    location: 'rivia',
}

console.log(user);
console.log(user.name);
console.log(user['name']);

user.name = 'The white wolf';
console.log(user.name);
user['name'] = "The monster slayer";
console.log(user.name);
