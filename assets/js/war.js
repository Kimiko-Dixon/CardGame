// const deck = require('./deck')
import {deck} from './deck.js'
const warDeck = deck()
// const warDeck = deck.deck()
let computerHand = []
let playerHand = []

const playArea = $('#playArea')

warDeck.map(card => {
    switch(card.value){
        case 'ace':
            card.rankVal = 1
            break;
        case 'king':
            card.rankVal = 2
            break;
        case 'queen':
            card.rankVal = 3
            break;
        case 'jack':
            card.rankVal = 4
            break;
        case 'ten':
            card.rankVal = 5
            break;
        case 'nine':
            card.rankVal = 6
            break;
        case 'eight':
            card.rankVal = 7
            break;
        case 'seven':
            card.rankVal = 8
            break;   
        case 'six':
            card.rankVal = 9
            break;
        case 'five':
            card.rankVal = 10
            break;
        case 'four':
            card.rankVal = 11
            break;
        case 'three':
            card.rankVal = 12
            break;
        case 'two':
            card.rankVal = 13
            break;    
        case 'one':
            card.rankVal = 14
            break;
    }
})

function deal()
{
    while (warDeck.length != 0){
        playerHand.push(warDeck[0])
        computerHand.push(warDeck[1])
        warDeck.splice(0,2)
    }
}


function play(){

    // console.log(computerHand)
    // console.log(playerHand)

    let compCards = [computerHand[0]]
    let playerCards = [playerHand[0]]
    const playedCards = [...compCards,...playerCards]
    computerHand.splice(0, compCards.length)
    playerHand.splice(0, playerCards.length)

    // console.log(compCards)
    // console.log(playerCards)
    // console.log(computerHand)
    // console.log(playerHand)

    if (compCards.rankVal < playerCards.rankVal) {
        playedCards.forEach(card => computerHand.push(card))

    }
    else if (compCards.rankVal > playerCards.rankVal) {
        playedCards.forEach(card => playerHand.push(card))
    }
    else if(compCards.rankVal === playerCards.rankVal) {
        war(compCards,playerCards)
    }
    // computerHand.splice(0, 1)
    // playerHand.splice(0, 1)

    if (computerHand.length != 0 && playerHand.length != 0){   

        play()
    }
    else{
        let winner;
        if (computerHand.length === 0){
            winner = 'Player'
        }
        else{
            winner = 'Computer'
        }

        console.log(`${winner} Wins!!!`)
    }

}

function war(compCards,playerCards){
    // console.log('WAR!!!')
    // console.log('first',compCards)
    // console.log('first',playerCards)
    // console.log(computerHand)
    // console.log(playerHand)

    for (let i = 0;i<4;i++){
        if(computerHand.length != 0){
            compCards.push(computerHand[0])
            computerHand.splice(0, 1)
        }
        if(playerHand.length != 0){
            playerCards.push(playerHand[0])
            playerHand.splice(0, 1)
        }
        
    }
    const playedCards = [...compCards,...playerCards]

    // console.log(compCards)
    // console.log(playerCards)
    // console.log(compCards[(compCards.length - 1)].rankVal)
    // console.log(playerCards[(playerCards.length - 1)].rankVal)
    if (compCards[(compCards.length - 1)].rankVal < playerCards[(playerCards.length - 1)].rankVal) {
        playedCards.forEach(card => computerHand.push(card))

    }
    else if (compCards[(compCards.length - 1)].rankVal > playerCards[(playerCards.length - 1)].rankVal) {
        playedCards.forEach(card => playerHand.push(card))
    }
    else if (compCards[(compCards.length - 1)].rankVal === playerCards[(playerCards.length - 1)].rankVal) {
        war(compCards,playerCards)
    }
}

// $(document).ready(() => {
//     const playButton = $('<button>')
//     playArea.append(playButton)
// })
deal()
play()