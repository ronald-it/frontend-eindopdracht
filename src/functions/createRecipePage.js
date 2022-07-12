import klokje from "../assets/icons/time.png"

const createRecipePage = (recipe) => {
    const recipeInfo = document.getElementById('inner-container-main-recipe')
    recipeInfo.replaceChildren();

    recipeInfo.innerHTML = `        <div class="title-and-time-image">
            <h2 class="recipe-name">Recipe Name Here</h2>
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
                     src="https://www.giallozafferano.com/images/228-22832/spaghetti-with-tomato-sauce_1200x800.jpg"
                     alt="spaghetti"/>
            </div>
        </div>
        <div class="recipe-ingredients-and-nutrients">
            <div class="recipe-ingredients">
                <h3 class="recipe-ingredients-title">Ingredients</h3>
                <br>
                <ul class="ingredients-ul">
                    <li>1/4 Pellentesque condimentum quam</li>
                    <li>1 Phasellus sit amet</li>
                    <li>1 In posuere nisi</li>
                    <li>1/2 Nunc mattis mauris id massa</li>
                    <li>4 Pellentesque condimentum quam</li>
                    <li>1 Ut malesuada diam</li>
                    <li>1/4 Phasellus efficitur</li>
                    <li>2 Cras non elit id ipsum fermentum</li>
                </ul>
            </div>
            <div class="recipe-nutrients">
                <h3 class="recipe-nutrients-title">Nutrients</h3>
                <div class="recipe-nutrients-table">
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Energy</td>
                            <td>1080</td>
                            <td>kcal</td>
                        </tr>
                        <tr>
                            <td>Fat</td>
                            <td>80</td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td>Carbs</td>
                            <td>56</td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>20</td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>15</td>
                            <td>g</td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td>1900</td>
                            <td>mg</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="recipe-health-labels-div">
            <h3 class="recipe-health-labels-title">Health labels</h3>
            <div class="recipe-health-labels">
                <p>Peanut-Free</p>
                <p>Kidney-Friendly</p>
                <p>Egg-Free</p>
                <p>Peanut-Free</p>
                <p>Soy-Free</p>
                <p>Fish Free</p>
                <p>Shellfish-Free</p>
                <p>Tree-Nut-Free</p>
            </div>
        </div>`

    return recipeInfo;
}

export default createRecipePage;