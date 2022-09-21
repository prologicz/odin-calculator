console.log('The Odin Project Calculator')

//Math functions
function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

function operate (num1, operator, num2) {
    if (operator == '+') return add(num1, num2)
    if (operator == '-') return subtract(num1, num2)
    if (operator == 'x') return multiply(num1, num2)
    if (operator == '/') return divide(num1, num2)
}



//Document Query Selectors
const buttonArea = document.querySelector('.calculator-buttons')
const displayArea = document.querySelector('.display')
const numberButtons = buttonArea.querySelectorAll('.number-button')
const calculationButtons = buttonArea.querySelectorAll('.calculation-button')
const equalsButton = buttonArea.querySelector('.equals-button')
const clearButton = buttonArea.querySelector('.clear-button')


//Calculator Functions
function clearDisplay() {

    displayValues = document.querySelectorAll('.number-display')
    displayValues.forEach(value => displayArea.removeChild(value))

}

function writeDisplay(e) {
    buttonPress = document.createElement('div')
    buttonPress.classList.add('number-display')
    buttonPress.textContent = e.srcElement.innerText;    
    displayArea.appendChild(buttonPress)
}

function getFirstNumber (e) {
    
    numberButtons.forEach(button => button.addEventListener('click', (e) =>{

        writeDisplay(e)
        displayArray.push(e.srcElement.innerText) //Storing user entries in array that will be joined to integer once operator is selected in calculate function
        
    }))
}

function calculate (e) {
    calculationButtons.forEach(button => button.addEventListener ('click', (e) => {
        firstNum = parseInt(displayArray.join('')) // Converting firstNum initially stored as Array into integer
        operator = e.srcElement.textContent
        clearDisplay();
        displayArray = []
    
    
    }))
}

function getNextNumber (e) {
    numberButtons.forEach(button => button.addEventListener('click', (e) =>{

        writeDisplay(e)
        displayArray.push(e.srcElement.innerText) //Storing user entries in array that will be joined to integer once operator is selected in equals function

        
    }))
}

function equals (e) {

    equalsButton.addEventListener('click', (e) => {
        nextNum = parseInt(displayArray.join('')) // Converting nextNum initially stored as Array into integer

        clearDisplay();
        
        solution = operate(firstNum, operator, nextNum)
        buttonPress = document.createElement('div')
        buttonPress.classList.add('number-display')
        buttonPress.textContent = solution
        displayArea.appendChild(buttonPress)

        console.log(firstNum)
        console.log(operator)
        console.log(nextNum)
        console.log(solution)
    
    })
}

function clear (e) {
    clearButton.addEventListener('click', (e) => {
        clearDisplay()
        firstNum = null
        nextNum = null
        operator = null
        solution = null
        displayArray = []

    })
}




//TODO Exception Handling
//Reset when pressing a number after solution is displayed
//firstNum then equals should keep same value instead of appending
//Clicking operator after solution is displayed should carry solution as firstNum and capture nextNum
//Error message when dividing by zero
//Round decimals to prevent overflow of UI


let displayArray = []
let firstNum
let nextNum
let operator
let solution

if(!firstNum) getFirstNumber()
if(firstNum) getNextNumber();
calculate();
equals();
clear();




