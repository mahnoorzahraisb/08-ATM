#! /usr/bin/env node

import inquirer from "inquirer";

//Initialize user balance and pin code 
let myBalance = 40500;
let myPin = 1122;

//print welcome message
console.log("\n\tWelcome to Syeda Bank ATM\n") 
let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      type: "number",
      message: "Enter your pin code:"
    }

]) 
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login Successfully!");
    console.log(`current Account balance is ${myBalance}`);


    let operationAns = await inquirer.prompt([
     {
        name: "operation",
        type:"list",
        message: "select an operation:",
        choices: [ "Withdraw Amount","Check Balance"]
     }   
    ])

    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "Enter the amount to withdraw:"
        }
     ])
     if (amountAns.amount > myBalance) {
        console.log("Insufficient Balance");
     }
     else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Succesfully`);
        console.log(`your Remaining Balance is:${myBalance}`);
       }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is Incorrect, Try Again!");
}