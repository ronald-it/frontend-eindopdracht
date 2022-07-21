import axios from "axios";

let totalCalories = 0;
let totalFat = 0;
let totalCarbs = 0;

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

        const createTableCalculatorCalories = (product) => {

            const servingInput = document.getElementById('amount-calculator').value;

            return product[0].food.nutrients.ENERC_KCAL * servingInput;
        }

        const createTableCalculatorFat = (product) => {

            const servingInput = document.getElementById('amount-calculator').value;

            return product[0].food.nutrients.FAT * servingInput;
        }

        const createTableCalculatorCarbs = (product) => {

            const servingInput = document.getElementById('amount-calculator').value;

            return product[0].food.nutrients.CHOCDF * servingInput;
        }

        totalCalories += createTableCalculatorCalories(response.data.parsed);
        totalFat += createTableCalculatorFat(response.data.parsed);
        totalCarbs += createTableCalculatorCarbs(response.data.parsed);

        console.log(totalCalories);
        console.log(totalFat);
        console.log(totalCarbs);
        console.log(createTableCalculatorCalories(response.data.parsed));
        console.log(createTableCalculatorFat(response.data.parsed));
        console.log(createTableCalculatorCarbs(response.data.parsed));

        return await [totalCalories, totalFat, totalCarbs];

    } catch (err) {
        console.error(err)
    }
}
// Create Elements functie aanroepen en parameters toevoegen
// Catch block
export default fetchDataCalculatorCalories;