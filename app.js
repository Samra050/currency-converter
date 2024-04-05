import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    ELUR: 0.91,
    GBP: 0.76,
    INR: 74.70,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: `from`,
        message: "Enter From Currency",
        type: `list`,
        choices: [`USD`, `ELUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: `to`,
        message: "Enter To Currency",
        type: `list`,
        choices: [`USD`, `ELUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: `amount`,
        message: "Enter Your Amount",
        type: `number`,
    }
]);
let fromAmount = currency[user_answer.from]; //rate exchange
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; // usd base currency
let convertedAmount = baseAmount * toamount;
console.log(convertedAmount);
