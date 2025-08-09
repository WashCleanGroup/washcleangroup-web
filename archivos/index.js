const hashCorrecto =
"e5c10c14d2695ce422360b65854e4b56557a9a1243a51b17fc078c0a5c5a041f";

async function verificarClave() {
const clave = document.getElementById("clave").value;
const encoder = new TextEncoder();
const data = encoder.encode(clave);
const hashBuffer = await crypto.subtle.digest("SHA-256", data);
const hashArray = Array.from(new Uint8Array(hashBuffer));
const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

if (hashHex === hashCorrecto) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("contenido-protegido").style.display = "block";
} else {
    const errorMsg = document.getElementById("error-msg");
    errorMsg.style.display = "block";
    setTimeout(() => {
    errorMsg.style.display = "none";
    }, 3000);
}
}