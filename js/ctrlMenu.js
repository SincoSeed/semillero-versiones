// function start() {
    var menuMobile = document.querySelector('.menuMobile');
// }

menuMobile.addEventListener('click', () => {
    var menus = document.querySelectorAll('.itemMenus');
    console.log(menus[0]);
    if (menus[0].classList.contains('itemMenus')) {
        debugger
        console.log(menus[0].classList.contains('itemMenus'));
        for (let i = 0; i < menus.length; i++) {
            menus[i].classList.add('itemMenusVisible');
            console.log(menus[i]);
            menus[i].classList.remove('itemMenus');
            console.log(menus[i]);
        }
        // fnVisibleMenu(menus);
        //  menu.classList.remove('visible');
    }
    else {
        for (let i = 0; i < menus.length; i++) {
            menus[i].classList.add('itemMenus');
            menus[i].classList.remove('itemMenusVisible');
        }

        // fnVisibleMenu(menus);
        //  menu.classList.add('visible');
    }
    // menu.classList.toggle('visible');
})


// window.addEventListener('load', start);
