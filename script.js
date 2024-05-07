const myButton = document.getElementById("myButton");
const image = document.getElementsByClassName("myPhoto")[0];
const originalImageSrc = image.src;
const imageArray = [
    "photo/image1.jpg",
    "photo/image2.jpg",
    "photo/image3.jpg",
    "photo/image4.jpg",
    "photo/image5.jpg",
    "photo/image6.jpg",
    "photo/image7.jpg",
    "photo/image8.JPG",
    "photo/image9.jpg",
    "photo/image10.jpg",
    "photo/image11.jpg",
    "photo/image12.jpg",
    "photo/image13.jpg",
    "photo/image14.jpg",
    "photo/image15.jpg",
    "photo/image16.jpg",
    "photo/image17.jpg",
    "photo/image18.jpg",
    "photo/image19.jpeg",
    "photo/image20.jpg",
    "photo/image21.jpg",
];

let counter = 0;
const myFunction = () => {
    if (counter === 21) {
        image.src = originalImageSrc;
        counter = 0;
        return counter;
    }
    const imageLink = imageArray[counter];
    image.src = imageLink;
    counter += 1;
    console.log("counter value is: ", counter);
};

myButton.addEventListener("click", myFunction);