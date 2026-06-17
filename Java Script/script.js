
// ==============================
// FOOTER DATE (DYNAMIC CONTENT)
// ==============================
const currentDate = new Date();
document.getElementById("footer-info").innerText =
  `Today's date: ${currentDate.toLocaleDateString()} | Year: ${currentDate.getFullYear()}`;

// ==============================
// GALLERY SYSTEM (LIGHTBOX)
// ==============================
const images = [
  "Images/Hero.jpg",
  "Images/Img1.jpg",
  "Images/Img2.jpg",
  "Images/Img3.jpg",
  "Images/Img4.jpg",
  "Images/Img5.jpg"
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");

let currentIndex = 0;

images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = `Garden Image ${index + 1}`;

  img.addEventListener("click", () => openLightbox(index));
  gallery.appendChild(img);
});

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  updateImage();
}

function updateImage() {
  lightboxImg.src = images[currentIndex];
  caption.textContent = `Image ${currentIndex + 1} of ${images.length}`;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  updateImage();
}

// Buttons
document.querySelector(".close").onclick = closeLightbox;
document.querySelector(".prev").onclick = () => changeImage(-1);
document.querySelector(".next").onclick = () => changeImage(1);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// ==============================
// FORM VALIDATION (ENQUIRY)
// ==============================
const enquiryForm = document.querySelector(".enquiry-form");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = enquiryForm.name.value.trim();
    const email = enquiryForm.email.value.trim();
    const phone = enquiryForm.phone.value.trim();

    if (name.length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (phone.length < 10) {
      alert("Enter a valid phone number");
      return;
    }

    alert("Enquiry submitted successfully!");
    enquiryForm.reset();
  });
}

// ==============================
// FORM VALIDATION (CONTACT)
// ==============================
const contactForm = document.querySelector("form");

if (contactForm && !contactForm.classList.contains("enquiry-form")) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector("input[type='text']").value;
    const email = contactForm.querySelector("input[type='email']").value;
    const message = contactForm.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
      alert("All fields are required");
      return;
    }

    alert("Message sent successfully!");
    contactForm.reset();
  });
}