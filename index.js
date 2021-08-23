import "./src/js/setup.js";
import * as all from "./src/js/imports.js";

function addeventListeners() {
  // Slot Control event Listeners
  all.slotControl.addEventListener("click", (e) => {
    e.preventDefault;
    all.slot.classList.toggle("active");
  });

  // Modal Control Event Listenerss
  all.closeModalPopup.forEach((closeAction) => {
    closeAction.addEventListener("click", () => {
      all.Modal.classList.add("close");
    });
  });

  all.openModal.forEach((openAction) => {
    openAction.addEventListener("click", (e) => {
      e.preventDefault;
      all.Modal.classList.remove("close");
      all.Modal.classList.add("active");
    });
  });

  // Menu Control
  all.menuToggle.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      all.nav.classList.toggle("active");
    });
  });
}

function setUpSlotContainer() {
  if (all.savedNumber.length < 1) {
    all.slotContainer.innerHTML += `<div>No saved number</div>`;
  } else {
    all.slotContainer.innerHTML += all.slotContentLayout;
  }
}

setUpSlotContainer();
addeventListeners();
