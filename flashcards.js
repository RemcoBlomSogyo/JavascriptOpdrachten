/**
 * Created by rblom on 5/1/2017.
 */

var cards = [];
var frontCardText = "";
var backCardText = "";
var cardReadCounter = 0;
var readLine = require("readline");
var rl = readLine.createInterface(process.stdin, process.stdout);

function userInputAction(answer) {
    if (answer === "ja" || answer === "Ja" || answer === "JA") {
        makeFrontCard();
    } else if (answer === "nee" || answer === "Nee" || answer === "NEE") {
        askCardQuestion();
    } else {
        rl.question("Antwoord wordt niet herkend, nieuwe flashcard? ", userInputAction);
    }
}

function makeFrontCard() {
    rl.question("Voorkant: ", function (answer) {
        frontCardText = answer;
        makeBackCard();
    });
}

function makeBackCard() {
    rl.question("Achterkant: ", function (answer) {
        backCardText = answer;
        putCardinArray();
    });
}

function putCardinArray() {
    cards.push({
        frontCard: frontCardText,
        backCard: backCardText,
        answerCorrect: false
    });
    rl.question("Nieuwe flashcard? ", userInputAction);
}

function askCardQuestion() {
    if (cards.length !== 0) {
        console.log("Voorkant: " + cards[cardReadCounter].frontCard);
        rl.question("Achterkant: " , checkAnswer);
    } else {
        endGame();
    }
}

function checkAnswer(answer) {
    if (answer === cards[cardReadCounter].backCard) {
        console.log("Goed.");
        cards[cardReadCounter].answerCorrect = true;
    } else {
        console.log("Fout, het juiste antwoord is " + cards[cardReadCounter].backCard);
    }

    changeCardReadCounter(cardReadCounter);
    askCardQuestion();
}

function changeCardReadCounter(counterAtLastCard) {
    if (cardReadCounter === cards.length - 1) {
        cardReadCounter = 0;
    } else {
        cardReadCounter++;
    }

    if (cards[cardReadCounter].answerCorrect) {
        if (cardReadCounter === counterAtLastCard) {
            endGame();
        } else {
            changeCardReadCounter(counterAtLastCard);
        }
    }
}

function endGame() {
    if (cards.length === 0) {
        console.log("Er zijn geen kaarten gevonden.");
    } else {
        console.log("Alle kaarten zijn goed beantwoord.");
    }
    process.exit(0);
}

rl.question("Nieuwe flashcard? ", userInputAction);