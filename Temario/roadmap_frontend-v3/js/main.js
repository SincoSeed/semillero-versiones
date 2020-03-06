
var tarjetas = document.querySelectorAll('.tarjeta')
tarjetas.forEach(element => element.addEventListener('click', selecionarMenu));
var opcion;
function selecionarMenu() {
     opcion = this.classList[1];
    //console.log(opcion);
    localStorage.setItem('key',opcion);
    
    window.location.assign('pages/Pprincipal.html');
}

const colapse = document.querySelectorAll('.colapse');
const desplegar = document.querySelectorAll('.ltbuttom');
mostrar(colapse);
mostrar(desplegar);
function mostrar(record) {
    for (let i = 0; i < record.length; i++) {
        record[i].onclick = function () {
            //console.log(record[i]);
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('ver');
        }
    }
}