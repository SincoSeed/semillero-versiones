myApp.define('themes/themes.main', ['services'], (services) => {
    let themes = [];

    const container = document.querySelector('#app');
    // prueba();

    const showTheme = (theme) => {
        const title = document.querySelector('.titleC');
        const aPrincipal = document.querySelector('.CPrincipal');
        const aList = document.querySelector('.lista');
        const aExamples = document.querySelector('.ejemplos');
        const aConclusions = document.querySelector('.conclusion');
        theme.forEach(element => {
            title.innerHTML = element.name;
            ContenidoPrincipal(aPrincipal, element.principal);
            (element.list !== "") ? Listas(aList, element.list) : ReinicarElemento(aList);
            (element.examples !== "") ? examplesPrincipal(aExamples, element.examples) : ReinicarElemento(aExamples);
            (element.conclusions !== "") ? conclusionsPrincipal(aConclusions, element.conclusions) : ReinicarElemento(aConclusions);
        });
    };
    //reiniciar elementos al cambiar de pagina
    function ReinicarElemento(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
    //pintado contenido Principal
    function ContenidoPrincipal(element, objeto) {
        ReinicarElemento(element);
        objeto.forEach(item => {
            var p = document.createElement('p');
            p.textContent = item;
            element.appendChild(p);
        });
    }
    // Pintado de Listas
    function Listas(element, objeto) {
        ReinicarElemento(element);
        objeto.forEach(item => {
            const ul = document.createElement('ul');
            const title = document.createElement('h3')
            ul.classList.add('list');
            title.textContent = item.title;
            ul.appendChild(title);
            var items = item.items;
            items.forEach(itemList => {
                const li = document.createElement('li');
                li.textContent = itemList;
                ul.appendChild(li);
            });
            element.appendChild(ul);
        });
    }
    // pintado de ejemplos
    function examplesPrincipal(element, objeto) {
        ReinicarElemento(element);
        objeto.forEach(item => {
            (item.iframes !== "") ? exampleIframe(item) : examplesImages(item);
        });
        // ejemplo con iframe
        function exampleIframe(objeto) {
            //con titulo 
            if (objeto.title !== "") {
                const title = document.createElement('h2')
                title.textContent = objeto.title;
                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', objeto.iframes);
                element.appendChild(title);
                element.appendChild(iframe);
            }
            // sin titulo 
            else {
                const iframe = document.createElement('iframe');
                iframe.setAttribute('src', objeto.iframes);
                element.appendChild(iframe);
            }
        }
        // pintado ejemplos imagen 
        function examplesImages(objeto) {
            if (objeto.title !== "") {
                const title = document.createElement('h2')
                title.textContent = objeto.title;
                const images = document.createElement('img');
                images.setAttribute('src', objeto.images);
                element.appendChild(title);
                element.appendChild(images);
            }
            // sin titulo 
            else {
                const images = document.createElement('img');
                images.setAttribute('src', objeto.images);
                element.appendChild(images);
            }
        }
    }
    // pintado conclusiones 
    function conclusionsPrincipal(element, objeto) {
        ReinicarElemento(element);
        //console.log(objeto)
        objeto.forEach(item => {
            (item.links === "") ? conclusionsText(item) : conclusionLinks(item);
        });
        //conclusion escrita por texto 
        function conclusionsText(objeto) {
            objeto.conclusionsT.forEach(item => {
                var p = document.createElement('p');
                p.textContent = item;
                element.appendChild(p);
            });
        }
        //conclusion de linsk de apoyo 
        function conclusionLinks(objeto) {
            const ul = document.createElement('ul');
            const title = document.createElement('h3')
            ul.classList.add('links');
            title.textContent = objeto.conclusionsT;
            ul.appendChild(title);
            var items = objeto.links;
            items.forEach(itemList => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.setAttribute('href', itemList);
                a.setAttribute('target', '_blank')
                a.textContent = itemList;
                li.appendChild(a)
                ul.appendChild(li);
            });
            element.appendChild(ul);
        }
    }

    const showAll = (themes) => {

        // const contenido = document.querySelector('#complemento')
        // console.log(contenido)
        // contenido.innerHTML = `
        // <h1>${themes[0].name}</h1>
        // <article class ="contenidoP">
        //     <p>${themes[0].principal}</p>
        // </article>`;
        // console.log(themes);
    };



    // const getThemesFromBD = () => {
    //     let them = services.getThemes();
    //     themes.push(them);
    //     debugger
    // }

    // getThemesFromBD();


    // const showTheme = theme => {
    //     themes.push(theme);
    //     showThemes();
    // };

    // const showThemes = () => {
    //     const html = themes.reduce((data, theme) => {
    //         data.push(`<h1>${theme.name} </h1>`);
    //         return data;
    //     });
    //     container.innerHTML += html;

    // };
    return {

        iniciar: idMenu => {
            services.getTheme(idMenu, showTheme);
        }
    }
});
