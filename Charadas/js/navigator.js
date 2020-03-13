function obtenerIdNavegador() {
    let aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera", "Edge","Trident", "Edg/"],
        sUsrAg = navigator.userAgent,
        nIdx = aKeys.length - 1;
        console.log("userAgent :" + sUsrAg);
    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);
    return aKeys[nIdx];
}

window.onload = function(){
    let navegador = obtenerIdNavegador();
    console.log(navegador);
    
    if (navegador !== "Chrome" && navegador !== "Edg/" && navegador !== "Firefox") {
        alert("Su navegador "+ navegador +" no es compatible con esta aplicación por favor utilizar : Google Chrome o Microsoft Edge Chromium.");
    }
};
//test