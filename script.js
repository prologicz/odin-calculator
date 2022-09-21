console.log('Hello World')

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



const buttonArea = document.querySelector('.calculator-buttons')
const displayArea = document.querySelector('.display')
const numberButtons = buttonArea.querySelectorAll('.number-button')
const calculationButtons = buttonArea.querySelectorAll('.calculation-button')
const equalsButton = buttonArea.querySelector('.equals-button')
const clearButton = buttonArea.querySelector('.clear-button')

function clearDisplay() {

    displayValues = document.querySelectorAll('.number-display')
    displayValues.forEach(value => displayArea.removeChild(value))


}

function getFirstNumber (e) {
    
    numberButtons.forEach(button => button.addEventListener('click', (e) =>{

        console.log(`First Number + ${firstNum} + ${e}`)
        buttonPress = document.createElement('div')
        buttonPress.classList.add('number-display')
        buttonPress.textContent = e.srcElement.innerText;    
        displayArea.appendChild(buttonPress)
        displayArray.push(buttonPress.textContent)
        
    }))
}

function getNextNumber (e) {
    numberButtons.forEach(button => button.addEventListener('click', (e) =>{

        console.log(`Next Number + ${firstNum} + ${e}`)
        buttonPress = document.createElement('div')
        buttonPress.classList.add('number-display')
        buttonPress.textContent = e.srcElement.innerText;    
        displayArea.appendChild(buttonPress)
        displayArray.push(buttonPress.textContent)

        
    }))
}

function equals (e) {

    equalsButton.addEventListener('click', (e) => {
        nextNum = parseInt(displayArray.join(''))

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




let displayArray = []
let firstNum
let nextNum
let operator
let solution

if(!firstNum) getFirstNumber()
if(firstNum) getNextNumber();
equals();
clear();

calculationButtons.forEach(button => button.addEventListener ('click', (e) => {
    firstNum = parseInt(displayArray.join(''))
    operator = e.srcElement.textContent
    clearDisplay();
    displayArray = []


}))


