const imagesContainer = document.querySelector(".image-container");

const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg"];

const addImages = () => {
    imagesContainer.innerHTML = `<img src = "../images/${images[images.length - 1]}" class="image" style="left:-900px">`
    images.forEach((image, imageIndex) => {
        const AddedImage = (`<img src = "../images/${image}" class="image" style="left:${parseInt(imageIndex) * 900}px">`);
        imagesContainer.innerHTML += AddedImage;
        imagesContainer.style.width = ((images.length + 1) * 900) + "px";
    })
    imagesContainer.innerHTML += `<img src = "../images/${images[0]}" class="image" style="left:${images.length * 900}px">`
}

const moveFrame = (transition, pixels) => {
    imagesContainer.style.transition = transition;
    imagesContainer.style.left = pixels;
}

export { images, addImages, moveFrame };



