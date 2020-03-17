const btnInstrucciones = document.querySelector('.instrucciones');
const instrucciones = document.querySelector('.instructivo');
const juego = document.querySelector('.contenedor');
const tituloP = instrucciones.querySelector('.titulo1');
const instuccionesJuego = instrucciones.querySelector('.reglas');
const controles = instrucciones.querySelector('.controladores');
const conceptos = instrucciones.querySelector('.conceptos');
const btncerrar = instrucciones.querySelector('.cerrar');

function mostrarInstrucciones() {
    mostrarOcultar();
    var urilocal = "../adicionales/"
    var uriweb = "adicionales/"
    fetch(`${uriweb}instructivo.json`)
        .then(blob => blob.json())
        .then(data => {
            instuccionesJuego.innerHTML = "";
            imprimirInstrucciones(data);
        });

}

function imprimirInstrucciones(data) {
    var ul = document.createElement('ul');
    data.forEach(Element => {
        if (Element.title !== "" && Element.title !== null && Element.title !== undefined) {
            var tRegla = document.createElement('h4');
            tRegla.setAttribute('class', 'subtitulo');
            tRegla.textContent = Element.title;
            instuccionesJuego.appendChild(tRegla);
            imprimirInstrucciones(Element.reglas);
        } else {
            var li = document.createElement('li');
            li.classList.add('text');
            li.textContent = Element
            ul.appendChild(li);
        }
        instuccionesJuego.appendChild(ul);
    });
}
function mostrarOcultar() {
    juego.classList.toggle('visible');
    instrucciones.classList.toggle('visible');
    tituloP.classList.toggle('visible');
    instuccionesJuego.classList.toggle('visible');
    controles.classList.toggle('visible');
    conceptos.classList.toggle('visible');
}
btnInstrucciones.addEventListener('click', mostrarInstrucciones);
btncerrar.addEventListener('click', mostrarOcultar);
