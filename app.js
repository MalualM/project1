let result = document.querySelector('#result');
let apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener('click', () => {
  let userInput = document.getElementById("user-input").value;

  if (userInput.length === 0) {
    result.innerHTML = `<h3>Input can't be empty</h3>`;
  } else{
    fetch(apiUrl + userInput)
    .then(res => res.json())
    .then(data => {
      let userMeal = data.meals[0];
      let count = 1;
        let ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
          let ingredient = userMeal['strIngredient' + i];
          let measure = userMeal['strMeasure' + i];

          if (ingredient) {
            ingredientsList.push(`${measure} ${ingredient}`);
          }
        }
        console.log(ingredientsList)
  }
