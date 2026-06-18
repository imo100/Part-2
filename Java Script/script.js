// ==============================
// GALLERY LIGHTBOX
// ==============================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Open image
function openLightbox(index) {
    currentIndex = index;

    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;

    caption.textContent = galleryImages[currentIndex].alt;

    lightbox.style.display = "flex";
}

// Close image
function closeLightbox() {
    lightbox.style.display = "none";
}

// Show next image
function nextImage() {
    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    updateImage();
}

// Show previous image
function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    updateImage();
}

// Update image
function updateImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;

    caption.textContent = galleryImages[currentIndex].alt;
}

// Add click event to every gallery image
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        openLightbox(index);
    });
});

// Buttons
closeBtn.addEventListener("click", closeLightbox);

nextBtn.addEventListener("click", nextImage);

prevBtn.addEventListener("click", previousImage);

// Click outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
        nextImage();
    }

    if (e.key === "ArrowLeft") {
        previousImage();
    }

    if (e.key === "Escape") {
        closeLightbox();
    }

});