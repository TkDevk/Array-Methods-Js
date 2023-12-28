//It kind help to put the order required

//It has tow logics, but not really 2 logics xd

//by itself with out a callback function it will take only 1 digit

//It does mutate the array

let nums = [5,4,7,2,1,3]

nums.sort()
console.log(nums)

/**
 * The second one is for 2 digits, for example 5 ,11, 4, 2, the method it will take 11 as 1, so => 11,2,4,5 
 * */

let numas = [10,22,11,2,54,9,1,0,3,7]
//i.e.

//I f we use a call back function we are going to pass two arguments

// a = it will start at [0]
// b = will be [1]
//So if a-b = -; then it means that b is greater than a so it must be place it after and a must come before b

let numasSorted = numas.sort((a,b)=>a-b)
console.log(numasSorted)
