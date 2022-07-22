import fetchDataRecipePage from "./fetchDataRecipePage";

// Event listener met als event DOMContentLoaded

 document.addEventListener("DOMContentLoaded", (event) => {

    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    event.preventDefault();
    fetchDataRecipePage(id);
})