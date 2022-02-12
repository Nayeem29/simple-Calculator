function clearScreen() {
    document.querySelector('.number').innerText = '';
}

function display(value) {
    // console.log(value);
    return document.querySelector('.display-num').innerText += value;
}

function calculate() {
    let calculatedNumber = document.querySelector('.display-num').innerText;
    let specialChar = '';
    let digit = 0;
    for (let num of calculatedNumber) {
        console.log(num);
        if ((num = '*') || (num = '/') || (num = '+') || (num = '-')) {
            specialChar = num.toString();

        } else if (typeof num == 'number') {
            digit = parseFloat(num);
            // console.log(digit);
        }
    }
    console.log(specialChar);

}

let operations = document.querySelectorAll('.operation');
let number = document.querySelectorAll('.number');
let equal = document.querySelector('.equal');
let point = document.querySelector('.point');
let equation = 0;

number.forEach(button => {
    button.addEventListener('click', () => {
        display(button.innerText);
    })
})

operations.forEach(button => {
    button.addEventListener('click', () => {
        display(button.innerText);
    })
})

equal.addEventListener('click', () => {
    calculate();
})