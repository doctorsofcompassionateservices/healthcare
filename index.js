// Simple navbar background effect on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.9)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.72)";
  }
});

// Popup Functions

function showDocsPopup() {
  const popup = document.getElementById("docs-popup");

  if (popup) {
    popup.classList.add("show");
  }
}

function closeDocsPopup() {
  const popup = document.getElementById("docs-popup");

  if (popup) {
    popup.classList.remove("show");
  }
}

// Show popup when page loads

window.addEventListener("load", () => {
  showDocsPopup();
});
