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


function writeDisplay (value, displayArr) {
    displayArr.push(value)
    displayArea = document.querySelector('.result')
    displayArea.textContent = displayArr.join('')
}

function clearDisplay(displayArr) {
    displayArr = []
    displayArea = document.querySelector('.result')
    displayArea.textContent = displayArr.join('')
}

function writeHistory (displayArr, historyArr) {
    historyArr = displayArr
    historyArea = document.querySelector('.history')
    historyArea.textContent = historyArr.join('')
}

function clearHistory(historyArr) {
    historyArr = []
    historyArea = document.querySelector('.history')
    historyArea.textContent = historyArr.join('')
}

function captureNumber (displayArr) {

    displayValue = Number.parseInt(displayArr.join(''))
    return displayValue
}


let displayArr = []
let historyArr = []
let num1
let operator
let num2
let solution

calculatorButtons = document.querySelectorAll('button')
calculatorButtons.forEach(button => button.addEventListener('click', (e) => {


    if(e.srcElement.classList.contains('number-button')) {
        
        if(solution) {
            num1 = null
            num2 = null
            operator = null
            solution = null
            displayArr = []
            historyArr = []
            clearHistory()
        }

        writeDisplay(e.srcElement.textContent, displayArr)
    }

    if (e.srcElement.classList.contains('calculation-button')) {

        if (displayArr.length > 0) {

            if(solution) {
                num1 = solution
                num2 = null
                operator = null
                solution = null
                displayArr = [num1]
                historyArr = []
            }

            operator = e.srcElement.textContent
            writeDisplay (` ${e.srcElement.textContent} `, displayArr)

        }

        else {

            //Fill this in
        }
    }


    if (e.srcElement.classList.contains('equals-button')) {
        console.log(operator)
        if(operator) {
            operatorIndex = displayArr.findIndex((element) => element === ' + ' || element === ' - ' || element === ' x ' || element === ' / ')
            if(!num1) {
                num1 = captureNumber(displayArr.filter((element, index) => index < operatorIndex))
            }
            num2 = captureNumber(displayArr.filter((element, index) => index > operatorIndex))
            solution = operate(num1, operator, num2)
            writeHistory(displayArr, historyArr)
            writeDisplay(`${solution}`, [])
        }
    }
    
    if (e.srcElement.classList.contains('clear-button')) {

        clearDisplay(displayArr)
        clearHistory()
        num1 = null
        num2 = null
        operator = null
        solution = null
        displayArr = []
        historyArr = []
        

    }

}))

