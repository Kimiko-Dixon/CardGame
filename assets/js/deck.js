//Create the card deck and export a method to create a shuffled deck as a module

const suits = ['clubs','hearts','spades', 'diamonds']
const values = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

export function deck() 
{
    const tempDeck = []
    class Card {
        constructor(value, suit) {
            this.value = value
            this.suit = suit
            //this.numValue = 
            this.color = this.cardColor()
            //this.img = 
        }
        cardColor() {
            let color;
            this.suit === 'diamonds' || this.suit === 'hearts' ? color = 'red' : color = 'black'
            return color
        }
    }
    values.forEach(value => {
        suits.forEach(suit => {
            const card = new Card(value, suit)
            tempDeck.push(card)
        })
    })

    return shuffledDeck(tempDeck)
    
}

function shuffledDeck(deck) {
    const shuffledDeck = []
    while(deck.length != 0){
       const randomCard = deck[Math.floor(Math.random() * deck.length)]
       shuffledDeck.push(randomCard)
       deck.splice(deck.indexOf(randomCard),1)
    }
    return shuffledDeck
}
// console.log(deck)
// console.log(deck.length)
// const shuffledDeck1 = deck()
// console.log(shuffledDeck1)
// console.log(shuffledDeck1.length)

// module.exports = {deck}

