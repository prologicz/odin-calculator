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
let inputValue
numberButtons.forEach(button => button.addEventListener('click', (e) =>{

    pressedButton = e.srcElement.innerText
    numberButtonPress = document.createElement('div')
    numberButtonPress.id = 'number-display'
    numberButtonPress.textContent = e.srcElement.innerText;    
    displayArea.appendChild(numberButtonPress)
    displayArray.push(pressedButton)
    inputValue = parseInt(displayArray.join(''))
    console.log(inputValue)
}))

