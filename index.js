const closeModalPopup = document.querySelectorAll(".close-modal");
const Modal = document.querySelector(".modal");

function closeModal() {
  console.log("closed");
}
closeModalPopup.forEach((closeAction) => {
  closeAction.addEventListener("click", () => {
    closeModal();
    Modal.classList.add("close");
  });
});
