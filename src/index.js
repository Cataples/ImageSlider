import { images, addImages } from "./app";
import { changePicture } from "./click";
import { addBullets, clickBullets, checkBullets, ToogleBullets } from "./bullets";
import { onMoseMoveEvent } from "./drag.js";

const imgsContainer = document.querySelector(".image-container");

imgsContainer.style.left = "0px";

addImages();
changePicture();
addBullets();
clickBullets();
checkBullets();
ToogleBullets();
onMoseMoveEvent();

