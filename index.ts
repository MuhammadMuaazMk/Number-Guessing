#! /usr/bin/env node

import inquirer from "inquirer"
console.log("\n\n\t\t\tYou have a 10 chances to guess a number b/w 1 to 10\n\n")
const randomNumber = Math.floor(Math.random()*10+1);
for(let i =0 ; i<=10 ; i++){
 const answer= await inquirer.prompt([
    { 
        name:"userGuessedNumber",
        type: "number",
        message:"Please guess a Number between 1 to 10 :"

    }

]);

console.log("________________________________________________")
if(answer.userGuessedNumber === randomNumber){
    console.log("Congurlation!! You are Guess Number is Right")
    
    break
}
else{
    console.log("Your guess Number is Not Right")
}
console.log("________________________________________________")
}
console.log("________________________________________________")
