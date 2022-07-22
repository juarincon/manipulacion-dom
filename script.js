const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario')
const input = document.querySelector('#calculo');
const input1 = document.querySelector('#calculo1');
const btn = document.querySelector('#btncalcular');
const presult= document.querySelector('#result');

form.addEventListener('submit', sumarinputvalues);
function sumarinputvalues (event) {
    event.preventDefault ();
    const sumainput = input.value + input1.value;
    presult.innerText = "resultado: " + sumainput;
}
