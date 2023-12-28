/**
 * it builds a new array, that is the difference between this and forEach
 * 
 */

let nums = [1,2,3,4,5,6,7]

let doubleNums=nums.map((n)=>{return n*2}) // let doubleNums=nums.map((n)=>n*2)
console.log(doubleNums)

//Doesn't mutate, so if want to work with the array without modify it i can use this method