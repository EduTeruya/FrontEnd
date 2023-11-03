'use strict';

const documentReady = () => {
    const calculatorForm = document.getElementById('calculatorForm');

    const calculate = (e) => {
        e.preventDefault();
        const number1 = +document.getElementById('number1').value;
        const operator = document.getElementById('operator').value;
        const number2 = +document.getElementById('number2').value;
        const resultContainer = document.getElementById('resultContainer');

        let result = 0;

        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                if (number2 !== 0) {
                    result = number1 / number2;
                } else {
                    resultContainer.innerText = 'No se puede dividir entre 0';
                    return;
                }
                break;
            default:
                break;
        };
        resultContainer.innerText = result;
    };

    calculatorForm.addEventListener('submit', calculate);
};

document.addEventListener('DOMContentLoaded', documentReady);