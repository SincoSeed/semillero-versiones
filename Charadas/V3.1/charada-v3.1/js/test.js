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
    'after', 'removeAttribute', 'getAttribute', 'id', 'name', 'for attribute', 'querySelectorALL',
    'JavaScript ', 'HiperTexto', 'HiperMedia', 'Concurrencia', 'Asincrono', 'Sincrono', 'CSS',
    'Link', 'Script', 'querySelector', 'document', 'window', 'addEvent', 'Array', 'map',
    'filter', 'reduce', 'Variable', 'Heap', 'var', 'let', 'cons', 'string', 'Number',
    'Boolean', 'Array', 'Object', 'Operador ternario', 'Evento', 'Etiqueta', 'W3C', 'ECMA',
    'Lenguaje', 'Dominio', 'Hosting', 'HTTP', 'FTP', 'GIT', 'Repositorio', 'Front-End', 'Servidor',
    'Recurso', 'TCP/IP', 'IP', 'DOM', 'Pseudoselector', 'Enlaces', 'ClassList', 'ClassName', ':',
    ';', '`', 'charset', 'UTF8', 'tag (attribute)', 'getElementById', '<', '>', '> (css)', 'not (selector)',
    'h1', 'hover', 'cursor:pointer', 'ftp', 'smtp', 'protocolo', 'outline', 'border-radius', '* (operador)',
    '* (selector)', 'style', "\r", "\t", "\n", '<br>', '<hr>', 'webassembly', 'base de datos', 'padding',
    'sql', 'mysql', 'toString', 'SqlLite', 'destructuring', 'iframe', 'Date', 'office', 'outlock',
    'teams', 'daily', 'scrum', 'obj["prop"]', 'funciones puras', 'lambda', 'bootstrap', 'preprocesador',
    'sass', 'less', 'foundation', 'apache', 'onChange', 'required', 'form',
    'document.querySelector([name="item"])', 'alert', 'interpolación', '<li>', 'event.preventDefault()',
    'join', 'localstorage', 'key value', 'arrow function', 'map', 'snake_case', 'camelCase', 'JSON.parse',
    'JSON.stringfy', 'JSON', 'const', 'algoritmo', 'CTRL + F5', '"+" (selector CSS)', '[object Object]',
    'data-', 'parseInt', '!', '() ? :', 'checked', 'catch()', '<kdb>', 'transitionent', 'onblur', 'spread operator'

];

const palabranueva = " ";
// console.log(palabranueva);
function buscador(palabranueva) {
    debugger
    let buscado = palabras.find(palabra => palabra === palabranueva)
    if (buscado) {
        console.log('Encontró la palabra específica : ' + buscado);
    }
};
buscador(palabranueva);




