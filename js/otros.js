particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100
        },
        "size": {
            "value": 2
        },
        "move": {
            "speed": 1
        },
        "line_linked": {
            "enable": false
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const btnAccessories = document.getElementById("btn-accessories");
    const btnEffects = document.getElementById("btn-effects");
    const accessoriesSection = document.getElementById("accessories");
    const effectsSection = document.getElementById("effects");
    const characterImg = document.getElementById("character-img");

    // URLs de imágenes de accesorios
    const accessoriesImages = {
        corona: "https://i.imgur.com/pz4NxrJ.png",
        sombrero: "https://i.imgur.com/MPlJ67S.png",
        gafas: "https://i.imgur.com/RrLGmtw.png",
        zapatos: "https://i.imgur.com/9Y7MHDK.png"
    };

    // Cambio de pestañas
    btnAccessories.addEventListener("click", () => {
        btnAccessories.classList.add("active");
        btnEffects.classList.remove("active");
        accessoriesSection.classList.add("active");
        effectsSection.classList.remove("active");
    });

    btnEffects.addEventListener("click", () => {
        btnEffects.classList.add("active");
        btnAccessories.classList.remove("active");
        effectsSection.classList.add("active");
        accessoriesSection.classList.remove("active");
    });

    // Cambio de imagen del personaje según accesorio seleccionado
    document.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", () => {
            const accessory = option.dataset.accessory;
            if (accessoriesImages[accessory]) {
                characterImg.src = accessoriesImages[accessory];
            }
        });
    });
});