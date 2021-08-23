export const closeModalPopup = document.querySelectorAll(".close-modal"),
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
