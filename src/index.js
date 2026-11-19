function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let apiKey = "73c8oabb640f490516db1tc6ac71625f";
  let context =
    "You are an expert recipe developer who can provide well written recipes using ingredient, dish, or type of dish. Your misson is to develop a recipe based on what the user input value is below. Please generate a recipe in basic html";
  let prompt = `Generate a recipe for a ${userInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generator-message">Your ${userInput.value} recipe will be with you soon!<div class="spinner"></div></div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
