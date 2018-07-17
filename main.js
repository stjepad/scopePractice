// C is for cookies
// changed y to x in for loop
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjunction Function
// changed const conjoinedWord to let conjoinedWords
const conjunction = function (firstWord, secondWord) {
    let conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}

conjunction("Master", "Card")

// ModSquad
// took out outside brackets
// create a div in HTML and add a class called show info
// change const to let (because there are more than one item being targeted)
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })

document.querySelector(".show-info").innerHTML = HTMLRepresentation

//Simon Says
const locations = [
    [1, 1],[1, 2],[1, 3],[2, 1],[2, 2],[2, 3]
]
let counter = 0
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    counter++
    if (currentLocation[0] < 2) {
        const invalidLocation = true
        if (invalidLocation) {
            console.log(`This location ${currentLocation} is invalid`)
        }
        console.log(`There were ${counter} invalid locations`)
    }
}

// Advanced Challenge: Lambda Llama

const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

    const namer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]

        return name + suffix
    }
       return namer
}

const nameMaker = llamaNamer()
console.log(nameMaker())

