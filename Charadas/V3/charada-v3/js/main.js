var palabras = [
    'root', 'push', 'innerHTML', 'localstorage.setItem', 'form.reset()', 'Grid',
    'Flexbox', 'Templates', 'Columns', 'Rows', 'nowrap', 'transform', 'prototype', 'browser',
    'stringfy', 'svg', 'parse', 'interpolacion', 'unshift', 'join', 'push', 'pop', 'every',
    'find', 'fill', 'diagramas de flujo', 'polimorfismo', 'encapsulación', 'head', 'herencia',
    'v8', 'dataset', 'mockup', 'foreach', 'semantica', 'vanillajs', 'arrow function', 'tcp/ip',
    'tdd', 'div', ':root', 'findIndex', 'i', 'arguments', 'livescript', 'mocha', 'iterador', 'cache',
    'localstorage', 'session storage', 'websql', 'width', 'height', 'umd', 'pwa', 'amd', 'border',
    'collapse', 'fixed', 'relative', 'rm', 'erm', 'acoplamiento', 'ddd', 'fr', 'callback',
    'setproperty', 'sintaxis', 'appendChild', 'API', 'mouseover', 'blur', 'onclick', 'keypress',
    'keyup', 'keydown', 'toggle', 'regex', 'node', 'nodelist', 'HTMLelement', 'parentNode',
    'Métodos', 'type=text', 'type=password', 'checkbox', 'dropdownlist', 'type=range', 'type=number',
    'cookies', 'form', 'stoppropagation', 'preventDefault', 'submit', 'post', 'get', 'request',
    'checkvalidity', 'switch', 'boxsizing', 'break', 'for', 'font-family', 'font-size', 'recursividad',
    'functional', 'paradigma', 'patron', 'scope', 'modulo', '%', 'dependencia', 'html5', '++',
    '"+="', '"-="', '"*="', '"/="', 'Jest', 'slice', 'splice', '===', 'concat', 'publish', 'boolish',
    'typeof', 'instanceof', 'objeto literal', 'servidor', 'IIS', 'web application', 'web page', 'spam',
    'color', 'tag', 'innerHTML', 'innerText', 'Reverse', 'sort', 'some', 'reduceRight', 'if', 'else',
    'responsive', 'design', 'it', 'debug', 'console', 'toEqual', 'breakpoint', 'endPoint', 'object',
    'promesas', 'fetch', 'then', 'catch', 'try', 'finally', '{}', '()', '.', '=', '[]', '//', '||',
    '&&', 'and', 'or', '~', '../', './', '${}', 'replace', 'ig', 'Programación', 'undefined', 'null',
    'NaN', 'infinity', 'multiparadigma', 'stackoverflow', 'codesandbox', 'msdn', 'mozilla', 'internet explorer',
    'chromium', 'JSON', 'xml', 'xmlHTTPrequest', 'XHTML', 'S5.JS', 'Git push', 'pull request', 'setItem',
    'removeItem', 'clear', 'transaction', 'setInterval', 'setTimeOut', 'ClearTimeOut', 'Referencia o Valor',
    'align-items', 'Justify-Content', 'body', 'margin', 'ViewPort', '200', '404', '500', 'syntax error',
    'ubuntu', 'linux', 'windows 10', 'max', 'min', 'edge', 'value', 'content', 'keycode', 'tabkey',
    'controlkey', 'altkey', 'class', 'propiedad', '!important', 'z-index', 'this', '</b>', 'commonJS',
    'nodeJS', 'asp', 'php', 'jdk', 'sdk', 'ide', 'isp', 'button', 'title', 'overflow', 'metaTag',
    'Internet', 'autoplay', 'red', 'RJ45', 'currentTime', 'load', 'loop', 'muted', 'application',
    'pause', 'paused', 'play', 'src', 'href', 'target', 'visibility', 'hidden', 'px', 'focus',
    'getClientRects', 'main', 'void', 'localhost', 'ip', 'location', 'setAttribute', 'before',
    'after', 'removeAttribute', 'getAttribute', 'id', 'name', 'for attribute(HTML)', 'querySelectorALL',
    'JavaScript ', 'HiperTexto', 'HiperMedia', 'Concurrencia', 'Asincrono', 'Sincrono', 'CSS',
    'Link', 'Script', 'querySelector', 'document', 'window', 'addEventListener', 'Array', 'map',
    'filter', 'reduce', 'Variable', 'Heap', 'var', 'let', 'cons', 'string', 'Number',
    'Boolean', 'Array', 'Object', 'Operador ternario', 'Evento', 'Etiqueta', 'W3C', 'ECMA',
    'Lenguaje', 'Dominio', 'Hosting', 'HTTP', 'FTP', 'GIT', 'Repositorio', 'Front-End', 'Servidor',
    'Recurso', 'TCP/IP', 'IP', 'DOM', 'Pseudoselector', 'Enlaces', 'ClassList', 'ClassName', ':',
    ';', '`', 'charset', 'UTF8', 'tag (attribute)', 'getElementById', '<', '>', '> (css)', 'not (selector)',
    'h1', 'hover', 'cursor:pointer', 'ftp', 'smtp', 'protocolo', 'outline', 'border-radius', '* (operador)',
    '* (selector)', 'style', '<br>', '<hr>', 'webassembly', 'base de datos', 'padding',
    'sql', 'mysql', 'toString', 'SqlLite', 'destructuring', 'iframe', 'Date', 'office', 'outlock',
    'teams', 'daily', 'scrum', 'obj["prop"]', 'funciones puras', 'lambda', 'bootstrap', 'preprocesador',
    'sass', 'less', 'foundation', 'apache', 'onChange', 'required', 'form',
    'document.querySelector([name="item"])', 'alert', 'interpolación', '<li>', 'event.preventDefault()',
    'join', 'localstorage', 'key value', 'arrow function', 'map', 'snake_case', 'camelCase', 'JSON.parse',
    'JSON.stringfy', 'JSON', 'const', 'algoritmo', 'CTRL + F5', '"+" (selector CSS)', '[object Object]',
    'data-', 'parseInt', '!', '() ? :', 'checked', 'catch()', '<kdb>', 'transitionent', 'onblur', 'spread operator',
];
var palabrasIncorrectas = [];
var palabraMostrar = '';
const btnIniciar = document.querySelector('#iniciar');
const btnCorrecto = document.querySelector('#btncorrecto');
const btnPasar = document.querySelector('#btnpasar');
var div_palabra = document.getElementById('palabra');
var cronometo;
var puntaje;
var temporizador;
var puntaje = {
    correcto: 0,
    incorrecto: 0,
    cantidad: 0
}

function iniciar() {

    mostrarInicio();
    if (puntaje.cantidad < 10) {
        temporizador = setInterval(function () {
            var wrong2 = new Audio();
            wrong2.src = "sounds/wrong2.mp3";
            wrong2.play();
            puntaje.incorrecto++;
            palabrasIncorrectas.push(palabraMostrar);
            ciclo();
        }, 10000);
    }
    ciclo();
}

function mostrarInicio() {

    document.querySelector('.botones').classList.add('visible');
    document.querySelector('#iniciar').classList.remove('visible');
    document.querySelector('#btnNewWord').classList.remove('visible');
    div_palabra.classList.add('visible');
}

function randomInFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ciclo() {
    if (puntaje.cantidad < 10) {
        puntaje.cantidad++;
        var newword = new Audio();
        newword.src = 'sounds/newWord.mp3'
        newword.play();
        setTimeout(mostrarPalabra,800)
    } else {
        clearInterval(temporizador);
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

function pasar() {
    puntaje.incorrecto++;
    clearInterval(temporizador);
    palabrasIncorrectas.push(palabraMostrar);
    var wrong2 = new Audio();
    wrong2.src = "sounds/wrong2.mp3";
    wrong2.play();
    setTimeout(iniciar,800)
}

function correcto() {
    puntaje.correcto++;
    clearInterval(temporizador);
    var voice1 = new Audio();
    voice1.src = "sounds/voice1.mp3";
    voice1.play()
    iniciar()
}

function mostrarResultado() {
    clearInterval(temporizador);
    document.querySelector('.botones').classList.remove('visible');
    document.querySelector('#btnNewWord').classList.add('visible');
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
        localStorage.setItem('varPalabras', JSON.stringify(palabras));
    } else {
        localStorage.setItem('varPalabras', JSON.stringify(palabras));
    }
}

function addPalabra() {
    const nuevaPalabra = prompt('Ingrese nueva palabra');
    if (nuevaPalabra == '') {
        alert('no puede introducir valores vacío');
        addPalabra();
    } else if (nuevaPalabra !== null) {
        let palabrasLocal = JSON.parse(localStorage.getItem("varPalabras"));
        console.log(`find : ${palabrasLocal.find(item => item == nuevaPalabra)}`);
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


const btnNewWord = document.querySelector('#btnNewWord')
btnNewWord.addEventListener('click', addPalabra);
window.addEventListener('load', loadLocal);
btnIniciar.addEventListener('click', soundstart);
btnCorrecto.addEventListener('click', correcto);
btnPasar.addEventListener('click', pasar);


const btnrefrescar = document.querySelector('#refrescar')

btnrefrescar.addEventListener('click', () => {
    var refresh = new Audio();
    refresh.src = "sounds/refresh.mp3";
    refresh.play();
    setTimeout(() => window.location.href = window.location.href, 500);
});
function soundstart(){
    var inicio = new Audio();
    inicio.src = "sounds/inicio.wav";
    inicio.play();
    setTimeout(iniciar,4000);
}


// effectos de sonido



