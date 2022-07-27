Dit is de installatiehandleiding voor de applicatie. De applicatie heeft drie verschillende pagina´s, een homepage, een recipepage en een calculator page. Op de homepage kan men een recept of ingrediënt invullen in de zoekbalk en/of op basis van gerechtstype, keuken, dieet en/of bereidingstijd een zoekactie maken. Hierbij verschijnen bij geldige input 20 receptenkaarten waarop men kan klikken om op unieke recipepages te komen. Ook kan men klikken op een van de drie receptenkaarten in de carousel boven de zoekbalk. Op de recipepages staan de unieke gegevens van de desbetreffende recepten. Als laatst kan men op de calculator page een of meer producten invullen, op zoeken (search) klikken en vervolgens de product(en) toevoegen aan de calculator tabel door een portiegrootte in te vullen en op toevoegen (add) te klikken. Hieronder is een screenshot van de belangrijkste pagina, de homepage.

![Screenshot belangrijkste pagina](/designs/homepage.jpg "Screenshot belangrijkste pagina")

Om deze applicatie te kunnen gebruiken, zullen er eerst wat stappen genomen moeten worden om de installatie te voltooien.
In ieder geval moet de gebruiker van deze applicatie het programma Webstorm installeren en verder is ook node.js nodig.
Webstorm en node.js kunnen via de onderstaande twee links gedownload en vervolgens geïnstalleerd worden:

https://www.jetbrains.com/webstorm/

https://nodejs.org/en/download/

Zodra dit gelukt is en het project is geladen in Webstorm, moet er in de terminal npm install ingevoerd worden en op enter gedrukt worden.

Nu zijn er alleen nog API keys nodig in bepaalde Javascript bestanden, die ervoor zorgen dat er data opgehaald kan worden uit de Edamam API (voedsel/recepten/ingrediënten database).
De volgende API keys moeten tussen de aanhalingstekens achter const API_KEY worden geplaatst in de volgende bestanden:

fetchDataCalculatorAdd: 270cc5a42e9022d3b8f92f30feed3e6e

fetchDataCalculatorCalories: 270cc5a42e9022d3b8f92f30feed3e6e

fetchDataCalculatorSearch: 270cc5a42e9022d3b8f92f30feed3e6e

fetchDataCarousel: e0b07558906ed952fb1226ace4bc0227

fetchDataHome: e0b07558906ed952fb1226ace4bc0227

fetchDataRecipePage: e0b07558906ed952fb1226ace4bc0227

Als deze API keys zijn ingevuld op de juiste plekken in de juiste bestanden, kan de applicatie gestart worden door middel van het commando npm run start te typen in de terminal (linksonderin is er een knop om bij de terminal te komen) en op enter te drukken. Vervolgens kan er op de (normaal gesproken) groene localhost link geklikt worden die in de terminal verschijnt. Dit zal een venster openen in de browser en zorgt ervoor dat de homepage geladen wordt.