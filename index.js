let player ={
    name: "Mary",
    chips: 135
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){

    cardsEl.textContent = "cards: "
    //Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent= "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to pick a new card?"
    }
    
    else if (sum === 21){
        message = "Wohoo! You have got BlackJack"
        hasBlackJack = true
    }
    
    else{
        message = "You are out of the game"
        isAlive = false
    }
    
    // Log it out!
    messageEl.textContent = message
    
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the Deck")
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
    
}
let hands = ["rock", "paper", "scissors"]

function getHand(){
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
} 
console.log(getHand())



