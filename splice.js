//It mutates
// Remove elements from an array and also add a new one

let arry = ['Ana','anto','azul','alo','paula','rosa'];

arry.splice(1,1) // it removes anto because is [1] and only 1 place so it means the same place
//console.log(arry)
/**
 * (   ,  )
 *   ^  ^
   1)index start;  2) how many elements we want to delete after that index position                                        
*/  


//The original array is mutate it so that is a problem for our data security
//So it's better to create a copy from the original array and then work with it

let copyArry = [...arry] // ... means everything as a consecutive elements in arry
console.log(arry)

copyArry.splice(0,3) // so if i want to delete 'paula', 'rosa'
console.log(copyArry)