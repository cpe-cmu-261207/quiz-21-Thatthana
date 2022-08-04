const divUserCard = document.getElementById("div-user-card");
const btnRandom = document.querySelector("#btn-random");
const divLoadingCard = document.getElementById("div-loading-card");
const spanGenderIcon = document.querySelector("#btn-random");

Element.style.display = "none";
async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

Element.style.display = " ";
