const imgsContainer = document.querySelector(".image-container");

const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg"];

const addImages = () => {
    imgsContainer.innerHTML = `<img src = "../images/${images[images.length - 1]}" class="image" style="left:-900px">`
    images.forEach((image, imageIndex) => {
        const AddedImage = (`<img src = "../images/${image}" class="image" style="left:${parseInt(imageIndex) * 900}px">`);
        imgsContainer.innerHTML += AddedImage;
        imgsContainer.style.width = ((images.length + 1) * 900) + "px";
    })
    imgsContainer.innerHTML += `<img src = "../images/${images[0]}" class="image" style="left:${images.length * 900}px">`
}


export { images, addImages };



