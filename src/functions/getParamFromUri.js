import fetchDataRecipePage from "./fetchDataRecipePage";

 document.addEventListener("DOMContentLoaded", (event) => {

    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    event.preventDefault();
    fetchDataRecipePage(id);
})