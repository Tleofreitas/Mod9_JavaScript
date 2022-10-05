import * as soma from './services/somar.js'
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const inputValor1 = document.getElementById("number1");
inputValor1.addEventListener('change', handleInputValor1Change);

let valor1;
function handleInputValor1Change(event) {
    event.target.classList.remove("input-error");
    valor1 = event.target.value;
    console.log(valor1);
}

const inputValor2 = document.getElementById("number2");
inputValor2.addEventListener('change', handleInputValor2Change);

let valor2;
function handleInputValor2Change(event) {
    event.target.classList.remove("input-error");
    valor2 = event.target.value;
    console.log(valor2);
}

const somar = document.getElementById("btn-plus");
somar.addEventListener('click', handleInputSomarClique);

const resultadoOperacao = document.getElementById("result-box").innerHTML; // 0

function handleInputSomarClique(event) {
    if (isNumber(valor1)) {
        valor1 = Number (valor1);
        
    } else {
        inputValor1.classList.add("input-error");
    }

    if (isNumber(valor2)) {
        valor2 = Number (valor2);
        
    } else {
        inputValor2.classList.add("input-error");
    }

    if (isNumber(valor1) && isNumber(valor2)) {
        // resultadoOperacao.innerHTML=5;
    }
};

