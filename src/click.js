import { images, moveFrame } from "./app";
import { checkBullets } from "./bullets"

const container = document.querySelector(".viewport"); 
const rightBtn = document.querySelector(".rightButton");
const leftBtn = document.querySelector(".leftButton");
const imagesContainer = document.querySelector(".image-container");
let buttonActive = true;

const changePicture = () => {
    const rightClick = () => {
        const oldLeft = imagesContainer.style.left.split("px")[0];
        if(buttonActive === true) {
            buttonActive = false;
            moveFrame("all 1s", (parseInt(oldLeft) - 900) + "px");
            if((parseInt(oldLeft)) === ( -1 * (parseInt(images.length - 2) * 900))) {
                moveFrame("all 1s", (parseInt(oldLeft) - 900) + "px");
                setTimeout( () => {
                    moveFrame("none", "900px");
                }, 1000)
            } else if (parseInt(oldLeft, 10) === (-1 * ((images.length -1) * 900))) {
                moveFrame("none", "900px");
                setTimeout( () => {
                    moveFrame("all 1s", "0px");
                    checkBullets();
                }, 0);
            }
            setTimeout( () => {
                buttonActive = true;
            }, 1000)
            checkBullets();
        }
    }

    const leftClick = () => {
        const oldLeft = imagesContainer.style.left.split("px")[0];
        if (buttonActive === true) {
            buttonActive = false;
            moveFrame("all 1s", (parseInt(oldLeft) + 900) + "px");
            if(parseInt(oldLeft, 10) === 0) { 
                moveFrame("all 1s", (parseInt(oldLeft) + 900) + "px");        
                setTimeout( () => {
                    moveFrame("none", ( -1 * (parseInt(images.length - 1) * 900)) + "px");
                }, 1000);
            } else if (parseInt(oldLeft, 10) === 900) {
                moveFrame("none", ( -1 * (parseInt(images.length - 1) * 900)) + "px")
                setTimeout( () => {
                    moveFrame("all 1s", ( -1 * (parseInt(images.length - 2) * 900)) + "px");
                    checkBullets();
                }, 0);
            }
            setTimeout( () => {
                buttonActive = true;
            }, 1000)
            checkBullets();
        }
    }

    const checkKey = (e) => {
        e = e || window.event;
        if (e.keyCode == '39') {
            rightClick();
        } else if (e.keyCode == "37") {
            leftClick();
        }
    }

    rightBtn.addEventListener("click", rightClick);
    leftBtn.addEventListener("click", leftClick);
    document.onkeydown = checkKey;


};

export { changePicture };