// "use strict";
let positionInpt = document.getElementById("positionInpt");

let positionName;
let ajouter = document.querySelector(".ajouter");
let btn = "";
let icon = document.querySelector(".fa-solid");
let stockData;
let deleteButton = document.querySelector(".delete");
let deleteButtonGk = document.querySelector(".deleteGk");
// deleteButton.textContent = "Supprimer";
// deleteButton.classList.add("deleteButton");

let cardInput = document.querySelector(".cardInput");
let cardInputGk = document.querySelector(".cardInputGk");
// console.log(cardInputGk);
let formulaire;
let formulaire1;
var formule;
const formInputs = cardInput.querySelectorAll("input");
const formInputsGk = cardInputGk.querySelectorAll("input");

function hide(event) {
  event.target.parentElement.classList.add("hidden");
}
icon.addEventListener("click", function () {
  cardInputGk.classList.add("hidden");
});
function formuleShow(event) {
  formulaire = event.target.parentElement;

  btn = event.target;
  if (formulaire.classList != "cardsInfoGk") {
    if (btn.textContent === "modifier") {
      deleteButton.classList.remove("hidden");
      formule.querySelector(".nameInpt").value =
        formulaire.querySelector(".namePlayer").textContent;
      formule.querySelector(".equipe").value =
        formulaire.querySelector(".logo").src;

      formule.querySelector(".photo").value =
        formulaire.querySelector(".photoPlayer").src;
      formule.querySelector(".nationalityI").value =
        formulaire.querySelector(".flagg").src;
      formule.querySelector(".rating").value =
        formulaire.querySelector(".rate").textContent;
      formule.querySelector(".paceI").value =
        formulaire.querySelector(".paceValeur").textContent;
      formule.querySelector(".shootingI").value =
        formulaire.querySelector(".shootingValeur").textContent;

      formule.querySelector(".passingI").value =
        formulaire.querySelector(".passingValeur").textContent;

      formule.querySelector(".dribblingI").value =
        formulaire.querySelector(".dribblingValeur").textContent;

      formule.querySelector(".defendingI").value =
        formulaire.querySelector(".defendingValeur").textContent;
      formule.querySelector(".physicalI").value =
        formulaire.querySelector(".physicalValeur").textContent;

      // console.log("if1");
      cardInput.classList.remove("hidden");
      cardInputGk.classList.add("hidden");
    }
    // else {
    //   deleteButton.classList.add("hidden");
    //   console.log("els1");
    // }
    else {
      formInputs.forEach((input) => (input.value = ""));
      deleteButton.classList.add("hidden");
      cardInput.classList.remove("hidden");
      cardInputGk.classList.add("hidden");
    }
  } else {
    if (btn.textContent === "modifier") {
      deleteButtonGk.classList.remove("hidden");
      formule.querySelector(".nameInpt").value =
        formulaire.querySelector(".namePlayer").textContent;
      formule.querySelector(".equipe").value =
        formulaire.querySelector(".logo").src;

      formule.querySelector(".photo").value =
        formulaire.querySelector(".photoPlayer").src;
      formule.querySelector(".nationalityI").value =
        formulaire.querySelector(".flagg").src;
      formule.querySelector(".rating").value =
        formulaire.querySelector(".rate").textContent;
      formule.querySelector(".paceI").value =
        formulaire.querySelector(".paceValeur").textContent;
      formule.querySelector(".shootingI").value =
        formulaire.querySelector(".shootingValeur").textContent;

      formule.querySelector(".passingI").value =
        formulaire.querySelector(".passingValeur").textContent;

      formule.querySelector(".dribblingI").value =
        formulaire.querySelector(".dribblingValeur").textContent;

      formule.querySelector(".defendingI").value =
        formulaire.querySelector(".defendingValeur").textContent;
      formule.querySelector(".physicalI").value =
        formulaire.querySelector(".physicalValeur").textContent;

      cardInput.classList.add("hidden");
      cardInputGk.classList.remove("hidden");
      // positionInpt.options[0].textContent =
      // formulaire.querySelector(".position").textContent;
    } else {
      formInputsGk.forEach((input) => (input.value = ""));
      console.log(formulaire.querySelector(".position").textContent);
      console.log(positionInpt.options[0].textContent);
      deleteButtonGk.classList.add("hidden");
      cardInput.classList.add("hidden");
      cardInputGk.classList.remove("hidden");
    }
  }

  positionInpt.options[0].textContent =
    formulaire.querySelector(".position").textContent;
  positionInptGk.options[0].textContent =
    formulaire.querySelector(".position").textContent;
  // positionInptGk.options[0].textContent =
  // formulaire.querySelector(".position").textContent;
  // positionName = positionInpt.options[0].textContent;

  return formulaire;
}

function inputAdd(event) {
  deleteButton.classList.add("hidden");
  formule = event.target.parentElement;
  cardInput.classList.add("hidden");
  formulaire.querySelector(".cardsInfoDetails").classList.remove("hidden");
  cardInputGk.classList.add("hidden");

  stockData = [
    formule.querySelector(".nameInpt").value,
    formule.querySelector(".physicalI").value,
    formule.querySelector(".defendingI").value,
    formule.querySelector(".dribblingI").value,
    formule.querySelector(".passingI").value,
    formule.querySelector(".shootingI").value,
    formule.querySelector(".paceI").value,
    formule.querySelector(".rating").value,
    formule.querySelector(".nationalityI").value,
    formule.querySelector(".equipe").value,
    formule.querySelector(".photo").value,
  ];
  if (formule.querySelector(".nameInpt").value.trim() == "") {
    formInputs.forEach((input) => (input.value = ""));
    formInputsGk.forEach((input) => (input.value = ""));
    event.preventDefault();
    alert("remplire les champ");

    // deleteButton.classList.add("hidden");
    return;
  }

  for (let i = 8; i < 11; i++) {
    if (!URL.canParse(stockData[i])) {
      formInputs.forEach((input) => (input.value = ""));
      formInputsGk.forEach((input) => (input.value = ""));

      // deleteButton.classList.add("hidden");
      alert("URL est invalide");

      return;
    }
  }
  for (let i = 1; i < 7; i++) {
    if (Number(stockData[i]) >= 100 || Number(stockData[i]) < 1) {
      formInputs.forEach((input) => (input.value = ""));
      formInputsGk.forEach((input) => (input.value = ""));
      // deleteButton.classList.add("hidden");
      alert("choisir une nombre entre 1 et 99 ");

      // continue;
      return;
    }
  }

  formulaire.querySelector(".namePlayer").textContent =
    formule.querySelector(".nameInpt").value;
  formulaire.querySelector(".logo").src =
    formule.querySelector(".equipe").value;
  formulaire.querySelector(".photoPlayer").src =
    formule.querySelector(".photo").value;
  formulaire.querySelector(".flagg").src =
    formule.querySelector(".nationalityI").value;
  formulaire.querySelector(".rate").textContent =
    formule.querySelector(".rating").value;
  formulaire.querySelector(".paceValeur").textContent =
    formule.querySelector(".paceI").value;
  formulaire.querySelector(".shootingValeur").textContent =
    formule.querySelector(".shootingI").value;
  formulaire.querySelector(".passingValeur").textContent =
    formule.querySelector(".passingI").value;
  formulaire.querySelector(".dribblingValeur").textContent =
    formule.querySelector(".dribblingI").value;
  formulaire.querySelector(".defendingValeur").textContent =
    formule.querySelector(".defendingI").value;
  formulaire.querySelector(".physicalValeur").textContent =
    formule.querySelector(".physicalI").value;
  btn.textContent = "modifier";
}
function del(event) {
  formulaire.querySelector(".photoPlayer").textContent = "";
  formulaire.querySelector(".namePlayer").textContent = "";
  formulaire.querySelector(".rate").src = "";
  formulaire.querySelector(".logo").classList.remove("src");
  formulaire.querySelector(".flagg").src = "";
  formulaire.querySelector(".rate").textContent = "";
  formulaire.querySelector(".paceValeur").textContent = "";
  formulaire.querySelector(".dribblingValeur").textContent = "";
  formulaire.querySelector(".passingValeur").textContent = "";
  formulaire.querySelector(".defendingValeur").textContent = "";
  formulaire.querySelector(".physicalValeur").textContent = "";
  formulaire.querySelector(".shootingValeur").textContent = "";
  formulaire.querySelector(".cardsInfoDetails").classList.add("hidden");
  deleteButton.classList.add("hidden");
  formInputs.forEach((input) => (input.value = ""));
  formInputsGk.forEach((input) => (input.value = ""));
  btn.textContent = "ajouter";

  cardInput.classList.add("hidden");
  cardInputGk.classList.add("hidden");
}
