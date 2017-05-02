/**
 * Created by rblom on 4/10/2017.
 */

var greet, readline, rl;

readline = require('readline');
rl = readline.createInterface(process.stdin, process.stdout);

greet = function(naam) {
    console.log("Hallo " + naam + "!");
};

rl.question("Hoe heet je? ", greet);