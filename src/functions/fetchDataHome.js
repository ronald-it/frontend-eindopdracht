import axios from "axios";
import createRecipeCardHome from "./createRecipeCardHome";
// Fetch data functie
const fetchDataHome = async (ingredient, mealType, cuisineType, diet, time) => {
    // console.log('fetch data script is running');
    // console.log(ingredient);
    // console.log(mealType);
    // console.log(cuisine);
    // console.log(diet);
    // console.log(time);
    //Opslaan van URI en endpoint
    const URI = 'https://api.edamam.com';
    const endpoint = '/api/recipes/v2';
    const API_ID = '44920bbe';
    const API_KEY = 'e0b07558906ed952fb1226ace4bc0227'
    // Try block
    try {
        // Response van request opslaan
        const response = await axios.get(`${URI}${endpoint}`,{
            params: {
                type: 'public',
                app_id: API_ID,
                app_key: API_KEY,
                q: ingredient,
                mealType: mealType,
                cuisineType: cuisineType,
                diet: diet,
                time: time
            }
        });
        // console.log(response.data.hits);
        createRecipeCardHome(response.data.hits);
    } catch (err) {
        console.error(err)
    }
}
// Create Elements functie aanroepen en parameters toevoegen
// Catch block
export default fetchDataHome;