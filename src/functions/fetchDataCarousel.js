import axios from "axios";
import createCarouselHome from "./createCarouselHome";

// Fetch data functie om gegevens op te halen om de carousel kaartjes op homepage te kunnen maken

const fetchDataCarousel = async () => {
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
                q: "teriyaki"
            }

        });
        // console.log(response.data.hits);
        // Create Elements functie aanroepen en parameters toevoegen
        createCarouselHome(response.data.hits);

        // Catch block
    } catch (err) {
        console.error(err)
    }
}

fetchDataCarousel();

export default fetchDataCarousel;