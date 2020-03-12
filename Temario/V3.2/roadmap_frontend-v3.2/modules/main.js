const myApp = s5.initialize();

myApp.require(['services', 'menus/main'], (servicios, menus) => {
    const type = localStorage.getItem('key').toLowerCase(),
        urilocal = '../recursosJson/',
        uriWeb = 'http://golden/Semillero/Temario/recursosJson/',
        menuTypes = {
            html: 1,
            css: 2,
            js: 3,
            add: 4
        };
        // tarjeta= menuTypes[type];
    // const cargar = (tarjeta) => { }

    // if (localStorage.getItem('basededatos') === '1') {
    //     menus.iniciar(menuTypes[type]);

    // } else {
        fetch(`${urilocal}${type}/summaries.json`).then(blob => blob.json()).then(temas => {
            fetch(`${urilocal}${type}/menus.json`).then(blob => blob.json()).then(data => {
                let menusTotales = 0,
                    menusRegistrados = 0;
                const fnContar = (menus) => {
                    menusTotales += menus.length;
                    menus.forEach(menu => {
                        if (menu.sub) {
                            fnContar(menu.sub)
                        }
                    });
                };

                fnContar(data);

                const fnValidarCarga = () => {
                    if (menusTotales === menusRegistrados) {
                        localStorage.setItem('basededatos', 1);
                        menus.iniciar(menuTypes[type]);
                    }
                };

                const fnRegistrarMenu = menu => {
                    servicios.registerMenu({
                        name: menu.name,
                        type: menuTypes[menu.type],
                        idfather: !menu.idfather ? null : menu.idfather
                    },
                        ({ insertId }) => {
                            if (menu.sub) {
                                menu.sub.forEach(m => {
                                    m.idfather = insertId;
                                    fnRegistrarMenu(m);
                                });
                            }
                            menu.id = insertId;
                            fnRegistrarTema(menu);
                            menusRegistrados++;
                            fnValidarCarga();
                        });
                }
                data.forEach(m => fnRegistrarMenu(m));
            });


            const fnRegistrarTema = (menu) => {
                const element = temas.find(tema => tema.name === menu.name);
                if (element) {
                    servicios.registerTheme({
                        name: element.name,
                        idmenu: menu.id,
                        principal: element.principal,
                        examples: element.examples,
                        conclusions: element.conclusions,
                        list: element.list
                    }, respuesta => console.log(respuesta));
                }
            }

        });

    // }
});

