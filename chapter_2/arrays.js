let names = ['White Wolf', 'Geralt of Rivia', 'Hikaru Nakamura'];

console.log(names);

console.log(names.length);

let result = names.join('+');
console.log(result);////White Wolf+Geralt of Rivia+Hikaru Nakamura

result = names.indexOf('White Wolf');
console.log(result);////0

result = names .concat(['Tom Ford', 'Beth Harmon']);
console.log(result);////["White Wolf", "Geralt of Rivia", "Hikaru Nakamura", "Tom Ford", "Beth Harmon"]

//###########################################//
result = names.push('Kant');
console.log(result);////4
console.log(names);////["White Wolf", "Geralt of Rivia", "Hikaru Nakamura", "Kant"]

//###########################################//
result = names.pop();
console.log(result);////Kant
console.log(names);////["White Wolf", "Geralt of Rivia", "Hikaru Nakamura"]

//###########################################//
result = names.includes('White Wolf');
console.log(result);////true

