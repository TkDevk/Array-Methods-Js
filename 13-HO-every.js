//It will return true if all the elements meet the query but if only of them doesn't meet the condition it will return false

//It will carry the true value

let num = [1,2,3,4,5,6,7,8]

//Doesn't mutate

let isGrathenThan0 = num.every((n)=>n>1)

console.log(isGrathenThan0)