//Combine array together

let names = ['Ana','Bob','Cata','Diana'];
let lastNames = ['Paz','Queso','Rojas'];
let adress = [123123,123123,5345345,436346456,42342]

let concat = names.concat(lastNames);
console.log(concat)
// I can add another array if i want 
let superConcat = adress.concat(names,lastNames)
console.log(superConcat)
