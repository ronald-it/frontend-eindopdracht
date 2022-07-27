import axios from "axios";
import createTableCalculatorSearch from "./createTableCalculatorSearch";

// Fetch data functie om de gegeven op te halen voor de eerste tabel op calculator page
const fetchDataCalculatorSearch = async (product) => {

    // console.log('fetch data script is running');

    //Opslaan van URI en endpoint
    const URI = 'https://api.edamam.com';
    const endpoint = '/api/food-database/v2/parser';
    const API_ID = 'ec73a27a';
    const API_KEY = ''

    // Try block

    try {
        // Response van request opslaan
        const response = await axios.get(`${URI}${endpoint}`,{
            params: {
                type: 'public',
                app_id: API_ID,
                app_key: API_KEY,
                ingr: product
                // upc: product ? product : null
            }
        });
        // console.log(response.data.parsed);
        // Create Elements functie aanroepen en parameters toevoegen
        createTableCalculatorSearch(response.data.parsed);

        // Catch block
    } catch (err) {
        console.error(err)
    }
}

export default fetchDataCalculatorSearch;