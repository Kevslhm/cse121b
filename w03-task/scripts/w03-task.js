/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    const number1Html = parseInt(document.querySelector('#add1').value);
    const number2Html = parseInt(document.getElementById('add2').value);

    const sum = add(number1Html, number2Html);

    document.getElementById('sum').value = sum;
}

const buttonHtml = document.querySelector('#addNumbers');
buttonHtml.addEventListener("click", addNumbers);

/*function add (number1, number2)
{
    return number1 + number2
}

function addNumbers ()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.getElementById('add2').value);

    document.getElementById('sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);*/

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2)
{
    return number1 - number2;
}

const subtractNumbers = function ()
{
    let subtractNumber1 = parseInt(document.querySelector('#subtract1').value);
    let subtractNumber2 = parseInt(document.getElementById('subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.getElementById('subtractNumbers').addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiplyNumber1 = parseInt(document.querySelector('#factor1').value);
    let multiplyNumber2 = parseInt(document.getElementById('factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividendNumber1 = parseInt(document.querySelector('#dividend').value);
    let divisorNumber2 = parseInt(document.getElementById('divisor').value);

    document.querySelector('#quotient').value = divide(dividendNumber1, divisorNumber2);
}

document.getElementById('divideNumbers').addEventListener("click", divideNumbers); 

/* Decision Structure */
function calculateSubtotal()
{
    let userNumber = parseFloat(document.getElementById('subtotal').value);
    let checkbox = document.querySelector('#member');

    if (checkbox.checked === true)
    {
        let discount = userNumber * 0.15;
        let total = userNumber - discount;
        return document.getElementById('total').innerHTML = `$ ${total.toFixed(2)}`;
    }
    else
    {
        return document.getElementById('total').innerHTML = `$ ${userNumber.toFixed(2)}`;
    }
}

document.getElementById('getTotal').addEventListener("click", calculateSubtotal);




/* ARRAY METHODS - Functional Programming */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById('array').innerHTML = numbers;
/* Output Odds Only Array */
document.getElementById('odds').innerHTML = numbers.filter((number) => number % 2 === 1);
/* Output Evens Only Array */
document.getElementById('evens').innerHTML = numbers.filter((number) => number % 2 === 0);
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML = numbers.reduce((number, accumulator) => accumulator + number);
/* Output Multiplied by 2 Array */
document.getElementById('multiplied').innerHTML = numbers.map((i) => i * 2);
/* Output Sum of Multiplied by 2 Array */
let arrayByTwo = numbers.map((number) => number * 2);
let totalSum = arrayByTwo.reduce((number, accumulator) => accumulator + number);
document.getElementById('sumOfMultiplied').innerHTML = totalSum;