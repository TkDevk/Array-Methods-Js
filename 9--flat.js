//Is use to flat any nest array, i.e. we have an array with nest array
//Doesn't create a newy array neither
let arryNest = [1,2,3,4,5,6,[7,8],9]

let flatArry=arryNest.flat(1) // come with 1 value as default, but if we have more than 1 array nest we have to specify with numbers so if there is 2 nest so => (2)

console.log(flatArry)