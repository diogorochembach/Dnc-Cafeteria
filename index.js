const cards = document.getElementsByClassName("card__grid");
const buttons = document.getElementsByClassName("button_buy");
const buttonModal = document.getElementById("button_atendimento");
const modal = document.getElementById("myModal");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", (event) => {
    buttons[i].classList.remove("hide");
    buttons[i].classList.add("show");
  });
  cards[i].addEventListener("mouseout", (event) => {
    buttons[i].classList.add("hide");
  });
}

buttonModal.addEventListener("click", (event) => {
  modal.classList.toggle("hide");
});

const closeModal = () => {
  modal.classList.toggle("hide");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.toggle("hide");
  }
};