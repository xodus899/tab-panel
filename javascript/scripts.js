/* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: false}}] */

const cardButtons = document.querySelectorAll(".card button");
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

function handleButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  const imgSrc = card.querySelector("img").src;
  const description = card.dataset.description;
  const name = document.querySelector("h2").textContent;
  modalInner.innerHTML = `
  <img src="${imgSrc.replace("200", "600")}" alt=${name}>
  <p>${description}</p>
  `;
  modalOuter.classList.add("open");
}

function closeModal(event) {
  const isOutSide = event.target.closest(".modal-inner");
  if (!isOutSide) {
    modalOuter.classList.remove("open");
  }
}

cardButtons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

modalOuter.addEventListener("click", closeModal);

window.addEventListener("keydown", (event) => {
  // console.log(event.key);
  if (event.key === "Escape") {
    modalOuter.classList.remove("open");
  }
});
