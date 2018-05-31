import { checkBullets } from "./bullets"
import { images } from "./app";

const container = document.getElementsByClassName("viewport")[0]; 
const imgsContainer = document.getElementsByClassName("image-container")[0];

let mouseMove;
let initialRight;
let buttonActive = true;

function onMouseMove(event) {  
    const oldLeft = imgsContainer.style.left.split("px")[0]; 
    let actualRight = event.clientX;     
    if (mouseMove === true) { 
        if (buttonActive == true){  
            buttonActive = false;
            if ( actualRight < initialRight ) {
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
            } else {
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


export { onMouseMove };