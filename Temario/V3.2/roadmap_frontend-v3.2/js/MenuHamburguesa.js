const menuMobile = document.querySelector('#complemento .menuMobile');
const Menu = document.querySelector('.menu');
menuMobile.addEventListener('click', (e)=>{
    Menu.classList.toggle('visible');
    console.log(Menu.classList)
})
