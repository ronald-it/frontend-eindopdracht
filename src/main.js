import axios from 'axios';

// Receptkaarten als resultaten van de search bar input
import './functions/handleClickHome';
import fetchDataHome from "./functions/fetchDataHome";
import createRecipeCardHome from "./functions/createRecipeCardHome";

// Receptkaarten binnen de carousel
import fetchDataCarousel from "./functions/fetchDataCarousel";
import createCarouselHome from "./functions/createCarouselHome";

// Recipe page
import './functions/getParamFromUri';
import fetchDataRecipePage from "./functions/fetchDataRecipePage";
import createRecipePage from "./functions/createRecipePage";

// Product tabel Calculator page
import './functions/handleClickCalculator';
import fetchDataCalculatorSearch from "./functions/fetchDataCalculatorSearch";
import createTableCalculatorSearch from "./functions/createTableCalculatorSearch";