/* lesson 2 & 3 */

// let firstCard = 10
// let secondCard = 7
// let sum = firstCard + secondCard + 5

// if (sum < 21) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🤩")
// } else {
//     console.log("You're out of the game! 😭")
// }

/* Lesson 4 */

// let age = 21 

// if (age < 16) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

/* lesson 5 */

// let age = 120

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }

/* lesson 6,7 & 8 */

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true

// if (sum <= 20) {
//     console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack! 🤩")
//     hasBlackjack = true
// } else {
//     console.log("You're out of the game! 😭")
//     isAlive = false
// }

// // CASH OUT!
// console.log(hasBlackjack)
// console.log(isAlive)

/* lesson 9 */

// console.log(4 === 3) // false
// console.log(5 > 2) // true
// console.log(12 > 12) // false
// console.log(3 < 0) // false
// console.log(3 >= 3) // true
// console.log(11 <= 11) // true
// console.log(3 <= 2) // false

/* lesson 10 & 11 */

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard + 3
// let hasBlackjack = false
// let isAlive = true
// let message = ""

// if (sum <= 20) {
//     message = "Do you want to draw a new card? 🙂"
// } else if (sum === 21) {
//     message = "Wohoo! You've got Blackjack! 🤩"
//     hasBlackjack = true
// } else {
//     message = "You're out of the game! 😭"
//     isAlive = false
// }

// // CASH OUT!
// console.log(hasBlackjack)
// console.log(isAlive)
// console.log(message)

/* lesson 13, 14, 15, 16, 17 */

// let firstCard = 10
// let secondCard = 6
// let cards = [firstCard, secondCard] // array - ordered list of items
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame(){
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     console.log("Drawing a new card from the deck!")

//     let card = 6
//     sum += card
//     renderGame()
// }


/* lesson 21 & 22 */

// Arrays 

// let featuredPosts = [
//     "Check out my Netflix clone", // 0
//     "Here's the code for my project", // 1
//     "I've just relaunched my portfolio" // 2
// ]

// console.log(featuredPosts.leng)

// console.log(featuredPosts[0])

// let experience = ["CEO at Scrimba", "Fronted developer at Xeneta", "People counter for Norstat"]

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])


/* lesson 23 */

// let per = ["Per Luky", 20, false]


/* lesson 24 */

// let cards = [7, 4]
// cards.push(6)
// // console.log(cards)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately"
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)


/* lesson 25 & 26 */

// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     let card = 6
//     sum += card
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }


/* lesson 27 */

//      START        FINISH        STEP SIZE
// for (let count = 1; count < 11;   count += 1 ) {

//     console.log(count)
// }


/* lesson 28 */

// for (let count = 10; count < 101; count += 10){
//     console.log(count)
// }


/* lesson 29 */

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately",
//     "Same here!",
//     "Great to hear",
//     "🙌"
// ]

// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

// for (let i = 0; i < messages.length ; i += 1) {
//     console.log(messages[i])
// }


/* lesson 30 */

// let cards = [7, 3, 9]

// for (let i = 0; i < cards.length; i++){
//     console.log(cards[i])
// }

/* lesson 31 */

// let sentence = ["Hello", "my", "name","is", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "    
// }


/* lesson 32, 33 */

// let firstCard = 10
// let secondCard = 4
// let cards = [firstCard, secondCard]
// let sum = firstCard + secondCard
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: " 

//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     let card = 6
//     sum += card
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }


/* lesson 34 */

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }

// function getTotalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()

// console.log(totalTime)


/* lesson 35 */

/* let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return 5
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
} */


/* lesson 36 & 37 */

// let randomNumber = Math.random() * 6
// console.log(randomNumber)


/* lesson 38 */

// let flooredNumber = Math.floor(3.45632)
// console.log(flooredNumber)

/* lesson 39 */

// let randomNumber = Math.floor( Math.random() * 6)
// console.log(randomNumber)


/* lesson 40 */

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }
// console.log(rollDice())


/* lesson 41, 42 & 43 */

// let cards = []
// let sum = 0
// let hasBlackjack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// console.log(cards)

// function getRandomCard() {

//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "

//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     let card = getRandomCard()
//     sum += card
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }


/* lesson 45 */

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true){
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }


/* lesson 46 */

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution() {
//     console.log("Showing the solution")
// }


/* lesson 47 */

// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Hey, check out this new film we think you will like!")
// }


/* lesson 48 */

// let cards = []
// let sum = 0
// let hasBlackjack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// let player = {
//     name: "Per",
//     chips: 145
// }

// let playerEL = document.getElementById("player-el")
// playerEL.textContent = player.name + ": $" + player.chipschips

// console.log(cards)

// function getRandomCard() {

//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//         return 11
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "

//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (sum === 21) {
//         message = "You've got Blackjack!"
//         hasBlackjack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     if (isAlive === true && hasBlackjack === false) {
//         let card = getRandomCard()
//         sum += card
//         cards.push(card)
//         console.log(cards)
//         renderGame()
//     }
// }


/* lesson 50 */

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)


/* lesson 51 */

// let castle = {
//     title: "Live like a king in my castle",
//     price: 190,
//     isSuperHost: true,
//     images: ["img/castle1.png", "img/castle2.png"]
// }

// console.log(castle.price)
// console.log(castle.isSuperHost)


/* lesson 52 [Final Game] */


let player = {
    name: "Per",
    chips: 145,
}


let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

console.log(cards)

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "You've got Blackjack! 🤩"
        hasBlackjack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}
