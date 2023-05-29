const encriptar = document.getElementById("encryptbutton");
const desencriptar = document.getElementById("desencryptbutton");
const copiar = document.getElementById("copybutton");
const data = document.getElementById("inputtext");
const resultadoMensaje = document.querySelector(".resultado_mensaje");
const resultado = document.getElementById("result");
const noEncontrado = document.querySelector(".no_encontrado");
const encontrado = document.querySelector(".encontrado");

encriptar.addEventListener("click", () => {
    if (data.value.trim() !== "") {
        resultado.value = encriptarMensaje(data.value);
        noEncontrado.style.display = "none";
        encontrado.style.display = "block";
        limpiar();
    }
});

desencriptar.addEventListener("click", () => {
    if (data.value.trim() !== "") {
        resultado.value = desencriptarMensaje(data.value);
        noEncontrado.style.display = "none";
        encontrado.style.display = "block";
        limpiar();
    }
});

function limpiar() {
    data.value ="";
}

copiar.addEventListener("click", () => {
    copiarMensaje();
});

function encriptarMensaje(value) {
    return value
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("o","ober")
        .replaceAll("a","ai")
        .replaceAll("u","ufat");
}

function desencriptarMensaje(value) {
    return value
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ober","o")
        .replaceAll("ai","a")
        .replaceAll("ufat","u");
}

function copiarMensaje() {
    navigator.clipboard.writeText(resultado.value);
}
