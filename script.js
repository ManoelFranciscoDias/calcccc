function clq1() {
    alert(`Você clicou no botão 1`)
}

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", clq2);

function clq2() {
    alert(`Você clicou no botão 2`)
}

let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");


//SOMA

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value));
})

function soma(a, b) {
    resultado.textContent = (a + b);
}

//SUBTRAÇÃO

let btSubtracao = document.querySelector("#btSubtração");
btSubtracao.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value));
})

function soma(a, b) {
    resultado.textContent = (a - b)
}

//MULTIPLICAÇÃO

let btMultiplicacao = document.querySelector("#btMultiplicação");
btMultiplicacao.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value));
})

function soma(a, b) {
    resultado.textContent = (a * b)
}

//DIVISÃO


let selectedIdioma = document.querySelector("#idioma");
selectedIdioma.addEventListener("change", function () {
    if (this.value == "br") {
        btSoma.value == "Somar"
    }

    else if (this.value == "es") {
        btSoma.value = "Sumar"
    }
})