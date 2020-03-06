const botones = document.querySelector('.botones');
const btnIniciar = document.querySelector('#iniciar');
const btnCorrecto = document.querySelector('#btncorrecto');
const btnPasar = document.querySelector('#btnpasar');
const btnNewWord = document.querySelector('#btnNewWord');
const div_palabra = document.getElementById('palabra');
const cronometo = document.getElementById('temp');
const titulo = document.getElementsByClassName('titulo')[0];
const btnrefrescar = document.querySelector('#refrescar') 
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

function reproducirAudio(nombre){
    const audio = new Audio(`../sounds/${nombre}`);
    audio.play();
}
function iniciar() {
    mostrarInicio();
    if (puntaje.cantidad < 10){ 
        temporizador = setInterval(function () {
            reproducirAudio("wrong2.mp3");
            puntaje.incorrecto++;
            palabrasIncorrectas.push(palabraMostrar);
            ciclo();
        }, 30000);
    }
    ciclo();
}

function mostrarInicio() { 
    cronometo.classList.remove('visible'); 
    botones.classList.add('visible');
    btnIniciar.classList.remove('visible');
    btnNewWord.classList.remove('visible');
    div_palabra.classList.add('visible');
    titulo.classList.remove('visible')
}

function randomInFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ciclo() { 
    if (puntaje.cantidad < 10) { 
        puntaje.cantidad++;
        reproducirAudio('newWord.mp3');
        tempo(30); 
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

function mostrarPalabra() {
    var numero = randomInFromInterval(1, palabras.length);
    let palabrasLocal = JSON.parse(localStorage.getItem("varPalabras"));
    palabra = palabrasLocal.splice(numero - 1, 1).toString();
    palabraMostrar = palabra;
    div_palabra.innerHTML = palabra;
}

function pasar(callBack) {
    puntaje.incorrecto++;
    clearInterval(temporizador);
    clearInterval(cronotemp);
    palabrasIncorrectas.push(palabraMostrar);
    reproducirAudio('wrong2.mp3');
    setTimeout(()=>{
        iniciar();
        callBack();
    }, 800)
}

function correcto(callBack) {
    puntaje.correcto++;
    clearInterval(temporizador);
    clearInterval(cronotemp);
    reproducirAudio('correcto.mp3');
    iniciar();
    callBack();
}

function mostrarResultado() { 
    clearInterval(temporizador);
    clearInterval(cronotemp);
    cronometo.classList.remove('visible');
    botones.classList.remove('visible');
    btnNewWord.classList.add('visible');
    btnrefrescar.classList.add('visible');
    document.querySelector('#incorrectas').classList.add('visible');
    var listaIncorrectas = document.querySelector('#listaincorrectas')
    div_palabra.classList.remove('visible');
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
}

function loadLocal() { 
    let temp = JSON.parse(localStorage.getItem('varPalabras'));
    if (temp != null) { 
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


function clickCorrectoyPasar(fn){
    return () => {
        btnCorrecto.setAttribute('disabled','disabled');
        btnPasar.setAttribute('disabled','disabled');
        fn( ()=>{
            btnCorrecto.removeAttribute('disabled');
            btnPasar.removeAttribute('disabled');
        })
    }
}


function soundstart() { 
    reproducirAudio('inicio.wav');
    setTimeout(iniciar, 4000);
}

function tempo(sec) { 
    cronotemp = setInterval(() => { 
        (sec < 0) ? clearInterval() : countDown(sec);
        sec--;
    }, 1000);
}

function countDown(sec) { 
    cronometo.innerHTML = sec;
    if (sec == 30 || sec > 20) { 
        cronometo.style.color = 'darkblue';
    }
    if(sec < 20 && sec >=10){
        cronometo.style.color ='orange'
    }
    if (sec < 10) {
        cronometo.style.color = 'red';
    }
}

btnNewWord.addEventListener('click', addPalabra);
window.addEventListener('load', loadLocal);
btnIniciar.addEventListener('click', soundstart,{ once: true});
btnCorrecto.addEventListener('click', clickCorrectoyPasar(correcto));
btnPasar.addEventListener('click', clickCorrectoyPasar(pasar));

btnrefrescar.addEventListener('click', () => {
    reproducirAudio('refresh.mp3');
    setTimeout(() => window.location.href = window.location.href, 500);
});

(function(n){
    const ul = document.querySelector('.box-area');
    ul.innerHTML = "";
    for (let index = 0; index < n; index++) {
        const li = document.createElement('li');
        ul.appendChild(li);
    }
})(18);


