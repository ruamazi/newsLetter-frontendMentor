const submitBtn = document.getElementById("sub-btn");
const backBtn = document.getElementById("back-btn");
const inputF = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const mainPage = document.getElementById("main");
const secondPage = document.getElementById("second");
const span = document.getElementById("span-text");

errorMessage.classList.add("hidden");
inputF.classList.remove("error-input");

submitBtn.addEventListener("click", () => {
  const val = document.querySelector("input").value;
  if (val.trim() === "" || !val.includes("@")) {
    errorMessage.classList.remove("hidden");
    inputF.classList.add("error-input");
  } else {
    errorMessage.classList.add("hidden");
    inputF.classList.remove("error-input");
    secondPage.classList.remove("hidden");
    mainPage.classList.add("hidden");
    span.innerHTML = val;
    document.querySelector("input").value = "";
  }
});

backBtn.addEventListener("click", () => {
  secondPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
});
