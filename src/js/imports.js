const closeModalPopup = document.querySelectorAll(".close-modal"),
  Modal = document.querySelector(".modal"),
  menuToggle = document.querySelectorAll(".menu-toggle"),
  openModal = document.querySelectorAll(".open-modal"),
  inputField = document.querySelector(".phoneNumber"),
  slotControl = document.querySelector(".slotControl"),
  slot = document.querySelector(".slot"),
  slotContainer = document.querySelector(".slot-content"),
  nav = document.querySelector("nav"),
  slotContentLayout = ` 
  <div class="">
    <div class="slot-description">My MTN</div>
    <div class="slot-number">07037650988</div>
  </div>`,
  savedNumber = [],
  MTN = [
    "0703",
    "0706",
    "0803",
    "0806",
    "0810",
    "0813",
    "0814",
    "0816",
    "0903",
    "0906",
  ],
  GLO = ["0705", "0805", "0807", "0811", "0815", "0905"],
  AIRTEL = ["0701", "0708", "0802", "0808", "0812", "0902", "0907", "0901"],
  ETISALAT = ["0809", "0817", "0818", "0908", "0909"];

function addeventListeners() {
  // Slot Control event Listeners
  slotControl.addEventListener("click", (e) => {
    e.preventDefault;
    slot.classList.toggle("active");
  });

  // Modal Control Event Listenerss
  closeModalPopup.forEach((closeAction) => {
    closeAction.addEventListener("click", () => {
      Modal.classList.add("close");
    });
  });
  
  openModal.forEach((openAction) => {
    openAction.addEventListener("click", (e) => {
      e.preventDefault;
      Modal.classList.remove("close");
      Modal.classList.add("active");
    });
  });

  // Menu Control
  menuToggle.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  });
}

function setUpSlotContainer() {
  if (savedNumber.length < 1) {
    slotContainer.innerHTML += `<div>No saved number</div>`;
  } else {
    slotContainer.innerHTML += slotContentLayout;
  }
}

setUpSlotContainer();
addeventListeners();
