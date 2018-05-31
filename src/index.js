import { images, addImages } from "./app";
import { changePicture } from "./click";
import { addBullets, clickBullets, checkBullets } from "./bullets";
import { onMousemove, onMouseMove } from "./drag.js";

const container = document.getElementsByClassName("viewport")[0]; 
const rightBtn = document.getElementsByClassName("rightButton")[0];
const leftBtn = document.getElementsByClassName("leftButton")[0];
const imgsContainer = document.getElementsByClassName("image-container")[0];
const bulletContainer = document.getElementsByClassName("bullet-container")[0];
const bullets = document.getElementsByClassName("bullet");

imgsContainer.style.left = "0px";

addImages();
changePicture();
addBullets();
clickBullets();
checkBullets();
document.addEventListener("mousemove", onMouseMove);
