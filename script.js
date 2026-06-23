let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg"
];

let currentIndex = 0;

function openImage(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[index];
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}function filterImages(category) {
    let allImages = document.querySelectorAll(".gallery img");

    allImages.forEach((img) => {
        if (category === "all") {
            img.style.display = "inline-block";
        } else {
            if (img.classList.contains(category)) {
                img.style.display = "inline-block";
            } else {
                img.style.display = "none";
            }
        }
    });
}