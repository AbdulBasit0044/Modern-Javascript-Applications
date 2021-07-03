let realName = "Geralt";
let witcherName = realName;
realName = 'The white wolf';

console.log(realName);
console.log(witcherName);

let realNameArray = {name: "Geralt", power: 50};
console.log(realNameArray);
let witcherNameArray = realNameArray;
console.log(witcherNameArray);

realNameArray.power = 100;
console.log(realNameArray);
console.log(witcherNameArray);
