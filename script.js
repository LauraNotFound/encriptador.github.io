const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const $content = document.getElementById('mensaje'), $btn = document.getElementById('copiar');
//Arreglos multidimensionales
/*  a="ai"
    e="enter"
    i="imes"
    o="ober"
    u="ufat" */

    /*Función botón para encriptar */
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

/**Función para encriptar mensaje */
function encriptar(stringEncriptado){
    /*let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];*/
    let matrizCodigo = [["e", "-1010-"], ["i", "-011-"], ["a", "-10-"], ["o", "-0-"], ["u", "-0011-"], ["k", "-01-"], ["y", "-000-"], ["d", "-001-"], ["h", "-111-"], ["m", "-100-"], ["w", "-110-"], ["x", "-101-"], ["t", "-010-"], ["j", "-0000-"], ["r", "-0001-"], ["v", "-0111-"], ["s", "-1111-"], ["q", "-1000-"], ["ñ", "-1100-"], ["n", "-1110-"], ["c", "-1001-"], ["g", "-0101-"], ["b", "-0110-"], ["f", "-0100-"], ["p", "-00-"], ["z", "-11-"], ["l", "-1-"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }    
    }
    return stringEncriptado 
}

/**Función botón desencriptar */
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

/**Función para desencriptar mensaje */
function desencriptar(stringDesencriptado) {
    /*let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];*/
    let matrizCodigo = [["e", "-1010-"], ["i", "-011-"], ["a", "-10-"], ["o", "-0-"], ["u", "-0011-"], ["k", "-01-"], ["y", "-000-"], ["d", "-001-"], ["h", "-111-"], ["m", "-100-"], ["w", "-110-"], ["x", "-101-"], ["t", "-010-"], ["j", "-0000-"], ["r", "-0001-"], ["v", "-0111-"], ["s", "-1111-"], ["q", "-1000-"], ["ñ", "-1100-"], ["n", "-1110-"], ["c", "-1001-"], ["g", "-0101-"], ["b", "-0110-"], ["f", "-0100-"], ["p", "-00-"], ["z", "-11-"], ["l", "-1-"]];
    
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}
/*Función para copiar el texto en el recuadro*/
$btn.addEventListener('click', e =>{
    $content.select();
    document.execCommand('copy');
})