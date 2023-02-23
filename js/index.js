
let Weight = document.querySelector('#Weight');
let length = document.querySelector('#length');

let printRes = document.querySelector('#printRes');
let printBmi = document.querySelector('#printBmi');
let res = document.querySelector('.res');


function calc() {
    let result = (Weight.value/(length.value * length.value));
    printRes.innerHTML = result;

    if(result < 18) {
        printBmi.innerHTML = 'slim';
    }
    else if(result >= 18 && result < 24.9)
    {
        printBmi.innerHTML = 'perfect';

    }
    else if (result >= 25 && result <= 29.9) {
        printBmi.innerHTML = 'excessive';

    }
    else if (result >= 30 && result <= 34.9) {
        printBmi.innerHTML = 'First degree obesity';

    }
    else if (result >= 35 && result <= 39.9) {
        printBmi.innerHTML = 'second degree obesity';

    }
    else if (result > 40) {
        printBmi.innerHTML = 'danger';

    }
}
res.addEventListener('click', calc);
