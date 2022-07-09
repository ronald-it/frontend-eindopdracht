import klokje  from "../assets/icons/time.png"

const createElement = (recipesArray) => {
    const recipeList = document.getElementById('inner-container-search-results');
    recipeList.replaceChildren();

    return recipesArray.map((entry) => {
        recipeList.innerHTML += `
        <a id="recipe-link" href="../recipepage.html">
            <div class="carousel-card-result">
                    <img class="carousel-card-image-result"
                         src="${entry.recipe.image}"
                         alt="Recipe image"/>
                    <br>
                    <div class="recipe-title-result">
                        <p>${entry.recipe.label}</p>
                    </div>
                    <br>
                    <div class="calories-ingredients-time-result">
                        <div class="calories-ingredients-div-result">
                            <p class="calories-number-result">${Math.round(entry.recipe.calories)}</p>
                            <p class="calories-text-result">Calories | </p>
                            <p class="ingredients-number-result">${entry.recipe.ingredients.length}</p>
                            <p class="ingredients-text-result">Ingredients</p>
                        </div>
                        <div class="time-image-div-result">
                            <img class="time-image-result" src="${klokje}" alt="time">
                            <p class="time-text-result">${entry.recipe.totalTime} min.</p>
                        </div>
                    </div>
            </div>
        </a>
        `
    })
}

export default createElement;