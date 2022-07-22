import axios from "axios";
import createTableCalculatorAdd from "./createTableCalculatorAdd";

// Fetch data functie om de gegevens op te halen voor de onderste tabel calculator page
const fetchDataCalculatorAdd = async (product) => {

    // console.log('fetch data script is running');

    //Opslaan van URI en endpoint
    const URI = 'https://api.edamam.com';
    const endpoint = '/api/food-database/v2/parser';
    const API_ID = 'ec73a27a';
    const API_KEY = '270cc5a42e9022d3b8f92f30feed3e6e'

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
        createTableCalculatorAdd(response.data.parsed);

        // Catch block
    } catch (err) {
        console.error(err)
    }
}

export default fetchDataCalculatorAdd;