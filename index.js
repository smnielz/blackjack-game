let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let cards = []
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Branka",
    cash: 234
}
function startGame(){
    playerEl.style.color = "white"
    playerEl.textContent = player.name + ": $" + player.cash
    hasBlackJack = false
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    recall()
}

function nextCard(){
    if(isAlive && hasBlackJack === false){
        let card = randomCard()
        sum += card
        cards.push(card)
        recall()
    }
   
}

function recall() {   
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum
    for(let i =0; i<cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
     if (hasBlackJack){
        player.cash += 100
        playerEl.textContent = player.name + ": $" + player.cash
        playerEl.style.color = "#00ff00"
    }
    else if(isAlive === false){
        player.cash -= 50
        playerEl.textContent = player.name + ": $" + player.cash
        playerEl.style.color = "red"
    }
}

function randomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1)
        return 11
    else if (randomNumber > 10)
        return 10
    else
        return randomNumber
}
