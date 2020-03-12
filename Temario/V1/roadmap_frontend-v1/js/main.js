const colapse = document.querySelectorAll('.colapse');
const desplegar = document.querySelectorAll('.ltbuttom');
mostrar(colapse);
mostrar(desplegar);
function mostrar(record) {
    for (let i = 0; i < record.length; i++) {
        record[i].onclick = function () {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('ver');
        }
    }
}