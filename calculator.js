document.querySelector('#key').addEventListener('click', (e) => {
    const keyPad = e.target.innerText;
    console.log(keyPad);
    let display = document.querySelector('#display');
    if ((keyPad == '0') || (keyPad == '1') || (keyPad == '2') || (keyPad == '3') || (keyPad == '5') || (keyPad == '6') || (keyPad == '7') || (keyPad == '8') || (keyPad == '9') || (keyPad == '4') || (keyPad == '.')) {
        const number = (keyPad);
        display.value += number;
    } else if ((keyPad == '+') || (keyPad == '-') || (keyPad == '*') || (keyPad == '/') || (keyPad == '%') || (keyPad == '+/-')) {
        display.value += keyPad;
    } else if (keyPad == '=') {
        calc = display.value;
        console.log(calc);

        calculate(calc);
    } else if ((keyPad == 'C')) {
        display.value = '';
    }

})

function calculate(eqn) {
    let display = document.querySelector('#display');
    display.value = eval(eqn);
    console.log(display.value);
}