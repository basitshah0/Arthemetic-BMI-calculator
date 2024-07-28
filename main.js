import inquirer from "inquirer";
let abcd = await inquirer.prompt([
    {
        name: "abcdef",
        type: "list",
        message: "Choose One",
        choices: ["Calculation", "Result", "BMI"]
    }
]);
if (abcd.abcdef === "Calculation") {
    let result = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter your first value?"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your second value"
        },
        {
            name: "condition",
            type: "list",
            message: "choose one",
            choices: ["addition", "multiply", "subtract", "divide", "modulus", "exponent"]
        }
    ]);
    if (result.condition === "addition") {
        let sum = result.num1 + result.num2;
        console.log("Your value is ", +sum);
    }
    else if (result.condition === "multiply") {
        let sum = result.num1 * result.num2;
        console.log("Your value is ", +sum);
    }
    else if (result.condition === "divide") {
        let sum = result.num1 / result.num2;
        console.log("Your value is ", +sum);
    }
    else if (result.condition === "subtract") {
        let sum = result.num1 - result.num2;
        console.log("Your value is ", +sum);
    }
    else if (result.condition === "modulus") {
        let sum = result.num1 % result.num2;
        console.log("your value is", sum);
    }
    else if (result.condition === "exponent") {
        let sum = result.num1 ** result.num2;
        console.log("your value is", sum);
    }
    else {
        console.log("error");
    }
}
else if (abcd.abcdef === "Result") {
    let result = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter your Total marks?"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your Obtain Marks?"
        },
    ]);
    let ans = result.num2 * 100 / result.num1;
    console.log(`You got ${result.num2} out of ${result.num1} and secure ${ans}%`);
}
else if (abcd.abcdef === "BMI") {
    let result = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter your weight in kg?"
        },
        {
            name: "num2",
            type: "number",
            message: "Enter your height in meter?"
        },
    ]);
    let ans = result.num1 / result.num2 ** 2;
    console.log(`Your BMI is ${ans}`);
}
else {
    console.log("Error");
}
