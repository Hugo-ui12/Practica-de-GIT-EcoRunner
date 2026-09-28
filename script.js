// Botón para descargar EcoRunner
const botonDescargar = document.getElementById("btnDescargar");

botonDescargar.addEventListener("click", () => {

    // Ruta del archivo que quieres descargar
    const enlace = document.createElement("a");

    enlace.href = "EcoRunner.zip";
    enlace.download = "EcoRunner.zip";

    // Ejecutar la descarga
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
});