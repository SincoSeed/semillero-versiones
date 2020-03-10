/* usamos variables cont para los elementos que traemos del hatml porque durante la ejecucion
no se redirecciona el espacio en memoria al que apuntan estas variables lineas 8,9,10,11,12,13,14,15,16

usamos var para las demas variables, porque es posible que durante la ejecucion sean reapuntadas, cosa que con const no nos dejaria lineas 17,18,19,20,21

ademas usamos camelcase para nombres de variables y funciones que sean complementarias*/

//quisimos traer los elementos de diferentes formas para representar lo que hemos aprendido y que hay mas de una forma de usar selectores
// const botones = document.querySelector('div:nth-child(2) > div:nth-child(10)');

const botones = document.querySelector('.botones');
const btnIniciar = document.querySelector('#iniciar');
const btnCorrecto = document.querySelector('#btncorrecto');
const btnPasar = document.querySelector('#btnpasar');
const btnNewWord = document.querySelector('.contenedor > button#btnNewWord');
const divPalabra = document.querySelector('div:nth-child(2) div#palabra');
const cronometo = document.getElementById('temp');
const titulo = document.getElementsByClassName('titulo')[0];
const btnrefrescar = document.querySelector('#refrescar');
const Home = document.querySelector('a');
var palabrasIncorrectas = [];
var palabrasMostradas = JSON.parse(localStorage.getItem('mostradas'));

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
function tempo(sec) {
    cronotemp = setInterval(() => {
        (sec < 0) ? clearInterval() : countDown(sec);
        sec--;
    }, 1000);
}

function mostrarInicio() {
    Home.classList.remove('visible');
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
        clearInterval(cronotemp);
        cronometo.classList.add('visible');
        tempo(30);
        setTimeout(mostrarPalabra, 800)
    } else {
        clearInterval(temporizador);
        clearInterval(cronotemp);
        mostrarResultado();
    }
}

function pasar(callBack) {
    puntaje.incorrecto++;
    clearInterval(temporizador);
    clearInterval(cronotemp);
    palabrasIncorrectas.push(palabraMostrar);
    reproducirAudio('wrong2.mp3');
    setTimeout(() => {
        iniciar();
        callBack();
    }, 800)
}

function correcto(callBack) {
    puntaje.correcto++;
    clearInterval(temporizador);
    clearInterval(cronotemp);
    reproducirAudio('correcto.mp3');
    setTimeout(() => {
        iniciar();
        callBack();
    }, 800);
}

function mostrarPalabra() {
    var numero = randomInFromInterval(1, palabras.length);
    let palabrasLocal = JSON.parse(localStorage.getItem("varPalabras"));
    palabra = palabrasLocal.splice(numero - 1, 1).toString();
    palabraMostrar = palabra;
    if (palabrasMostradas == null) {
        palabrasMostradas = [];
        console.log(palabrasMostradas);
        divPalabra.innerHTML = palabra;
        palabrasMostradas.push(palabra);
        localStorage.setItem('mostradas', JSON.stringify(palabrasMostradas));
    } else {

        if (validarPalabra(palabraMostrar)) {
            console.log(validarPalabra(`esta palabra ${palabraMostrar} ya salió`));
            if (palabrasMostradas.length == palabrasLocal.length) {
                // mostrarResultado();
                puntaje.cantidad = 10;
            }
            mostrarPalabra();
        } else {
            divPalabra.innerHTML = palabra;
            palabrasMostradas.push(palabra);
            localStorage.setItem('mostradas', JSON.stringify(palabrasMostradas));
        }
    }
}

function validarPalabra(palabra) {
    palabrasMostradas = JSON.parse(localStorage.getItem('mostradas'));
    return palabrasMostradas.some(p => p == palabra);
}


function mostrarResultado() {
    clearInterval(temporizador);
    clearInterval(cronotemp);
    Home.classList.toggle('visible');
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

function clickCorrectoyPasar(fn) {
    return () => {
        btnCorrecto.setAttribute('disabled', 'disabled');
        btnPasar.setAttribute('disabled', 'disabled');
        fn(() => {
            btnCorrecto.removeAttribute('disabled');
            btnPasar.removeAttribute('disabled');
        });
    }
}


function soundstart() {
    reproducirAudio('inicio.wav');
    setTimeout(iniciar, 4000);
}

function countDown(sec) {
    cronometo.innerHTML = sec;
    if (sec == 30 || sec > 20) {
        cronometo.style.color = 'lime';
    }
    if (sec < 20 && sec >= 10) {
        cronometo.style.color = 'orange'
    }
    if (sec < 10) {
        cronometo.style.color = 'red';
    }
}

btnNewWord.addEventListener('click', addPalabra);
window.addEventListener('load', loadLocal);
btnIniciar.addEventListener('click', soundstart, { once: true });
btnCorrecto.addEventListener('click', clickCorrectoyPasar(correcto));
btnPasar.addEventListener('click', clickCorrectoyPasar(pasar));

btnrefrescar.addEventListener('click', () => {
    reproducirAudio('refresh.mp3');
    setTimeout(() => window.location.href = window.location.href, 500);
});
// hicimos una funcion auto ejecutada para hacer la creacion de elementos que usaremos en los estilos
function elementos(n) {
    const ul = document.querySelector('.box-area');
    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        const li = document.createElement('li');
        li.classList.add('animacion')
        li.textContent = element
        ul.appendChild(li);
    }
    animation();
}
elementos(Array.from(new Array(19), () => ''));

window.addEventListener('keydown', (e) => {

    console.log(e);
    if (e.ctrlKey && (e.keyCode === 97 || e.keyCode === 65)) {
        e.preventDefault();
        addPalabra();
    }
    else if (e.keyCode === 36) {
        e.preventDefault();
        iniciar();
    }
    else if (e.keyCode === 32) {
        e.preventDefault();
        clickCorrectoyPasar(pasar);
    }
    else if (e.keyCode === 13) {
        e.preventDefault();
            clickCorrectoyPasar(correcto);
    }

})
// (['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);



function animation() {
    const lis = document.querySelectorAll('.animacion');
    lis.forEach(element => {
        var left = randomInFromInterval(1, 95) + '%';
        var size = randomInFromInterval(30, 200) + 'px';
        var delay
        var duracion
        if (element.textContent == '') {
            delay = randomInFromInterval(0, 8) + 's';
            duracion = randomInFromInterval(3, 20) + 's';
            element.style.left = left;
            element.style.width = size;
            element.style.height = size;
            element.style.setProperty('animation-delay', delay);
            element.style.setProperty('animation-duration', duracion);
        } else {
            delay = 0 + 's';
            duracion = randomInFromInterval(7, 20) + 's';
            element.style.left = left;
            element.style.setProperty('animation-delay', delay);
            element.style.setProperty('animation-duration', duracion);
        }
    });
}



