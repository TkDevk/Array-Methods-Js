/**
 * This is one of the fisrt High order methods that i will try to apply in the future (i hope so xD)
 *
 * 
 * 
 * HOM are functions that accepts functions as arguments or parameters, and return a function
 * summary: functions that can operate functions
 * 
 * ForEach we have that LOOPS OVER EACH ELEMENT INTO THE ARRAY, we can run call back function for each element
 * 
 * So, EACH TIME LOOPS OVER THE ELEMENT IT WILL RUN THE CALLBACK FCUNTION
 */

let names = ['Danny','Joe','Sarah','Molly','Joe']

//DOESN'T CREATE A NEW ARRAY

names.forEach((index)=>{
    console.log(index)
})


let count = 0;
 names.forEach((n)=>{
    count++

})

 console.log(count)
