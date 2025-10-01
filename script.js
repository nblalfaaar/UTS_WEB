/* ==== NAVBAR ==== */
const toggler = document.getElementById("navbar-toggler");
const navMenu = document.getElementById("navbarNav");

toggler.addEventListener("click", () => {
  navMenu.classList.toggle("show"); // toggle class "show"
});

/* ==== SCROLL TO TOP ==== */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==== SCROLL ACTIVE LINK ==== */
const navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

/* ==== DARK MODE ==== */
const darkToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    darkToggle.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    darkToggle.innerHTML = `<i class="fas fa-moon"></i>`;
  }
});

/* ==== FORM HANDLER ==== */
const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  alert(`Terima kasih ${nama}! Pesanmu sudah terkirim.\nEmail: ${email}\nPesan: ${pesan}`);
  form.reset();
});

/* ==== POP UP SERTIFIKAT ==== */
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("certImage");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".btn-cert").forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = btn.dataset.img;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

/* ==== TYPING MODERN DI HERO ==== */
const roles = ["Mahasiswa Informatika", "Penggemar Web Development", "Pembelajar UI/UX", "Penjelajah Teknologi"];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 60;
const delayBetween = 1500;

function typeEffect() {
  const typingText = document.getElementById("typing-text");

  if (!isDeleting && charIndex <= roles[index].length) {
    currentRole = roles[index].substring(0, charIndex++);
    typingText.textContent = currentRole;
    setTimeout(typeEffect, typingSpeed);
  } else if (isDeleting && charIndex >= 0) {
    currentRole = roles[index].substring(0, charIndex--);
    typingText.textContent = currentRole;
    setTimeout(typeEffect, deletingSpeed);
  } else if (!isDeleting && charIndex > roles[index].length) {
    isDeleting = true;
    setTimeout(typeEffect, delayBetween);
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
