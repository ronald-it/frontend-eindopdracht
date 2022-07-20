import axios from "axios";
import createTableCalculatorCalories from "./createTableCalculatorCalories";
// Fetch data functie
const fetchDataCalculatorCalories = async (product, parentElement) => {
    console.log('fetch data script is running');
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
        const totalRow = document.createElement('tr');
        totalRow.setAttribute('class', 'total-row');
        totalRow.innerHTML = `
                    <td>Product</td>
                    <td>Calories</td>
                    <td>Fat</td>
                    <td>Carbs</td>`
        parentElement.appendChild(totalRow);
    } catch (err) {
        console.error(err)
    }
}
// Create Elements functie aanroepen en parameters toevoegen
// Catch block
export default fetchDataCalculatorCalories;