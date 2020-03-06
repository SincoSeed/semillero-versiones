const botones = document.querySelector('.botones');
const btnIniciar = document.querySelector('#iniciar');
const btnCorrecto = document.querySelector('#btncorrecto');
const btnPasar = document.querySelector('#btnpasar');
const btnNewWord = document.querySelector('.contenedor > button#btnNewWord');
const divPalabra = document.querySelector('div:nth-child(2) div#palabra');
const cronometo = document.getElementById('temp');
const titulo = document.getElementsByClassName('titulo')[0];
const btnrefrescar = document.querySelector('#refrescar');
var palabrasIncorrectas = [];
var palabraMostrar = '';
var cronotemp;
var puntaje;
var temporizador;
var puntaje = {
    correcto: 0,
    incorrecto: 0,
    cantidad: 0
}

function reproducirAudio(nombre) {
    const audio = new Audio(`../sounds/${nombre}`);
    audio.play();
}
//en la linea 37 y 51 usamos setInterval para ejecutar repetidamente una funcion con un espacio de tiempo entre cada ejecución
function iniciar() {
    mostrarInicio();
    if (puntaje.cantidad < 10) {
        temporizador = setInterval(function () {
            reproducirAudio("wrong2.mp3");
            puntaje.incorrecto++;
            palabrasIncorrectas.push(palabraMostrar);
            ciclo();
        }, 31200);
    }
    ciclo();
}
//usamos en la linea 48 un operador ternario porque solo se ejecutara una sentencia en culquiera de las dos opciones 
//del booleano resultante de la validación
//los clearInterval que se encuentan durante toda la ejecución se encuentas en su mayoria dirigidos a las variables cronotemp y temporizador
//temporizador nos maneja el timer de duracion de una palabra, y cronotemp nos controla el tiempo visual de cada palabra


function mostrarInicio() {
    cronometo.classList.remove('visible');
    botones.classList.add('visible');
    btnIniciar.classList.remove('visible');
    btnNewWord.classList.remove('visible');
    divPalabra.classList.add('visible');
    titulo.classList.remove('visible')
}

function randomInFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//en las lineas 78,,92,103,186,211 usamos setTimeout porque a diferencia de el setInterval este nos ejecuta una funcion 
//una unica vez despues de un intervalo de tiempo
function ciclo() {
    if (puntaje.cantidad < 10) {
        puntaje.cantidad++;
        reproducirAudio('newWord.mp3');
        //clearInterval(cronotemp);
        cronometo.classList.add('visible');
        //tempo(30);
        setTimeout(mostrarPalabra, 800)
    } else {
        clearInterval(temporizador);
        //clearInterval(cronotemp);
        mostrarResultado();
    }
}

function pasar() {
    puntaje.incorrecto++;
    clearInterval(temporizador);
    //clearInterval(cronotemp);
    palabrasIncorrectas.push(palabraMostrar);
    reproducirAudio('wrong2.mp3');
    setTimeout(() => {
        iniciar();

    }, 800)
}

function correcto() {
    puntaje.correcto++;
    clearInterval(temporizador);
    //clearInterval(cronotemp);
    reproducirAudio('correcto.mp3');
    setTimeout(() => {
        iniciar();

    }, 800);
}

function mostrarPalabra() {
    var numero = randomInFromInterval(1, palabras.length);
    let palabrasLocal = JSON.parse(localStorage.getItem("varPalabras"));
    palabra = palabrasLocal.splice(numero - 1, 1).toString();
    palabraMostrar = palabra;
    divPalabra.innerHTML = palabra;
}


function mostrarResultado() {
    clearInterval(temporizador);
    //clearInterval(cronotemp);
    cronometo.classList.remove('visible');
    botones.classList.remove('visible');
    btnNewWord.classList.add('visible');
    btnrefrescar.classList.add('visible');
    document.querySelector('#incorrectas').classList.add('visible');
    var listaIncorrectas = document.querySelector('#listaincorrectas')
    divPalabra.classList.remove('visible');
    var puntaje_div = document.getElementById('puntaje');
    puntaje_div.classList.add('visible');
    puntaje_div.innerHTML = `<span class= "correcto"> <b> Correctos :</b>${puntaje.correcto}</span> 
                            <span class= "incorrecto"> <b> Incorrectos :</b>${puntaje.incorrecto}</span>`;
    for (let i = 0; i < palabrasIncorrectas.length; i++) {
        var li = document.createElement('li');
        var texto = document.createTextNode(`${palabrasIncorrectas[i]}`);
        li.setAttribute("class", "listIncorrectas");
        li.appendChild(texto);
        listaIncorrectas.appendChild(li);
    }
    elementos(palabrasIncorrectas)
}
//usamos en la linea 143 el operador !! para sinplificar la validacion temp == null 
function loadLocal() {
    let temp = JSON.parse(localStorage.getItem('varPalabras'));
    if (!!temp) {
        palabras = temp;
    }
    localStorage.setItem('varPalabras', JSON.stringify(palabras));

}

function addPalabra() {
    const nuevaPalabra = prompt('Ingrese nueva palabra');
    if (nuevaPalabra == '') {
        alert('no puede introducir valores vacío');
        addPalabra();
    } else if (nuevaPalabra !== null) {
        let palabrasLocal = JSON.parse(localStorage.getItem("varPalabras"));
        const palabraEncontrada = palabrasLocal.find(item => item == nuevaPalabra);
        if (palabraEncontrada === nuevaPalabra) {
            alert(`La palabra ${nuevaPalabra} ya existe en la lista`)
            addPalabra();
        } else {
            palabrasLocal.push(nuevaPalabra);
            localStorage.setItem('varPalabras', JSON.stringify(palabrasLocal));
            alert('La nueva palabra se agrego satisfactoriamente');
        }
    } else {
        loadLocal();
    }
}

function soundstart() {
    reproducirAudio('inicio.wav');
    setTimeout(iniciar, 4000);
}

btnNewWord.addEventListener('click', addPalabra);
window.addEventListener('load', loadLocal);
btnIniciar.addEventListener('click', soundstart, { once: true });
btnCorrecto.addEventListener('click', correcto);
btnPasar.addEventListener('click', pasar);

btnrefrescar.addEventListener('click', () => {
    reproducirAudio('refresh.mp3');
    setTimeout(() => window.location.href = window.location.href, 500);
});

// ISENRTE CODIGO CRONOMETRO AQUI KATA # 1

// ISERTE CODIGO PARA LOS LI DINAMICOS AQUI KATA # 2

// INSERTE CODIGO PARA EL BUG BOTONES CORRECTO Y PASAR AQUI - KATA#3
