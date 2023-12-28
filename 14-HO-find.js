//find a value in the array, the first that meet the condition
 let stock = [
    {item:'Onion', quantity:32},
    {item: 'Mayo', quantity: 2},
    {item:'Hot sauce', quantity:5}
 ]

let onion = stock.find((f)=>f.item=='Onion')

console.log(onion)

//Also, i can use findIndex to find the index position

let findIndexMayo = stock.findIndex((f)=>f.item=='Mayo')
console.log(findIndexMayo)