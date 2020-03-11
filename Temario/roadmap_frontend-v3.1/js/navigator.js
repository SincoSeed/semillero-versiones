function obtenerIdNavegador() {
    //, "Edg"
    let aKeys = ["MSIE", "Firefox", "Safari", "Chrome", "Opera", "Edge","Trident", "Edg"],
        sUsrAg = navigator.userAgent,
        nIdx = aKeys.length - 1;
        console.log("userAgent :" + sUsrAg);
        

    for (nIdx; nIdx > -1 && sUsrAg.indexOf(aKeys[nIdx]) === -1; nIdx--);

    return aKeys[nIdx];
}

alert(obtenerIdNavegador());