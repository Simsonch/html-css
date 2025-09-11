'use strict';

function calc (e) {
    let num1 = document.getElementById('num1')?.value;
    let num2 = document.getElementById('num2')?.value;
    let result = document.getElementById('result');

    if (e.target.name === 'sum'){
        result.innerHTML = Number(num1) + Number(num2);
    };
    if (e.target.name === 'sub'){
        result.innerHTML = Number(num1) - Number(num2);
    };
    if (e.target.name === 'mul'){
        result.innerHTML = Number(num1) * Number(num2);
    };
    if (e.target.name === 'div'){
        result.innerHTML = Number(num1) / Number(num2);
    };
} 
