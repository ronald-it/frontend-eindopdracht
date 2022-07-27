import axios from "axios";
import createRecipeCardHome from "./createRecipeCardHome";

// Fetch data functie om de recipe cards te maken voor de input van de zoekbalk

const fetchDataHome = async (ingredient, mealType, cuisineType, diet, time) => {
    console.log('fetch data script is running');

    //Opslaan van URI en endpoint
    const URI = 'https://api.edamam.com';
    const endpoint = '/api/recipes/v2';
    const API_ID = '44920bbe';
    const API_KEY = ''
    // Try block
    try {
        // Response van request opslaan
        const response = await axios.get(`${URI}${endpoint}`,{
            params: {
                type: 'public',
                app_id: API_ID,
                app_key: API_KEY,
                q: ingredient,
                mealType: mealType ? mealType : null,
                cuisineType: cuisineType ? cuisineType : null,
                diet: diet ? diet : null,
                time: time ? time : null,
            }
        });
        // console.log(response.data.hits);
        // Create Elements functie aanroepen en parameters toevoegen
        createRecipeCardHome(response.data.hits);

        // Catch block
    } catch (err) {
        console.error(err)
    }
}

export default fetchDataHome;