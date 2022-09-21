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

buttonArea = document.querySelector('.calculator-buttons')
displayArea = document.querySelector('.display')
numberButtons = buttonArea.querySelectorAll('.number-button')
calculationButtons = buttonArea.querySelectorAll('.calculation-button')
equalsButton = buttonArea.querySelector('.equals-button')
clearButton = buttonArea.querySelector('.clear-button')


let displayArray = []
let num1
let solution

function getNumber (e) {
    numberButtons.forEach(button => button.addEventListener('click', (e) =>{


        buttonPress = document.createElement('div')
        buttonPress.classList.add('number-display')
        buttonPress.textContent = e.srcElement.innerText;    
        displayArea.appendChild(buttonPress)
        displayArray.push(buttonPress.textContent)
        num1 = parseInt(displayArray.join(''))
        
    }))
}

function equals (e) {

    equalsButton.addEventListener('click', (e) => {

        displayValues = document.querySelectorAll('.number-display')
        displayValues.forEach(value => displayArea.removeChild(value))
        
        solution = operate(num1, '+', num1)
        buttonPress = document.createElement('div')
        buttonPress.classList.add('number-display')
        buttonPress.textContent = solution
        displayArea.appendChild(buttonPress)
    
    })
}


function clear (e) {
    clearButton.addEventListener('click', (e) => {
        displayValues = document.querySelectorAll('.number-display')
        displayValues.forEach(value => displayArea.removeChild(value))
        num1 = null
        solution = null
        displayArray = []

    })
}

getNumber();
equals();
clear();



