import { images } from "./app";

const container = document.querySelector(".viewport");
const imgsContainer = document.querySelector(".image-container");
const bulletContainer = document.querySelector(".bullet-container");
const bullets = document.getElementsByClassName("bullet");

const addBullets = () => {
    images.forEach((image, imageIndex) => {
        bulletContainer.innerHTML += `<div class="bullet hide" id="bullet-${imageIndex}"></div>`
    })
    bulletContainer.style.width = ((images.length) * 50) + "px";
}

const clickBullets = () => {
    const bulletsArray = [...bullets];
    (bulletsArray).forEach((bullet, bulletIndex) => {
        bullet.addEventListener("click", function(event) {
            const bulletId = (event.path[0].id);
            const bulletShortId = (bulletId.substr(7, bulletId.length));
            imgsContainer.style.transition = "all 1s";
            imgsContainer.style.left = ((-1 * 900) * bulletShortId) + "px";
            checkBullets();
        })
    })
}

const checkBullets = () => {
    const oldLeft = imgsContainer.style.left.split("px")[0];
    const bulletsArray = [...bullets];
    bulletsArray.forEach( (element) => {
        element.classList.remove("active-bullet");
        const ElementNumericId = parseInt(element.id.substr(7, element.id.length));
        if (oldLeft / (-900) === ElementNumericId) {
            element.classList.add("active-bullet");
        } else if (parseInt(oldLeft) === 900) {
            bulletsArray[4].classList.add("active-bullet");
        }
    })
}


const ToogleBullets = () => {
    const displayBullets = function() {
        const bulletsArray = [...bullets];
        bulletsArray.forEach((bullet) => {
            bullet.classList.remove("hide");
            bullet.classList.add("display");
        })
    }

    const hideBullets = () => {
        const bulletsArray = [...bullets];
        bulletsArray.forEach((bullet) => {
            bullet.classList.remove("display");
            bullet.classList.add("hide");
        })
    }

    container.addEventListener("mouseover", displayBullets);
    container.addEventListener("mouseout", hideBullets);
}

export { addBullets, clickBullets, checkBullets, ToogleBullets };