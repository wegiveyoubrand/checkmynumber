// Make Sure Service Workers are Supported

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw_cached_pages.js")
      .then((reg) => console.log("Service Worker: Registered"))
      .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}
const closeModalPopup = document.querySelectorAll(".close-modal");
const Modal = document.querySelector(".modal");
const menuToggle = document.querySelectorAll(".menu-toggle");

const nav = document.querySelector("nav");
function closeModal() {
  console.log("closed");
}
closeModalPopup.forEach((closeAction) => {
  closeAction.addEventListener("click", () => {
    closeModal();
    Modal.classList.add("close");
  });
});

menuToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
