const hobbies = ["Sports", "Cooking"]
// for(let hobby of hobbies) {
//     console.log(hobby)
// }

console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
console.log(hobbies)

const copiedArray = [...hobbies]
console.log(copiedArray)