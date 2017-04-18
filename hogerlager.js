/**
 * Created by rblom on 4/10/2017.
 */

var randomNum, readLine, rl, compare, answerCorrect;

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

randomNum = Math.floor(Math.random() * 50 + 1);

compare = function (answerUser) {
    if (answerUser < randomNum) {
        console.log("Hoger!\n");
        rl.question("Geef een getal: ", compare);
    } else if (answerUser > randomNum) {
        console.log("Lager!\n");
        rl.question("Geef een getal: ", compare);
    } else {
        console.log("Geraden!");
        rl.close();
    }
};


rl.question("Geef een getal: ", compare);

// closure werkt niet, want randomNum wordt steeds aangepast
// var program = function () {
//     var randomNum = Math.round(Math.random() * 50 + 1);
//     return {
//         compare: function (answerUser) {
//             console.log(randomNum);
//             // als userinput lager is dan opgeslagen waarde, zeg hoger en vraag om nieuwe input
//             if (answerUser < randomNum) {
//                 console.log("Hoger!\n");
//                 rl.question("Geef een getal: ", compare);
//                 // als userinput hoger is dan opgeslagen waarde, zeg lager en vraag om nieuwe input
//             } else if (answerUser > randomNum) {
//                 console.log("Lager!\n");
//                 rl.question("Geef een getal: ", compare);
//                 // als userinput gelijk is aan opgeslagen waarde, zeg geraden en stop het spel
//             } else {
//                 console.log("Geraden!");
//                 //answerCorrect = true;
//                 rl.close();
//             }
//         }
//     }
// };

// var pr = program();
// rl.question("Geef een getal: ", pr.compare);
