import * as servicoSomar from "./services/somar.js"

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

const inputValor1 = document.getElementById("number1");

inputValor1.addEventListener('change', handleInputValor1Change);

let valor1;
function handleInputValor1Change(event) {
    event.target.classList.remove("input-error");
    valor1 = event.target.value;
}
const inputValor2 = document.getElementById("number2");

inputValor2.addEventListener('change', handleInputValor2Change);

let valor2;
function handleInputValor2Change(event) {
    event.target.classList.remove("input-error");
    valor2 = event.target.value;
}

const resultadoOperacao = document.getElementById("result-box").innerHTML;

const somar = document.getElementById("btn-plus");
somar.addEventListener('click', handleInputSomarClique);

function handleInputSomarClique(event) {
    if (isNumber(valor1)) {
        event.target.classList.remove("input-error");
        valor1 = Number (valor1);
        
    } else {
        event.target.classList.add("input-error");
    }

    if (isNumber(valor2)) {
        event.target.classList.remove("input-error");
        valor2 = Number (valor2);
        
    } else {
        event.target.classList.add("input-error");
    }

    if (!isNumber(valor1) || !isNumber(valor2)) {
        resultadoOperacao = 0;
    } else {
        resultadoOperacao = servicoSomar.somar(valor1,valor2);
        console.log(resultadoOperacao)
    }
};

console.log(resOper);

