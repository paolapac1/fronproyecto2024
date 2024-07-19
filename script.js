// script.js

// Agrega un evento de clic a la imagen con la clase "foto"
const imagen =
    document.querySelector(".foto-abeja-1").addEventListener("click", function() {
        imagen.addEventListener("click", function() {
            this.style.width = "300px";

            this.style.height = "300px";
            alert("¡hola! has hecho clic en la imagen de la abeja 1")




        });
        // Cambia el estilo de la imagen cuando se hace clic en ella

        this.style.width = "300px";

        this.style.height = "300px";
        alert("¡hola! has hecho clic en la imagen de la abeja 1")

    });

// Agrega un evento de clic a la imagen con la clase "Foto abejas 1"

document.querySelector("Foto miel 2").addEventListener("click", function() {

    // Cambia la clase de la imagen cuando se hace clic en ella

    this.classList.add("active");

});

// Agrega un evento de clic a la imagen con la clase "Foto miel 2"

document.querySelector("foto polen 3").addEventListener("click", function() {

    // Cambia el estilo de la imagen cuando se hace clic en ella

    this.style.width = "400px";

    this.style.height = "400px";

});