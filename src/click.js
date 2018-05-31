import { images } from "./app";
import { checkBullets } from "./bullets"

const container = document.getElementsByClassName("viewport")[0]; 
const rightBtn = document.getElementsByClassName("rightButton")[0];
const leftBtn = document.getElementsByClassName("leftButton")[0];
const imgsContainer = document.getElementsByClassName("image-container")[0];
let buttonActive = true;

let changePicture = function(){
    function rightClick() {
        const oldLeft = imgsContainer.style.left.split("px")[0];
        if(buttonActive === true) {
            buttonActive = false;
            imgsContainer.style.transition = "all 1s";
            imgsContainer.style.left = (parseInt(oldLeft) - 900) + "px";
            if((parseInt(oldLeft)) === ( -1 * (parseInt(images.length - 2) * 900))) {
                imgsContainer.style.transition = "all 1s";
                imgsContainer.style.left = (parseInt(oldLeft) - 900) + "px";
                setTimeout( () => {
                    imgsContainer.style.transition = "none";
                    imgsContainer.style.left = "900px";
                }, 1000)
            } else if (parseInt(oldLeft, 10) === (-1 * ((images.length -1) * 900))) {
                imgsContainer.style.transition = "none";
                imgsContainer.style.left = "900px";
                setTimeout( () => {
                    imgsContainer.style.transition = "all 1s";
                    imgsContainer.style.left = "0px";
                    checkBullets();
                }, 0);
            }
            setTimeout( () => {
                buttonActive = true;
            }, 1000)
            checkBullets();
        }
    }

    function leftClick() {
        const oldLeft = imgsContainer.style.left.split("px")[0];
        if (buttonActive === true) {
            buttonActive = false;
            imgsContainer.style.transition = "all 1s";
            imgsContainer.style.left = (parseInt(oldLeft) + 900) + "px";
            if(parseInt(oldLeft, 10) === 0) { 
                imgsContainer.style.transition = "all 1s";
                imgsContainer.style.left = (parseInt(oldLeft) + 900) + "px";           
                setTimeout( () => {
                    imgsContainer.style.transition = "none";
                    imgsContainer.style.left = ( -1 * (parseInt(images.length - 1) * 900)) + "px";
                }, 1000);
            } else if (parseInt(oldLeft, 10) === 900) {
                imgsContainer.style.transition = "none";
                imgsContainer.style.left = ( -1 * (parseInt(images.length - 1) * 900)) + "px";
                setTimeout( () => {
                    imgsContainer.style.transition = "all 1s";
                    imgsContainer.style.left = ( -1 * (parseInt(images.length - 2) * 900)) + "px";
                    checkBullets();
                }, 0);
            }
            setTimeout( () => {
                buttonActive = true;
            }, 1000)
            checkBullets();
        }
    }

    function checkKey(e) {
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