import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';

const userInput = readline.createInterface({input, output});

let number = parseFloat (await userInput.question ("can you give me anumber please ? ")) 
let count = 0;
let sum_ = 0;

while (number !=45){
    if (number <= 10 ){
        sum_ = sum_ + number;
        count++;
    } 
    number = parseFloat (await userInput.question ("can you give me anumber please ? ")) 
}
console.log ( 'average of number <=10 is' + sum_ / count);
