const result = document.getElementById('result')
const elementLength = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')
const clipboard = document.getElementById('clipboard')

const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz'
const numbersChar = '0123456789'
const symbolsChar = "!@#$%^&*(){}[]=<>/,."

const optionObject = {
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
}

clipboard.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const password = result.innerHTML

    if(!password) {
        return;
    }

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert('Password copied to clipboard')
})

generate.addEventListener('click', () => {
    const length = +elementLength.value
    const selectLower = lowercase.checked
    const selectUpper = uppercase.checked
    const selectNumber = numbers.checked
    const selectSymbol = symbols.checked

    result.innerText = generatePassword(selectLower, selectUpper, selectNumber, selectSymbol, length)
})

function generatePassword(lower, upper, number,symbol,length){
    let generatedPassword = ''
    const typesCount = lower+upper+number+symbol
    const typesArray = [{lower}, 
        {upper}, 
        {number}, 
        {symbol}]
        .filter(item => Object.values(item)[0])

        if(typesCount === 0 ) {
            return ''
        }

        for(let i = 0; i < length; i +=typesCount) {
            typesArray.forEach(type => {
                const funcName = Object.keys(type)[0]
                generatedPassword += optionObject[funcName]()
            })
        }

        const finalPassword = generatedPassword.slice(0, length)

        return finalPassword
}

function getRandomLower(){
    return lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)]
}

function getRandomUpper() {
    return uppercaseChar[Math.floor(Math.random() * uppercaseChar.length)]
}

function getRandomNumber() {
    return numbersChar[Math.floor(Math.random() * numbersChar.length)]
}

function getRandomSymbol() {
    return symbolsChar[Math.floor(Math.random() * symbolsChar.length)]
}
