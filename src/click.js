import { images } from "./app";

const container = document.getElementsByClassName("viewport")[0]; 
const rightBtn = document.getElementsByClassName("rightButton")[0];
const leftBtn = document.getElementsByClassName("leftButton")[0];
const imgsContainer = document.getElementsByClassName("image-container")[0];
let buttonActive = true;

let changePicture = function(){
    function rightClick() {
        if(buttonActive === true) {
            buttonActive = false;
            const oldLeft = imgsContainer.style.left.split("px")[0];
            imgsContainer.style.transition = "all 1s";
            imgsContainer.style.left = (parseInt(oldLeft) - 900) + "px";
            if((parseInt(oldLeft)) === ( -1 * (parseInt(images.length - 2) * 900))) {
                imgsContainer.style.transition = "all 1s";
                imgsContainer.style.left = (parseInt(oldLeft) - 900) + "px";
            setTimeout( () => {
                imgsContainer.style.transition = "none";
                imgsContainer.style.left = "900px";
            }, 1000)
        }
            setTimeout( () => {
                buttonActive = true;
            }, 1000)
        }
    }

    function leftClick() {
        if (buttonActive === true) {
            buttonActive = false;
            const oldLeft = imgsContainer.style.left.split("px")[0];
            imgsContainer.style.transition = "all 1s";
            imgsContainer.style.left = (parseInt(oldLeft) + 900) + "px";
            if(parseInt(oldLeft, 10) === 0) { 
                imgsContainer.style.transition = "all 1s";
                imgsContainer.style.left = (parseInt(oldLeft) + 900) + "px";           
            setTimeout( () => {
                imgsContainer.style.transition = "none";
                imgsContainer.style.left = ( -1 * (parseInt(images.length - 1) * 900)) + "px";
            }, 1000);
        }
            setTimeout( () => {
                buttonActive = true;
            }, 1000)
        }
    }

    rightBtn.addEventListener("click", rightClick);
    leftBtn.addEventListener("click", (leftClick))

};

export { rightClick, leftClick, changePicture };