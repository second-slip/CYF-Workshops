
printTimesTables(5);

function printTimesTables(n) {
    
    let count = 1; // needs to be a mutable (changeable) variable, let
    while(count <= 12) {
        const product = n * count;
        console.log(`${n} * ${count} = ${product}`);
        count++;
    }
}

// ReferenceError: i is not defined
// TypeError: Assignment to constant variable.

// function printTimesTables(n) {
//     const count = 1;
//     while(count <= 12) {
//         const product = n * i;
//         console.log(`${n} * ${i} = ${product}`);
//         count++;
//     }
// }