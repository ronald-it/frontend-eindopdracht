import klokje from "../assets/icons/time.png"

// De drie recepten in de carousel van de homepage visualiseren

const carouselCreator = (potatoArray) => {
    const recipeCardCarousel = document.getElementById('inner-container-carousel-id');
    recipeCardCarousel.replaceChildren();

    const randomizer = (Math.random() * 19)
    const rounder = Math.round(randomizer);
    // console.log(randomizer);
    // console.log(rounder);

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            const id = potatoArray[rounder].recipe.uri.split("_")[1];
            recipeCardCarousel.innerHTML += `<a id="recipe-link" href="../recipepage.html?id=${id}">
                    <div class="carousel-card-one">
                    <img class="carousel-card-image-one"
                         src="${potatoArray[rounder].recipe.image}"
                         alt="Food picture"/>
                    <br>
                    <div class="recipe-title-one">
                        <p>${potatoArray[rounder].recipe.label}</p>
                    </div>
                    <br>
                    <div class="calories-ingredients-time-one">
                        <div class="calories-ingredients-div">
                            <p class="calories-number">${Math.round(potatoArray[rounder].recipe.calories)}</p>
                            <p class="calories-text">Calories |</p>
                            <p class="ingredients-number">${potatoArray[rounder].recipe.ingredients.length}</p>
                            <p class="ingredients-text">Ingredients</p>
                        </div>
                        <div class="time-image-div">
                            <img class="time-image" src="${klokje}" alt="time">
                            <p class="time-text">${potatoArray[rounder].recipe.totalTime} min.</p>
                        </div>
                    </div>
                    </div>
                    </a>`
        } else if (i === 1) {
            if (rounder >= 2 && rounder <= 17) {
                const id = potatoArray[rounder + 1].recipe.uri.split("_")[1];
                recipeCardCarousel.innerHTML += `<a id="recipe-link" href="../recipepage.html?id=${id}">
                    <div class="carousel-card-two">
                    <img class="carousel-card-image-two"
                         src="${potatoArray[rounder + 1].recipe.image}"
                         alt="spaghetti"/>
                    <br>
                    <div class="recipe-title-two">
                        <p>${potatoArray[rounder + 1].recipe.label}</p>
                    </div>
                    <br>
                    <div class="calories-ingredients-time-two">
                        <div class="calories-ingredients-div">
                            <p class="calories-number">${Math.round(potatoArray[rounder + 1].recipe.calories)}</p>
                            <p class="calories-text">Calories |</p>
                            <p class="ingredients-number">${potatoArray[rounder + 1].recipe.ingredients.length}</p>
                            <p class="ingredients-text">Ingredients</p>
                        </div>
                        <div class="time-image-div">
                            <img class="time-image" src="${klokje}" alt="time">
                            <p class="time-text">${potatoArray[rounder + 1].recipe.totalTime} min.</p>
                        </div>
                    </div>
                    </div>
                    </a>`
            } else if (rounder < 2) {
                const id = potatoArray[rounder + 1].recipe.uri.split("_")[1];
                recipeCardCarousel.innerHTML += `<a id="recipe-link" href="../recipepage.html?id=${id}">
                    <div class="carousel-card-two">
                    <img class="carousel-card-image-two"
                         src="${potatoArray[rounder + 1].recipe.image}"
                         alt="spaghetti"/>
                    <br>
                    <div class="recipe-title-two">
                        <p>${potatoArray[rounder + 1].recipe.label}</p>
                    </div>
                    <br>
                    <div class="calories-ingredients-time-two">
                        <div class="calories-ingredients-div">
                            <p class="calories-number">${Math.round(potatoArray[rounder + 1].recipe.calories)}</p>
                            <p class="calories-text">Calories |</p>
                            <p class="ingredients-number">${potatoArray[rounder + 1].recipe.ingredients.length}</p>
                            <p class="ingredients-text">Ingredients</p>
                        </div>
                        <div class="time-image-div">
                            <img class="time-image" src="${klokje}" alt="time">
                            <p class="time-text">${potatoArray[rounder + 1].recipe.totalTime} min.</p>
                        </div>
                    </div>
                    </div>
                    </a>`
            } else if (rounder > 17) {
                const id = potatoArray[rounder - 1].recipe.uri.split("_")[1];
                recipeCardCarousel.innerHTML += `<a id="recipe-link" href="../recipepage.html?id=${id}">
                    <div class="carousel-card-two">
                    <img class="carousel-card-image-two"
                         src="${potatoArray[rounder - 1].recipe.image}"
                         alt="spaghetti"/>
                    <br>
                    <div class="recipe-title-two">
                        <p>${potatoArray[rounder - 1].recipe.label}</p>
                    </div>
                    <br>
                    <div class="calories-ingredients-time-two">
                        <div class="calories-ingredients-div">
                            <p class="calories-number">${Math.round(potatoArray[rounder - 1].recipe.calories)}</p>
                            <p class="calories-text">Calories |</p>
                            <p class="ingredients-number">${potatoArray[rounder - 1].recipe.ingredients.length}</p>
                            <p class="ingredients-text">Ingredients</p>
                        </div>
                        <div class="time-image-div">
                            <img class="time-image" src="${klokje}" alt="time">
                            <p class="time-text">${potatoArray[rounder - 1].recipe.totalTime} min.</p>
                        </div>
                    </div>
                    </div>
                    </a>`
            }
        } else if (i === 2) {
            if (rounder >= 2 && rounder <= 17) {
                const id = potatoArray[rounder + 2].recipe.uri.split("_")[1];
                recipeCardCarousel.innerHTML += `<a id="recipe-link" href="../recipepage.html?id=${id}">
                    <div class="carousel-card-three">
                    <img class="carousel-card-image-three"
                         src="${potatoArray[rounder + 2].recipe.image}"
                         alt="spaghetti"/>
                    <br>
                    <div class="recipe-title-three">
                        <p>${potatoArray[rounder + 2].recipe.label}</p>
                    </div>
                    <br>
                    <div class="calories-ingredients-time-three">
                        <div class="calories-ingredients-div">
                            <p class="calories-number">${Math.round(potatoArray[rounder + 2].recipe.calories)}</p>
                            <p class="calories-text">Calories |</p>
                            <p class="ingredients-number">${potatoArray[rounder + 2].recipe.ingredients.length}</p>
                            <p class="ingredients-text">Ingredients</p>
                        </div>
                        <div class="time-image-div">
                            <img class="time-image" src="${klokje}" alt="time">
                            <p class="time-text">${potatoArray[rounder + 2].recipe.totalTime} min.</p>
                        </div>
                    </div>
                    </div>
                    </a>`
            } else if (rounder < 2) {
                const id = potatoArray[rounder + 2].recipe.uri.split("_")[1];
                recipeCardCarousel.innerHTML += `<a id="recipe-link" href="../recipepage.html?id=${id}">
                    <div class="carousel-card-three">
                    <img class="carousel-card-image-three"
                         src="${potatoArray[rounder + 2].recipe.image}"
                         alt="spaghetti"/>
                    <br>
                    <div class="recipe-title-three">
                        <p>${potatoArray[rounder + 2].recipe.label}</p>
                    </div>
                    <br>
                    <div class="calories-ingredients-time-three">
                        <div class="calories-ingredients-div">
                            <p class="calories-number">${Math.round(potatoArray[rounder + 2].recipe.calories)}</p>
                            <p class="calories-text">Calories |</p>
                            <p class="ingredients-number">${potatoArray[rounder + 2].recipe.ingredients.length}</p>
                            <p class="ingredients-text">Ingredients</p>
                        </div>
                        <div class="time-image-div">
                            <img class="time-image" src="${klokje}" alt="time">
                            <p class="time-text">${potatoArray[rounder + 2].recipe.totalTime} min.</p>
                        </div>
                    </div>
                    </div>
                    </a>`
            }
            else if (rounder > 17) {
                const id = potatoArray[rounder - 2].recipe.uri.split("_")[1];
                recipeCardCarousel.innerHTML += `<a id="recipe-link" href="../recipepage.html?id=${id}">
                    <div class="carousel-card-three">
                    <img class="carousel-card-image-three"
                         src="${potatoArray[rounder - 2].recipe.image}"
                         alt="spaghetti"/>
                    <br>
                    <div class="recipe-title-three">
                        <p>${potatoArray[rounder - 2].recipe.label}</p>
                    </div>
                    <br>
                    <div class="calories-ingredients-time-three">
                        <div class="calories-ingredients-div">
                            <p class="calories-number">${Math.round(potatoArray[rounder - 2].recipe.calories)}</p>
                            <p class="calories-text">Calories |</p>
                            <p class="ingredients-number">${potatoArray[rounder - 2].recipe.ingredients.length}</p>
                            <p class="ingredients-text">Ingredients</p>
                        </div>
                        <div class="time-image-div">
                            <img class="time-image" src="${klokje}" alt="time">
                            <p class="time-text">${potatoArray[rounder - 2].recipe.totalTime} min.</p>
                        </div>
                    </div>
                    </div>
                    </a>`}
        }
        // console.log(i);
    }
    // console.log(recipeCardCarousel);
    return recipeCardCarousel;
}

export default carouselCreator;