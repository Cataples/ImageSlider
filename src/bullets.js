import { images } from "./app";

const imgsContainer = document.getElementsByClassName("image-container")[0];
const bulletContainer = document.getElementsByClassName("bullet-container")[0];
const bullets = document.getElementsByClassName("bullet");

const addBullets = function() {
    images.forEach((image, imageIndex) => {
        bulletContainer.innerHTML += `<div class="bullet" id="bullet-${imageIndex}"></div>`
    })
    bulletContainer.style.width = ((images.length) * 50) + "px";
}

const clickBullets = function() {
    const bulletsArray = [...bullets];
    (bulletsArray).forEach((bullet, bulletIndex) => {
        bullet.addEventListener("click", function(event) {
            let bulletId = (event.path[0].id);
            let bulletShortId = (bulletId.substr(7, bulletId.length));
            imgsContainer.style.transition = "all 1s";
            imgsContainer.style.left = ((-1 * 900) * bulletShortId) + "px";
            checkBullets();
        })
    })
}

const checkBullets = function() {
    const oldLeft = imgsContainer.style.left.split("px")[0];
    const bulletsArray = [...bullets];
    bulletsArray.forEach( (element) => {
        element.classList.remove("active-bullet");
        if (oldLeft / (-900) === parseInt(element.id.substr(7, element.id.length))) {
            element.classList.add("active-bullet");
        } else if (oldLeft == 900) {
            bulletsArray[4].classList.add("active-bullet");
        }
    })
}

export { addBullets, clickBullets, checkBullets };