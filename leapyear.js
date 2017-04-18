/**
 * Created by rblom on 4/12/2017.
 */
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

function askUser() {
    rl.question("noem een jaartal?", checkInputIsStop);
};

function checkInputIsStop(year) {
    if (year === "stop") {
        messageGoodBye();
        rl.close();
        process.exit(0);
    } else {
        checkYear(year);
    }
};

function checkYear(year) {
    if (year % 400 === 0) {
        messageIsLeapYear();
    } else if (year % 100 === 0) {
        messageIsNotLeapYear();
    } else if (year % 4 === 0) {
        messageIsLeapYear();
    } else {
        messageIsNotLeapYear();
    }
};

function messageIsLeapYear() {
    console.log("That year is a leap year!");
    askUser();
};

function messageIsNotLeapYear() {
    console.log("That year is not a leap year!");
    askUser();
};

function messageGoodBye() {
    console.log("Tot ziens");
}

askUser();