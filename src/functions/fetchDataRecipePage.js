import axios from "axios";

const fetchDataRecipePage = async (id) => {
    const URI = 'https://api.edamam.com';
    const endpoint = '/api/recipes/v2';
    const API_ID = '44920bbe';
    const API_KEY = 'e0b07558906ed952fb1226ace4bc0227'

    try {
        const response = await axios.get(`${URI}${endpoint}${id}`, {
            params: {
                type: 'public',
                app_id: API_ID,
                app_key: API_KEY
            }
        });

        createRecipePage(response.data);
        console.log(id)

    } catch (err) {
        console.error(err);
    }
}

export default fetchDataRecipePage;