/**
 * Created by rblom on 4/13/2017.
 */
var QUOTES = [
    ["galileo", "eppur si muove"],
    ["archimedes jan", "eureka!"],
    ["erasmus", "in regione caecorum rex est luscus"],
    ["socrates", "I know nothing except the fact of my ignorance"],
    ["rené descartes", "cogito, ergo sum"],
    ["sir isaac newton", "if I have seen further it is by standing on the shoulders of giants"]
];

function calculateDayOfYear() {
    var dateNow = new Date();
    var dateStartOfYear = new Date(dateNow.getFullYear(), 0, 0);
    var differenceInMs = dateNow - dateStartOfYear;
    var oneDayInMs = 1000 * 60 * 60 * 24;
    return Math.floor(differenceInMs / oneDayInMs);
}

function calculateIndex(dayOfYear) {
    return dayOfYear % 6;
}

function getQuoteFromArray(indexForArray) {
    return QUOTES[indexForArray];
}

function formatSentence(quote) {
    quote = addDotIfNecessary(quote);
    quote = capitalizeString(quote);
    return addQuotationMarks(quote);
}

function addDotIfNecessary(sentence) {
    if (getLastCharOfString(sentence) !== "!") {
        sentence = sentence + ".";
    }
    return sentence;
}

function addQuotationMarks(sentence) {
    return "\"" + sentence + "\"";
}

function capitalizeString(string) {
    var str = string.toString();
    return str.charAt(0).toUpperCase() + str.substring(1);
}

function getLastCharOfString(string) {
    return string[string.length - 1];
}

function formatPerson(personString) {
    var newPersonString = personString.toString();
    var nameParts = newPersonString.split(" ");
    for (var i = 0; i < nameParts.length; i++) {
        nameParts[i] = capitalizeString(nameParts[i]);
    }
    newPersonString = stringBuilder(nameParts);
    return newPersonString;
}

function stringBuilder(stringArray) {
    var newString = "";
    for (var i = 0; i < stringArray.length; i++) {
        newString = newString + stringArray[i];
        if (i !== stringArray.length - 1) {
            newString = newString + " ";
        }
    }
    return newString;
}

var dayOfYear = calculateDayOfYear();
var quote = getQuoteFromArray(calculateIndex(dayOfYear));
var formattedPerson = formatPerson(quote[0]);
var formattedSentence = formatSentence(quote[1]);
console.log(formattedSentence + " -- " + formattedPerson);