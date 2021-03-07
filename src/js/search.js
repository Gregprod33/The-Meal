
const fetchMeal = async () => {
    await fetch(url + choice)
      .then(res => res.json())
      .then(data => meals = data.meals);  
  };
  
  
  const getMeal = async () => {
    await fetchMeal();
    footer.classList.remove("absolute");
    //Récupération des ingrédients
    // meals.map((meal) => {
    //   const ingredients = [];
    //   for (let i = 1; i <= 20; i++) {
    //     dish = meal[`strIngredient${i}`];
    //     measure = meal[`strMeasure${i}`];
    //     if (dish) {
    //     ingredients.push(`${dish} - ${measure}`)
    //     } else {
    //       break;
    //     }
    //  }
    //  console.log(ingredients);
     display.innerHTML = meals.map(e =>
      `
      <div class="meals">
      <h1>${e.strMeal}</h1>
      <h2>${e.strArea}</h2>
      <p><img src=${e.strMealThumb}></p>
      <p><span>Instructions:</span><br> ${e.strInstructions}</p>
      <p><a href="${e.strYoutube}" target="_blank"><i class="fas fa-play-circle fa-5x"></i></a>
      </div>
      `   
      )
  }
  
  
          ingredient.addEventListener('input', (event) => {
          choice = event.target.value;
          getMeal();
        })
       