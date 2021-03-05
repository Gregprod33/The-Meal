const ingredient = document.querySelector('.ingredient');
const btn = document.querySelector('#btn');
const footer = document.querySelector('footer');
let display = document.querySelector('#display-meals')

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
let video;
let choice;


const fetchRandom = async () => {
  await fetch(randomUrl)
  .then((res) => res.json())
  .then((data) => randomMeal = data.meals[0])
}
    btn.addEventListener('click', () => {
      const getRandom = async () => {
       await fetchRandom();
       footer.classList.remove("absolute");
       display.innerHTML = 
          `
          <div class="meals">
          <h1>${randomMeal.strMeal}</h1>
          <h2>${randomMeal.strArea}</h2>
          <p><img src=${randomMeal.strMealThumb}></p>
          <p>Instructions: ${randomMeal.strInstructions}</p>
          <p><a href="${randomMeal.strYoutube}" target="_blank"><i class="fas fa-play-circle fa-5x"></i></a>
          </div>
          `      
      }
      getRandom();   
    });
  


const fetchMeal = async () => {
  await fetch(url + choice)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));
};


const userChoice = ingredient.addEventListener('input', (event) => {
      choice = event.target.value;
      const getMeal = async () => {
        await fetchMeal();
        footer.classList.remove("absolute");
        display.innerHTML = meals
        .map(
          (meal) => 
            `
            <div class="meals">
            <h1>${meal.strMeal}</h1>
            <h2>${meal.strArea}</h2>
            <p><img src=${meal.strMealThumb}></p>
            <p>Instructions: ${meal.strInstructions}</p>
            <p><a href="${meal.strYoutube}" target="_blank"><i class="fas fa-play-circle fa-5x"></i></a>
            </div>
            `   
          )
      
        .join("");
      }
      getMeal();
})



     
    


