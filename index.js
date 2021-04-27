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
