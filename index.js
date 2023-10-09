import shuffler from "./shuffler.js"

const BASE_CARD = { suit: '', label: '', value: 0 }

const suits = ["Spades", "Clubs", "Hearts", "Diamonds"]
let deck = []


for (let i = 0; i < 13; i++) {
    let label = ''
    if (i == 10) { label = "J" }
    else if (i == 11) { label = "Q" }
    else if (i == 12) { label = "K" }
    else if (i == 0) { label = "A" }
    else label = `${i + 1}`
    let value = i + 1
    if (value > 10) { value = 10 }

    suits.forEach((suit) => { deck.push({ suit: suit, label: label, value: value }) })

}

shuffler(deck)

console.log(deck)



// create cards
// --> create suit names
// ----> each suit has 13 cards 
// ------> each card has it's own value - suit - label 

//create the shuffle method
// it receives the deck and return the deck in a random order

