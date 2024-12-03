let addGk = document.querySelector(".addGk");
let add = document.querySelector(".add");
let addRemplacementGk = document.querySelector(".addRemplacementGk");
let addRemplacement = document.querySelector(".addRemplacement");
let addPlayersR = document.querySelector(".addPlayersR");
let addGkRempl = document.querySelector(".addGkRempl");
let cardInputR = document.querySelector(".cardInputR");
let cardInputGkR = document.querySelector(".cardInputGkR");
let positionInpt = document.getElementById("positionInpt");
let remplacant = document.querySelector(".remplacant");
let positionName;
let positionInptGk = document.getElementById("positionInptGk");
let ajouter = document.querySelector(".ajouter");
let btn = "";

let icon = document.querySelector(".fa-solid");
let stockData;
let deleteButton = document.querySelector(".delete");
let deleteButtonGk = document.querySelector(".deleteGk");
let selectOption;
let cardInput = document.querySelector(".cardInput");
let cardInputGk = document.querySelector(".cardInputGk");
let card;
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
    if (btn.textContent == "modifier") {
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

      cardInput.style.display = "grid";

      cardInputGk.classList.add("hidden");
    } else {
      formInputs.forEach((input) => (input.value = ""));
      deleteButton.classList.add("hidden");
      cardInput.style.display = "grid";
      cardInputGk.style.display = "none";
    }
  } else {
    if (btn.textContent == "modifier") {
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

      cardInput.style.display = "none";
      cardInputGk.style.display = "grid";
    } else {
      formInputsGk.forEach((input) => (input.value = ""));
      console.log(formulaire.querySelector(".position").textContent);
      console.log(positionInpt.options[0].textContent);
      deleteButtonGk.classList.add("hidden");
      cardInput.classList.add("hidden");
      cardInputGk.style.display = "grid";
    }
  }

  positionInpt.options[0].textContent =
    formulaire.querySelector(".position").textContent;
  positionInptGk.options[0].textContent =
    formulaire.querySelector(".position").textContent;

  return formulaire;
}

function inputAdd(event) {
  deleteButton.classList.add("hidden");
  formule = event.target.parentElement;
  cardInput.classList.add("hidden");
  formulaire.querySelector(".cardsInfoDetails").classList.remove("hidden");
  cardInputGk.style.display = "none";

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

    return;
  }

  for (let i = 8; i < 11; i++) {
    if (!URL.canParse(stockData[i])) {
      formInputs.forEach((input) => (input.value = ""));
      formInputsGk.forEach((input) => (input.value = ""));

      alert("URL est invalide");

      return;
    }
  }
  for (let i = 1; i < 7; i++) {
    if (Number(stockData[i]) >= 100 || Number(stockData[i]) < 1) {
      formInputs.forEach((input) => (input.value = ""));
      formInputsGk.forEach((input) => (input.value = ""));
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

  cardInput.style.display = "none";
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

  cardInput.style.display = "none";
  cardInputGk.style.display = "none";
}
// .................................................................
function showFormuleRem() {
  addPlayersR.classList.remove("hidden");
  addGkRempl.classList.remove("hidden");
}

function showRemplacement(event) {
  formInputs.forEach((input) => (input.value = ""));
  formInputsGk.forEach((input) => (input.value = ""));
  // positionInpt.removeAttribute("disabled");
  let btn = event.target;
  let cardsInfo = document.createElement("div");
  let position = document.createElement("div");

  cardsInfo.appendChild(position);
  let cardsInfoDetails = document.createElement("div");
  let namePlayer = document.createElement("div");
  let photoPlayer = document.createElement("image");
  let flagg = document.createElement("image");
  let logo = document.createElement("image");
  let rate = document.createElement("div");
  let pace = document.createElement("div");
  let paceValeur = document.createElement("div");
  let shooting = document.createElement("div");
  let shootingValeur = document.createElement("div");
  let passing = document.createElement("div");
  let passingValeur = document.createElement("div");
  let dribbling = document.createElement("div");
  let dribblingValeur = document.createElement("div");
  let defending = document.createElement("div");
  let defendingValeur = document.createElement("div");
  let physical = document.createElement("div");
  let physicalValeur = document.createElement("div");
  cardsInfoDetails.appendChild(namePlayer);
  cardsInfoDetails.appendChild(photoPlayer);
  cardsInfoDetails.appendChild(flagg);
  cardsInfoDetails.appendChild(logo);
  cardsInfoDetails.appendChild(rate);
  cardsInfoDetails.appendChild(pace);
  cardsInfoDetails.appendChild(paceValeur);
  cardsInfoDetails.appendChild(shooting);
  cardsInfoDetails.appendChild(shootingValeur);
  cardsInfoDetails.appendChild(passing);
  cardsInfoDetails.appendChild(passingValeur);
  cardsInfoDetails.appendChild(dribbling);
  cardsInfoDetails.appendChild(dribblingValeur);
  cardsInfoDetails.appendChild(defending);
  cardsInfoDetails.appendChild(defendingValeur);
  cardsInfoDetails.appendChild(physical);
  cardsInfoDetails.appendChild(physicalValeur);
  cardsInfo.appendChild(cardsInfoDetails);
  let badge = document.createElement("image");
  cardsInfo.appendChild(badge);

  remplacant.appendChild(cardsInfo);
  if (btn.classList == "addGkRempl") {
    cardInputR.style.display = "none";
    cardInputGkR.style.display = "grid";
  } else {
    cardInputR.classList.remove("hidden");
    cardInputR.style.display = "grid";
    cardInputGkR.style.display = "none";
  }

  return;
}

function addPlayerRemplace(event) {
  formInputs.forEach((input) => (input.value = ""));
  formInputsGk.forEach((input) => (input.value = ""));
  cardInputR.style.display = "none";

  addRemplacement.classList.remove("hidden");

  let cardsInfo = document.createElement("div");
  let position = document.createElement("div");
  position.classList.add("position");
  cardsInfo.appendChild(position);
  cardsInfo.classList.add("cardsInfo");
  let cardsInfoDetails = document.createElement("div");
  let namePlayer = document.createElement("div");
  namePlayer.classList.add("namePlayer");
  let photoPlayer = document.createElement("img");
  photoPlayer.classList.add("photoPlayer");
  let flagg = document.createElement("img");
  flagg.classList.add("flagg");
  let logo = document.createElement("img");
  logo.classList.add("logo");
  let rate = document.createElement("div");
  rate.classList.add("rate");
  let pace = document.createElement("p");
  pace.classList.add("pace");
  pace.textContent = "PAC";
  let paceValeur = document.createElement("div");
  paceValeur.classList.add("paceValeur");
  let shooting = document.createElement("p");
  shooting.textContent = "SHO";
  shooting.classList.add("shooting");
  let shootingValeur = document.createElement("div");
  shootingValeur.classList.add("shootingValeur");
  let passing = document.createElement("p");
  passing.textContent = "PAS";
  passing.classList.add("passing");
  let passingValeur = document.createElement("div");
  passingValeur.classList.add("passingValeur");
  let dribbling = document.createElement("p");
  dribbling.textContent = "DRI";
  dribbling.classList.add("dribbling");
  let dribblingValeur = document.createElement("div");
  dribblingValeur.classList.add("dribblingValeur");
  let defending = document.createElement("p");
  defending.textContent = "DEF";
  defending.classList.add("defending");
  let defendingValeur = document.createElement("div");
  defendingValeur.classList.add("defendingValeur");
  let physical = document.createElement("p");
  physical.textContent = "PHY";
  physical.classList.add("physical");
  let physicalValeur = document.createElement("div");
  physicalValeur.classList.add("physicalValeur");
  cardsInfoDetails.appendChild(namePlayer);
  cardsInfoDetails.appendChild(photoPlayer);
  cardsInfoDetails.appendChild(flagg);
  cardsInfoDetails.appendChild(logo);
  cardsInfoDetails.appendChild(rate);
  cardsInfoDetails.appendChild(pace);
  cardsInfoDetails.appendChild(paceValeur);
  cardsInfoDetails.appendChild(shooting);
  cardsInfoDetails.appendChild(shootingValeur);
  cardsInfoDetails.appendChild(passing);
  cardsInfoDetails.appendChild(passingValeur);
  cardsInfoDetails.appendChild(dribbling);
  cardsInfoDetails.appendChild(dribblingValeur);
  cardsInfoDetails.appendChild(defending);
  cardsInfoDetails.appendChild(defendingValeur);
  cardsInfoDetails.appendChild(physical);
  cardsInfoDetails.appendChild(physicalValeur);
  cardsInfo.appendChild(cardsInfoDetails);
  let badge = document.createElement("img");
  badge.src = "./image/badge_ballon_dor.webp";
  badge.classList.add("badge");
  cardsInfo.appendChild(badge);
  let ajouterR = document.createElement("button");
  ajouterR.classList.add("visibilite");
  cardsInfo.appendChild(ajouterR);
  remplacant.appendChild(cardsInfo);
  let formule = event.target.parentElement;
  namePlayer.textContent = formule.querySelector(".nameInpt").value;
  logo.src = formule.querySelector(".equipe").value;
  photoPlayer.src = formule.querySelector(".photo").value;
  flagg.src = formule.querySelector(".nationalityI").value;
  rate.textContent = formule.querySelector(".rating").value;
  paceValeur.textContent = formule.querySelector(".paceI").value;
  shootingValeur.textContent = formule.querySelector(".shootingI").value;
  passingValeur.textContent = formule.querySelector(".passingI").value;
  dribblingValeur.textContent = formule.querySelector(".dribblingI").value;
  defendingValeur.textContent = formule.querySelector(".defendingI").value;
  physicalValeur.textContent = formule.querySelector(".physicalI").value;
  position.textContent = selectOption;
}

function addGkRemplace(event) {
  formInputs.forEach((input) => (input.value = ""));
  formInputsGk.forEach((input) => (input.value = ""));
  cardInputGkR.style.display = "none";
  addRemplacementGk.classList.remove("hidden");
  let cardsInfo = document.createElement("div");
  let position = document.createElement("div");
  position.classList.add("position");
  cardsInfo.appendChild(position);
  cardsInfo.classList.add("cardsInfo");
  let cardsInfoDetails = document.createElement("div");
  let namePlayer = document.createElement("div");
  namePlayer.classList.add("namePlayer");
  let photoPlayer = document.createElement("img");
  photoPlayer.classList.add("photoPlayer");
  let flagg = document.createElement("img");
  flagg.classList.add("flagg");
  let logo = document.createElement("img");
  logo.classList.add("logo");
  let rate = document.createElement("div");
  rate.classList.add("rate");
  let pace = document.createElement("p");
  pace.classList.add("pace");
  pace.textContent = "DIV";
  let paceValeur = document.createElement("div");
  paceValeur.classList.add("paceValeur");
  let shooting = document.createElement("p");
  shooting.textContent = "HAN";
  shooting.classList.add("shooting");
  let shootingValeur = document.createElement("div");
  shootingValeur.classList.add("shootingValeur");
  let passing = document.createElement("p");
  passing.textContent = "KIC";
  passing.classList.add("passing");
  let passingValeur = document.createElement("div");
  passingValeur.classList.add("passingValeur");
  let dribbling = document.createElement("p");
  dribbling.textContent = "REF";
  dribbling.classList.add("dribbling");
  let dribblingValeur = document.createElement("div");
  dribblingValeur.classList.add("dribblingValeur");
  let defending = document.createElement("p");
  defending.textContent = "SPE";
  defending.classList.add("defending");
  let defendingValeur = document.createElement("div");
  defendingValeur.classList.add("defendingValeur");
  let physical = document.createElement("p");
  physical.textContent = "POS";
  physical.classList.add("physical");
  let physicalValeur = document.createElement("div");
  physicalValeur.classList.add("physicalValeur");
  cardsInfoDetails.appendChild(namePlayer);
  cardsInfoDetails.appendChild(photoPlayer);
  cardsInfoDetails.appendChild(flagg);
  cardsInfoDetails.appendChild(logo);
  cardsInfoDetails.appendChild(rate);
  cardsInfoDetails.appendChild(pace);
  cardsInfoDetails.appendChild(paceValeur);
  cardsInfoDetails.appendChild(shooting);
  cardsInfoDetails.appendChild(shootingValeur);
  cardsInfoDetails.appendChild(passing);
  cardsInfoDetails.appendChild(passingValeur);
  cardsInfoDetails.appendChild(dribbling);
  cardsInfoDetails.appendChild(dribblingValeur);
  cardsInfoDetails.appendChild(defending);
  cardsInfoDetails.appendChild(defendingValeur);
  cardsInfoDetails.appendChild(physical);
  cardsInfoDetails.appendChild(physicalValeur);
  cardsInfo.appendChild(cardsInfoDetails);
  let badge = document.createElement("img");
  badge.src = "./image/badge_ballon_dor.webp";
  badge.classList.add("badge");
  cardsInfo.appendChild(badge);
  let ajouterR = document.createElement("button");
  ajouterR.classList.add("visibilite");
  cardsInfo.appendChild(ajouterR);
  remplacant.appendChild(cardsInfo);
  let formule = event.target.parentElement;
  namePlayer.textContent = formule.querySelector(".nameInpt").value;
  logo.src = formule.querySelector(".equipe").value;
  photoPlayer.src = formule.querySelector(".photo").value;
  flagg.src = formule.querySelector(".nationalityI").value;
  rate.textContent = formule.querySelector(".rating").value;
  paceValeur.textContent = formule.querySelector(".paceI").value;
  shootingValeur.textContent = formule.querySelector(".shootingI").value;
  passingValeur.textContent = formule.querySelector(".passingI").value;
  dribblingValeur.textContent = formule.querySelector(".dribblingI").value;
  defendingValeur.textContent = formule.querySelector(".defendingI").value;
  physicalValeur.textContent = formule.querySelector(".physicalI").value;
  position.textContent = "gk";
  cardInput.classList.add("hidden");
  cardInputGk.classList.add("hidden");
}
function opt(event) {
  selectOption = event.options[event.selectedIndex].textContent;
  return selectOption;
}
