console.log("basics file is running");

////function declarations
// function greet(){
//     return 'hello, world';
// }

////function expressions
const greet = function(){
    return 'hello, world';
};

// const greet = () => 'hello, world';

let result = greet();
console.log(result);

const bill = (products, tax) => {
    let total = 0;
    console.log(products.length);
    for(let i=0; i<products.length; i++){
        console.log(total);
        total += products[i] + products[i]*tax;    
    }
    return total;
};

result = bill([10, 15, 30], 0.2);
console.log(result);