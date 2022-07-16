import axios from "axios";
import createTableCalculatorSearch from "./createTableCalculatorSearch";

// Fetch data functie
const fetchDataCalculatorSearch = async (product) => {

    console.log('fetch data script is running');

    //Opslaan van URI en endpoint
    const URI = 'https://api.edamam.com';
    const endpoint = '/api/food-database/v2/parser';
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
                q: product
            }
        });
        // console.log(response.data.hits);
        createTableCalculatorSearch(response.data.hits);
    } catch (err) {
        console.error(err)
    }
}
// Create Elements functie aanroepen en parameters toevoegen
// Catch block
export default fetchDataCalculatorSearch;