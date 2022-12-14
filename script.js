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
    buttonPress.textContent = e;    
    displayArea.appendChild(buttonPress)
}

function clearError() {

    displayValues = document.querySelectorAll('.error-display')
    displayValues.forEach(value => displayArea.removeChild(value))
    errorFlag = 0
}

function writeError(message) {
    buttonPress = document.createElement('div')
    buttonPress.classList.add('error-display')
    buttonPress.textContent = message
    displayArea.appendChild(buttonPress)
    errorFlag = 1
}

function getFirstNumber (e) {

    
    numberButtons.forEach(button => button.addEventListener('click', (e) =>{

        clearError()

        if (displayArray.length === 0) clearDisplay();
        solution = null


        if(!operator) {
            writeDisplay(e.srcElement.innerText)
            displayArray.push(e.srcElement.innerText)

        }

        if(operator) {
            if (displayArray.length === 0) clearDisplay();
            solution = null
            writeDisplay(e.srcElement.innerText)
            displayArray.push(e.srcElement.innerText) //Storing user entries in array that will be joined to integer once operator is selected in calculate function
        }
        
    }))
}

function calculate (e) {
    calculationButtons.forEach(button => button.addEventListener ('click', (e) => {


        if(!solution && !operator && errorFlag === 0) {
            firstNum = parseInt(displayArray.join('')) // Converting firstNum initially stored as Array into integer
            displayArray = []
            if (!firstNum) {
                clearDisplay()
                firstNum = null
                nextNum = null
                operator = null
                solution = null
                displayArray = []
                writeError("Error:\nFirst number not entered")
            }
        }

        if(!operator && errorFlag === 0) {
            operator = e.srcElement.textContent
            displayArray = []
        }
            
        if(operator && displayArray.length > 0 && errorFlag === 0) {

            nextNum = parseInt(displayArray.join(''))
            solution = operate(firstNum, operator, nextNum)
            clearDisplay();
            setTimeout(() => writeDisplay(solution), 100)
            firstNum = solution
            operator = e.srcElement.textContent
            nextNum = null
            displayArray = []

        }


    
    
    }))
}

function equals (e) {

    equalsButton.addEventListener('click', (e) => {


        if(displayArray.length === 0 && !firstNum && operator && errorFlag === 0) {

            solution = 0
        }


        if(displayArray.length === 0 && firstNum && !operator && errorFlag === 0) {

            solution = firstNum
        }

        if(displayArray.length === 0 && firstNum && operator && errorFlag === 0) {

            writeError("Error:\nSecond number not entered")
        }
        
        if(!operator && displayArray.length > 0 && errorFlag === 0) {
            firstNum = parseInt(displayArray.join(''))
            solution = firstNum
        }

        if (operator && displayArray.length > 0 && errorFlag === 0) {
            nextNum = parseInt(displayArray.join('')) // Converting nextNum initially stored as Array into integer
            solution = operate(firstNum, operator, nextNum)
        }
        clearDisplay();
        setTimeout(() => writeDisplay(solution), 100)
        firstNum = solution
        nextNum = null
        operator = null
        displayArray = []
    
    })
}

function clear (e) {

    clearButton.addEventListener('click', (e) => {
        clearError()
        clearDisplay()
        firstNum = null
        nextNum = null
        operator = null
        solution = null
        displayArray = []

    })
}




//TODO Exception Handling
//Reset when pressing a number after solution is displayed - DONE
//firstNum then equals should keep same value instead of appending - DONE
//Clicking operator after solution is displayed should carry solution as firstNum and capture nextNum - DONE
//Error message when dividing by zero
//Round decimals to prevent overflow of UI
//Keep first number on screen until second number input begins - DONE


let displayArray = []
let firstNum
let nextNum
let operator
let solution
let errorFlag = 0

getFirstNumber()
calculate();
equals();
clear();




