import { checkBullets } from "./bullets"
import { images, moveFrame } from "./app";

const container = document.querySelector(".viewport"); 
const imagesContainer = document.querySelector(".image-container");

let mouseMove;
let initialRight;
let buttonActive = true;

const onMouseMove = (event) => {  
    const oldLeft = imagesContainer.style.left.split("px")[0]; 
    let actualRight = event.clientX;     
    if (mouseMove === true) { 
        if (buttonActive == true){  
            buttonActive = false;
            if (actualRight < initialRight) {
                moveFrame("all 1s", (parseInt(oldLeft) - 900) + "px");
                if((parseInt(oldLeft)) === ( -1 * (parseInt(images.length - 2) * 900))) {
                    moveFrame("all 1s", (parseInt(oldLeft) - 900) + "px")
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
            } else {
                buttonActive = false;
                moveFrame("all 1s", (parseInt(oldLeft) + 900) + "px");
                if(parseInt(oldLeft, 10) === 0) { 
                    moveFrame("all 1s", (parseInt(oldLeft) + 900) + "px");
                    setTimeout( () => {
                        moveFrame("none", ( -1 * (parseInt(images.length - 1) * 900)) + "px");
                    }, 1000);
                } else if (parseInt(oldLeft, 10) === 900) {
                    moveFrame("none", ( -1 * (parseInt(images.length - 1) * 900)) + "px");
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
    }
    checkBullets();
}

    container.addEventListener("mousedown", function(event){
        mouseMove = true;
        initialRight = event.clientX;
    })

    container.addEventListener("mouseup", function(){
        mouseMove = false;
        checkBullets();
    })

const onMoseMoveEvent = () => {
    document.addEventListener("mousemove", onMouseMove);
}

export { onMoseMoveEvent };