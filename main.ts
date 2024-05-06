#! usr/bin/env node
import inquirer from "inquirer"
const randomNumber = Math.floor(Math.random()*10+1);
const answer= await inquirer.prompt([
    { 
        name:"userGuessedNumber",
        type: "number",
        message:"Please guess a Number between 1 to 10 :"

    }

]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congurlation!! You are Guess Number is Right")
}
else{
    console.log("Your guess Number is Not Right")
}
