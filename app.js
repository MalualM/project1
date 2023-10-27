let result = document.querySelector('#result');
let apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
let searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener('click', () => {
  let userInput = document.getElementById("user-input").value;

  if (userInput.length === 0) {
    result.innerHTML = `<h3>Input can't be empty</h3>`;
  } 
