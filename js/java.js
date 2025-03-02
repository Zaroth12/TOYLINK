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


// 📌 1️⃣ Definir 'personajes' al inicio
const personajes = {
    "https://i.imgur.com/66mSOtZ.png": "ROBET1452",
    "https://i.imgur.com/4NBMZa8.png": "Frank the Alien",
    "https://i.imgur.com/zg2UiGv.png": "Steve"
};

// 📌 2️⃣ Función para limpiar la URL
function cleanUrl(url) {
    return url.split("?")[0]; // Elimina parámetros extra de la URL
}

// 📌 3️⃣ Definir la función después de 'personajes'
function changeProfile(img) {
    let profilePic = document.getElementById("profile-pic");
    let currentName = document.getElementById("current-name");

    // Cambiar imagen de perfil
    profilePic.src = img.src;

    // Obtener URL limpia y buscar el nombre
    let cleanSrc = cleanUrl(img.src);
    let name = personajes[cleanSrc] || cleanSrc.split("/").pop().split(".")[0];

    // Mostrar el nombre en mayúsculas
    currentName.textContent = name.toUpperCase();

    // Remover selección previa y agregar la actual
    document.querySelectorAll(".collection-item").forEach(item => item.classList.remove("selected"));
    img.classList.add("selected");
}

const characters = [
    { name: "TILIN", img: "https://i.imgur.com/66mSOtZ.png" },
    { name: "XTENTATION", img: "https://i.imgur.com/4NBMZa8.png" },
    { name: "PEPE", img: "https://i.imgur.com/zg2UiGv.png" }
];

let currentIndex = 0;

const characterImg = document.querySelector(".character-img");
const characterName = document.querySelector(".character-name");

document.querySelector(".flecha.left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacter();
});

document.querySelector(".flecha.right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacter();
});

function updateCharacter() {
    characterImg.src = characters[currentIndex].img;
    characterName.innerHTML = ` ${characters[currentIndex].name}`;
}


function updateSlider(slider) {
    let value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
    slider.style.background = `linear-gradient(90deg, #0044cc ${value}%, #ccc ${value}%)`;
}

let planets = [
    { name: "MUNDO 3", image: "images/mundo3.png" },
    { name: "MUNDO 1", image: "images/mundo1.png" },
    { name: "MUNDO 2", image: "images/mundo2.png" }
];


function updateCarousel() {
    let planetElements = document.querySelectorAll('.planet');
    let planetNameElement = document.getElementById('planet-name');
    let planetContainer = document.querySelector('.planets-container');

    planetContainer.classList.add("fade-out");

    setTimeout(() => {
        planetElements.forEach((planet, index) => {
            planet.src = planets[index].image;
            planet.classList.toggle("center", index === 1);
        });

        planetNameElement.textContent = planets[1].name;

        planetContainer.classList.remove("fade-out");
    }, 250); 
}

function nextPlanet() {
    planets.push(planets.shift()); 
    updateCarousel();
}

function prevPlanet() {
    planets.unshift(planets.pop()); 
    updateCarousel();
}
updateCarousel();


