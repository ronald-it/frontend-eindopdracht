import klokje from "../assets/icons/time.png"

const createRecipePage = (recipe) => {
    const recipeInfo = document.getElementById('inner-container-main-recipe')
    recipeInfo.replaceChildren();

    recipeInfo.innerHTML = `        <div class="title-and-time-image">
            <h2 class="recipe-name">${recipe.recipe.label}</h2>
            <div class="time-image-div-recipe">
                <img class="time-image-recipe" src="${klokje}" alt="time">
                <p class="time-text-recipe-number">${recipe.recipe.totalTime}</p>
                <p class="time-text-recipe-minutes">min.</p>
            </div>
        </div>
        <div class="recipe-text-and-image">
            <div class="recipe-instructions">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices venenatis mauris in
                    ultrices. Sed nec tristique leo. Praesent luctus elit et pulvinar sagittis. Suspendisse suscipit
                    arcu quis libero rutrum posuere. Aliquam facilisis dapibus nunc, nec aliquet sapien congue at. Morbi
                    tempus massa purus, et ultricies eros egestas at. Phasellus a pharetra nibh, ac imperdiet arcu.
                    Suspendisse sollicitudin laoreet lectus.
                </p>
                <br>
                <p>
                    Vivamus ullamcorper ultrices tortor, ut maximus velit facilisis ac. Nullam ac est diam. Nullam eget
                    sapien eu est volutpat auctor ac posuere neque. Pellentesque condimentum turpis erat, sed elementum
                    diam sodales vitae. Nullam semper quis nulla eget ullamcorper. Quisque pretium aliquet nunc at
                    interdum. Pellentesque accumsan magna dignissim, sodales nibh at, condimentum mauris. Donec ac
                    semper urna. Nam ut neque.
                </p>
            </div>
            <div class="recipe-picture">
                <img class="recipe-image"
                     src="${recipe.recipe.image}"
                     alt="Recipe image"/>
            </div>
        </div>`

    const recipeIngredientsAndNutrients = document.createElement('div')
    recipeIngredientsAndNutrients.setAttribute('class', 'recipe-ingredients-and-nutrients');

    const ingredientsList = document.createElement('div');
    ingredientsList.setAttribute('class', 'recipe-ingredients');
    recipeIngredientsAndNutrients.appendChild(ingredientsList);

    const recipeIngredientsTitle = document.createElement('h3');
    recipeIngredientsTitle.setAttribute('class', 'recipe-ingredients-title');
    recipeIngredientsTitle.textContent = 'Ingredients';
    ingredientsList.appendChild(recipeIngredientsTitle);

    const breakLine = document.createElement('br');
    breakLine.setAttribute('class', 'breakLine');
    ingredientsList.appendChild(breakLine);

    const ingredientsUl = document.createElement('ul')
    ingredientsUl.setAttribute('class', 'ingredients-ul');
    for (let i = 0; i < recipe.recipe.ingredientLines.length; i++) {
        ingredientsUl.innerHTML += `<li>${recipe.recipe.ingredientLines[i]}</li>`;
    }
    ingredientsList.appendChild(ingredientsUl);

    const recipeNutrients = document.createElement('div');
    recipeNutrients.setAttribute('class', 'recipe-nutrients');
    recipeIngredientsAndNutrients.appendChild(recipeNutrients);

    const nutrientsTitle = document.createElement('h3');
    nutrientsTitle.setAttribute('class', 'recipe-nutrients-title');
    nutrientsTitle.textContent = 'Nutrients';
    recipeNutrients.appendChild(nutrientsTitle);

    const nutrientsTablediv = document.createElement('div');
    nutrientsTablediv.setAttribute('class', 'recipe-nutrients-table');
    recipeNutrients.appendChild(nutrientsTablediv);

    const nutrientsTable = document.createElement('table');
    nutrientsTable.setAttribute('class', 'table-of-nutrients');
    nutrientsTable.innerHTML = `                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Energy</td>
                            <td>${Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}</td>
                            <td>kcal</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>${Math.round(recipe.recipe.totalNutrients.FAT.quantity)}</td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td>Carbs</td>
                            <td>${Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)}</td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>${Math.round(recipe.recipe.totalNutrients.SUGAR.quantity)}</td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>${Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)}</td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td>${Math.round(recipe.recipe.totalNutrients.NA.quantity)}</td>
                            <td>mg</td>
                        </tr>
                        </tbody>`
    nutrientsTablediv.appendChild(nutrientsTable);

    const healthLabelDivs = document.createElement('div');
    healthLabelDivs.setAttribute('class', 'recipe-health-labels-div');

    const healthLabelTitle = document.createElement('h3');
    healthLabelTitle.setAttribute('class', 'recipe-health-labels-title');
    healthLabelTitle.textContent = 'Health labels'
    healthLabelDivs.appendChild(healthLabelTitle);

    const healthLabel = document.createElement('div');
    healthLabel.setAttribute('class', 'recipe-health-labels');
    for (let i = 0; i < recipe.recipe.healthLabels.length; i++) {
        healthLabel.innerHTML += `<p>${recipe.recipe.healthLabels[i]}</p>`
    }
    healthLabelDivs.appendChild(healthLabel)

    recipeInfo.appendChild(recipeIngredientsAndNutrients);
    recipeInfo.appendChild(healthLabelDivs);

    return recipeInfo;
}

export default createRecipePage;