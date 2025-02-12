
let hasBlackJack = false;// store the state
let cards = []
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el") // powerful func
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Sree",
    chips: 145,
    sayHello: function(){ //methods are attached to objects

    }
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " $" +  player.chips


function startGame() {
    sum = 0;
    isAlive = true;
    hasBlackJack = false;
    cards = [getRandomCard(), getRandomCard()] // creating arrays - ordered list of items
    sum = cards[0] + cards[1]
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    cards.forEach(element => {
        cardsEl.textContent += element + " "
    });

    // for( let count=1; count < 11; count += 1 ){
    // }
    // Math.random() 
    // Math.floor() rounds the number
    // pop() last element push() push it 
    // shift()  remove the first element
    // unshift() put something inside the array
    sumEl.textContent = "Sum:" + sum
    if (sum < 21) {
        message = "Do you want to draw a card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "Wohooo";
        player.chips += 100
    } else {
        message = "You have lost the game";
        isAlive = false;
    }

    playerEl.textContent = player.name + " $" +  player.chips
    messageEl.textContent = message;
}

function getRandomCard() {
    let num = Math.floor(Math.random() * 13) + 1;
    if (num > 10) {
        return 10;
    } else if (num === 1) {
        return 11;
    } else {
        return num;
    }
}

function drawNewCard() {
    if (isAlive === true && hasBlackJack === false && player.chips >= 20){
        let newCard = getRandomCard()
        player.chips -= 20;
        cards.push(newCard)
    
        sum += newCard;
        renderGame();
    }
}

