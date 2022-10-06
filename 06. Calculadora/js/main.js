import * as operacoes from './services/operacoes.js';
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const inputValor1 = document.getElementById("number1");
inputValor1.addEventListener('change', handleInputValor1Change);

let valor1;
function handleInputValor1Change(event) {
    event.target.classList.remove("input-error");
    valor1 = event.target.value.trim();
    console.log(valor1);
}

const inputValor2 = document.getElementById("number2");
inputValor2.addEventListener('change', handleInputValor2Change);

let valor2;
function handleInputValor2Change(event) {
    event.target.classList.remove("input-error");
    valor2 = event.target.value.trim();
    console.log(valor2);
}

const limpa = document.getElementById("btn-clear");
limpa.addEventListener('click', handleInputClear);

function handleInputClear(event) {
    inputValor1.classList.remove("input-error");
    inputValor1.value = "";
    inputValor2.classList.remove("input-error");
    inputValor2.value = "";
    resultadoOperacao.innerHTML = 0;
}

const resultado = document.getElementById("result-box");
const resultadoOperacao = document.createElement("p");
resultadoOperacao.innerHTML = 0;
resultado.appendChild(resultadoOperacao);

const somar = document.getElementById("btn-plus");
somar.addEventListener('click', handleInputSoma);

function handleInputSoma(event) {
    event.preventDefault;
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
        resultadoOperacao.innerHTML = operacoes.somar(valor1,valor2);
    }
};

const multiplicar = document.getElementById("btn-times");
multiplicar.addEventListener('click', handleInputX);

function handleInputX(event) {
    event.preventDefault;
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
        resultadoOperacao.innerHTML = operacoes.multiplicar(valor1,valor2);
    }
};

// function handleInputClique(event) {
//     event.preventDefault;
//     if (isNumber(valor1)) {
//         valor1 = Number (valor1);
        
//     } else {
//         inputValor1.classList.add("input-error");
//     }

//     if (isNumber(valor2)) {
//         valor2 = Number (valor2);
        
//     } else {
//         inputValor2.classList.add("input-error");
//     }

//     if (isNumber(valor1) && isNumber(valor2)) {
//         let resultadoF = 0;
//         if (somar) {
//             resultadoF = operacoes.somar(valor1,valor2);
//             resultadoOperacao.innerHTML += resultadoF;
//         } else {
//             resultadoF = "";
//             resultadoF = operacoes.multiplicar(valor1,valor2);
//             resultadoOperacao.innerHTML += resultadoF;
//         }
//     }
// };



