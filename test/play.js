const hobbies = ["Sports", "Cooking"]
// for(let hobby of hobbies) {
//     console.log(hobby)
// }

console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
console.log(hobbies)

const copiedArray = [...hobbies]
console.log(copiedArray)
const toArray = (...args) => {
    return args
}
console.log(toArray(1,2,3,4,5,6))

const person = {
    name: 'Bakyt',
    age: 35,
    greet() {
        console.log(this.name)
    }
}

const { name, age } = person
console.log(name, age)

setTimeout(() => {
    console.log('Timer is done!')
}, 2000)

console.log('Hello timer!')