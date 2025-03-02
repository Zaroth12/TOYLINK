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