// Is use to find the index value, if the value repeats itself it will find the first one

let looking4Index = ['aba','ebe','ibi','obo','ubu','cece','cici','aba']

//Also it doesn't create a new array
let seight = looking4Index.indexOf('aba')
console.log(seight)

//Also if i want to find the last index of the word i can u se lastIndexOf

let lastIndex = looking4Index.lastIndexOf('aba')
console.log(lastIndex)