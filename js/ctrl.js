const menuMobile = document.querySelector('.menuMobile');
const menu = document.querySelector('.menu');
menuMobile.addEventListener('click', (e) => {
    // menu.classList.remove('visible');
    // console.log(menu);

    if (menu.classList.contains('menu')) {
        console.log(menu);
        menu.classList.remove('menu');
        console.log(menu);
        e.preventDefault();
    }else{
        menu.classList.add('menu');
        e.preventDefault();
    }


})