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
const openModal = document.querySelectorAll(".open-modal");
const inputField = document.querySelector(".phoneNumber");

const nav = document.querySelector("nav");
function closeModal() {
  console.log("closed");
}
openModal.forEach((openAction) => {
  openAction.addEventListener("click", () => {
    network_response();
    Modal.classList.remove("close");
  });
});
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

const network_number_prefix = [
  {
    MTN: [
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
    GLO: ["0705", "0805", "0807", "0811", "0815", "0905"],
    AIRTEL: ["0701", "0708", "0802", "0808", "0812", "0902", "0907", "0901"],
    ETISALAT: ["0809", "0817", "0818", "0908", "0909"],
  },
];

let userInput = "";
let MTN_Prefix = "";

function MTN() {
  network_number_prefix.map(function (network) {
    return (MTN_Prefix = network.MTN);
  });
}

MTN();

let network_response = function () {
  userInput = inputField.value;
  console.log(userInput);
  if (userInput === "0803") {
    return (response = `Phone number is MTN`);
  } else if (userInput === "0805") {
    alert("GLO");
  } else {
    alert("invalid input");
  }
};
MTN_Prefix.map((number) => {
  console.log(number);
});
