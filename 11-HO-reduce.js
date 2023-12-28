//Reduce an array down a single value, it could take all the elements and get a total of its addtion
let num = [1,2,3,4,5,6,7,8]

//For this mehod we have to pass two args, but in total has three, for this i.e. i'll only use the frist two args

//(total,currentValue), total it will be literally the current total because it takes as default value the [0] index, so total it will be 1, then will add 2 because it takes the next position

let reduced=num.reduce((total,currentValue)=>total+currentValue)
console.log(reduced)

//it doesn't mutate the main array

//notice that as default it starts from 0 but if i want i can set up a initial value so doesn't start from [0] and the next value is [0], i.e.

let rreduced = num.reduce((total,currentValue)=>total+currentValue,10)
console.log(rreduced)

//i'm adding 10 (),10 as default value so this time starts from 10+1+...