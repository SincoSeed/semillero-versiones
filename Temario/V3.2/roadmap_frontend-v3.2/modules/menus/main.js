myApp.define('menus/main', ['services', 'themes/themes.main'], function (services, themes) {

    const jerarquizar = (menuPadre, menusHijos) => {
        menuPadre.submenus = menusHijos.filter(menuHijo => menuHijo.idfather === menuPadre.id);
        menuPadre.submenus.forEach(menu => {
            if (menusHijos.some(menuHijo => menuHijo.idfather === menu.id)) {
                jerarquizar(menu, menusHijos.filter(menuHijo => menuHijo.idfather === menu.id));
            }
        });
    }

    const iniciar = (type) => {
        services.getMenus(type, datos => {

            const menus = datos.filter(dato => !dato.idfather).map(menuPadre => {
                //debugger
                jerarquizar(menuPadre, datos.filter(dato => dato.idfather));
                return menuPadre;
            });
            const nav = document.querySelector('.listaMenu');
            const ul = document.createElement('ul');
            ul.classList.add('wrapper');
            nav.appendChild(ul);
            fnPintarMenu(ul, menus);
        });
    }

    const fnPintarMenu = (ul, menus) => {
        menus.forEach(menu => {
            var a = document.createElement("a");
            var li = document.createElement("li");
            li.dataset.idmenu = menu.id;
            li.classList.add("item");
            a.textContent = `${menu.name}  `;
            li.appendChild(a);
            ul.appendChild(li);
            if (menu.submenus && menu.submenus.length > 0) {
                const img = document.createElement('img');
                const ulsub = document.createElement('ul');
                img.setAttribute('src', '../images/iconos/arrow.svg');
                img.setAttribute('class', 'arrowMenu');
                a.appendChild(img);
                ulsub.classList.add('sublist');
                fnPintarMenu(ulsub, menu.submenus);
                li.classList.add("subtemaPadre");
                li.appendChild(ulsub);
                li.addEventListener('click', function () {
                    this.classList.toggle('active');
                    this.querySelector('ul').classList.toggle('ver');
                    this.querySelector('img').classList.toggle('ver');
                })
            }
            li.addEventListener('click', function (e) {
                if (!this.classList[1]) {
                    document.querySelector('.menu').classList.toggle('visible');
                    console.log(document.querySelector('.menu').classList)
                }
                e.stopPropagation();
                themes.iniciar(this.dataset.idmenu);
            })
        })
    }
    return {
        iniciar
    }
});
