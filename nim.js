/**
 * Created by rblom on 4/11/2017.
 */

function nimGame() {
    var matches = 11;
    var turnIsComputer = false;
    var readline = require("readline");
    var rl = readline.createInterface(process.stdin, process.stdout);

    return {
        beginTurn: function() {
            console.log("Er liggen ", matches, " lucifers");

            if (turnIsComputer) {
                this.getComputerInput();
            } else {
                this.getUserInput();
            }
        },

        getComputerInput: function() {
            var computerHands = [0, 1, 1, 2, 3, 4, 1, 1, 2, 3, 4, 1];
            console.log("Computer pakt ", computerHands[matches], " lucifers");
            this.takeMatches(computerHands[matches]);
        },

        getUserInput: function() {
            rl.question("Hoeveel lucifers wil je nemen?", this.checkForValidHand.bind(this));
        },

        question: function (text, functie) {
            console.log(text);
            //input vragen
            var input = "test";
            functie(input);
        },

        checkForValidHand: function(hand) {
            if (this.matchesIsBiggerThanHand(hand) && this.handIsBetweenOneAndFour(hand)) {
                this.takeMatches(hand);
            } else {
                console.log("Ongeldige input");
                this.beginTurn();
            }
        },

        // error: function is not a function?
        matchesIsBiggerThanHand: function(hand) {
            if (matches >= hand) {
                return true;
            } else {
                return false;
            }
        },

        handIsBetweenOneAndFour: function (hand) {
            if (hand >= 1 && hand <= 4) {
                return true;
            } else {
                return false;
            }
        },

        takeMatches: function (hand) {
            matches -= hand;
            this.changeTurnAndStartOrStopGame();
        },

        changeTurnAndStartOrStopGame: function () {
            if (matches != 0) {
                turnIsComputer = !turnIsComputer;
                this.beginTurn();
            } else {
                rl.close();
                this.tellGameIsWonOrLost();
            }
        },

        tellGameIsWonOrLost: function () {
            if (turnIsComputer) {
                console.log("Je hebt gewonnen");
            } else {
                console.log("Je hebt verloren");
            }
        }
    }
}

var nim = nimGame();
nim.beginTurn();