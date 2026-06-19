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

// Update image
function updateImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
    caption.textContent = galleryImages[currentIndex].alt;
}

// Next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= galleryImages.length) currentIndex = 0;
    updateImage();
}

// Previous image
function previousImage() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = galleryImages.length - 1;
    updateImage();
}

// Add click events
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});

// Buttons
if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
if (nextBtn) nextBtn.addEventListener("click", nextImage);
if (prevBtn) prevBtn.addEventListener("click", previousImage);

// Click outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") previousImage();
    if (e.key === "Escape") closeLightbox();
});


// ==============================
// SERVICE SEARCH FILTER
// ==============================

const searchInput = document.getElementById("serviceSearch");
const serviceList = document.getElementById("serviceList");

if (searchInput && serviceList) {
    const items = serviceList.getElementsByTagName("li");

    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const text = items[i].textContent.toLowerCase();
            items[i].style.display = text.includes(filter) ? "" : "none";
        }
    });
}


// ==============================
// ENQUIRY FORM VALIDATION
// ==============================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("enquiryName").value.trim();
        const email = document.getElementById("enquiryEmail").value.trim();
        const service = document.getElementById("enquiryService").value;
        const message = document.getElementById("enquiryMessage").value.trim();

        if (name.length < 3) return alert("Name must be at least 3 characters.");
        if (!email.includes("@")) return alert("Enter a valid email.");
        if (!service) return alert("Select a service.");
        if (message.length < 10) return alert("Message must be at least 10 characters.");

        let cost = "";

        switch (service) {
            case "Garden Maintenance":
                cost = "R500 - R1500";
                break;
            case "Landscaping":
                cost = "R2000 - R10000";
                break;
            case "Lawn Care":
                cost = "R300 - R1200";
                break;
            case "Tree Trimming":
                cost = "R800 - R3000";
                break;
            default:
                cost = "Inspection required";
        }

        alert(
            "Enquiry Submitted!\n\n" +
            "Availability: 3–5 working days\n" +
            "Estimated Cost: " + cost
        );

        enquiryForm.reset();
    });
}


// ==============================
// CONTACT FORM (VALIDATION + EMAIL)
// ==============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const type = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        if (name.length < 3) return alert("Enter a valid name.");
        if (!email.includes("@")) return alert("Enter a valid email.");
        if (!type) return alert("Select a message type.");
        if (message.length < 10) return alert("Message too short.");

        const subject = encodeURIComponent(type + " - " + name);
        const body = encodeURIComponent(
            "Name: " + name + "\nEmail: " + email + "\n\n" + message
        );

        window.location.href =
            "mailto:info@charlesgreenway.co.za?subject=" +
            subject +
            "&body=" +
            body;

        alert("Opening email client...");
        contactForm.reset();
    });
}