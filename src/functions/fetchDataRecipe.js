import axios from "axios";

// Fetch data functie

const fetchDataRecipe = async () => {
    // console.log('fetch data script is running');

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
                q: "carrot"
            }

        });
        // Create Elements functie aanroepen en parameters toevoegen
        console.log(response.data.hits[0].recipe.uri);
        const uri = response.data.hits[0].recipe.uri;
        const id = uri.split("_")[1];
        console.log(id);

        // Catch block

    } catch (err) {
        console.error(err)
    }

}

fetchDataRecipe();

export default fetchDataRecipe;