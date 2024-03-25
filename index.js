import inquirer from 'inquirer';
let query = await inquirer.prompt([
    {
        message: "Enter First Number : ",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter Second Number : ",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Choose Operation : ",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"]
    }
]);
if (query.operator == "+") {
    console.log(`Answer : ${query.firstNumber + query.secondNumber}`);
}
else if (query.operator == "-") {
    console.log(`Answer : ${query.firstNumber - query.secondNumber}`);
}
else if (query.operator == "*") {
    console.log(`Answer : ${query.firstNumber * query.secondNumber}`);
}
else if (query.operator == "/") {
    console.log(`Answer : ${query.firstNumber / query.secondNumber}`);
}
else {
    console.log("Invalid Input");
}
