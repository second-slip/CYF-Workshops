let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file? 2
// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// c) How many inputs do we pass to replaceAll when we call it? How can you tell? 2, comma separated
// d) How any inputs do we pass to repeat when we call it?  How can you tell? 1
// e) What kind of statement is on line 7? REASSIGNMENT expression

console.log(confession);