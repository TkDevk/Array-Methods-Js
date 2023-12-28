//if only 1 value match then is true

let num = [1,2,3,4,5,6,7,8]
let isGreaterThan5 = num.some((p)=>p>5);
console.log(isGreaterThan5)

//As soon as find the value it will return true and end the function