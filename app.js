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
        console.log(ingredientsList);
        result.innerHTML = `
        <img src=${userMeal.strMealThumb}>
        <div class="details">
          <h2>${userMeal.strMeal}</h2>
          <h4>${userMeal.strArea}</h4>
        </div>
        <div id="ingredient-con"></div>
        <div id="recipe">
          <button id="hide-recipe">x</button>
          <pre id="instructions">${userMeal.strInstructions}</pre>
        </div>
        <button id="show-recipe">View Recipe</button>`;

        let ingredientCon = document.getElementById("ingredient-con");
        let parent = document.createElement("ul");
        let recipe = document.getElementById("recipe");
        let hideRecipe = document.getElementById("hide-recipe");
        let showRecipe = document.getElementById("show-recipe");

        ingredientsList.forEach((ingredient) => {
          let child = document.createElement("li");
          child.innerText = ingredient;
          parent.appendChild(child);
          ingredientCon.appendChild(parent);
        });

        hideRecipe.addEventListener("click", () => {
          recipe.style.display = "none";
        });

        showRecipe.addEventListener("click", () => {
          recipe.style.display = "block";
        });
      })
      .catch(() => {
        result.innerHTML = `<h3>Invalid Input</h3>`;
      });
  }
});
document.getElementById("comment-form").addEventListener("submit" , function(event){
  event.preventDefault();
  let name=document.getElementById("name").value;
  let comment=document.getElementById("comment").value;
  if(name && comment){
    const commentDiv=document.createComment("div");
    commentDiv.innerHTML="<strong>"+ name + ":</strong" + comment;
    document.getElementById("comment").appendChild(commentDiv)
    document.getElementById("name").value="";
    document.getElementById("comment").value="";
  }
  else{
    alert("Name and Comment can't be empty!")
  }
});
