function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10
// let cijfer = Math.floor(Math.random() * 11);
function Cijfer(opdracht, cijfer) {
    let cijferObj = this;
    cijferObj.opdracht = opdracht;
    (cijfer <= 10 && cijfer >= 0)
    ? cijferObj.cijfer = cijfer
    : cijferObj.cijfer = 0 
}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
let Opdracht1 = new Opdracht('FRO','opdracht1');
let Opdracht2 = new Opdracht('FRO','opdracht2');
let Opdracht3 = new Opdracht('FRO','opdracht3');
let Opdracht4 = new Opdracht('Java', 'odpracht4')
let Opdracht5 = new Opdracht('Java','opdracht5');
let Opdracht6 = new Opdracht('Java','opdracht6');
let Opdracht7 = new Opdracht('CMS','opdracht7');
let Opdracht8 = new Opdracht('CMS','opdracht8');
let Opdracht9 = new Opdracht('CMS','opdracht9');

let cijfer1 = new  Cijfer(Opdracht1, 10);
let cijfer2 = new  Cijfer(Opdracht2, 9);
let cijfer3 = new  Cijfer(Opdracht3, 7);
let cijfer4 = new  Cijfer(Opdracht4, 7);
let cijfer5 = new  Cijfer(Opdracht5, 6);
let cijfer6 = new  Cijfer(Opdracht6, 6);
let cijfer7 = new  Cijfer(Opdracht7, 9);
let cijfer8 = new  Cijfer(Opdracht8, 6);
let cijfer9 = new  Cijfer(Opdracht9, 9);
// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [Opdracht1, Opdracht2, Opdracht3, Opdracht4, Opdracht5, Opdracht6, Opdracht7, Opdracht8, Opdracht9];
let cijfers = [cijfer1, cijfer2, cijfer3, cijfer4, cijfer5, cijfer6, cijfer7, cijfer8, cijfer9];

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie
let periode1 = new Periode(opdrachten, cijfers);
console.log(periode1);

function Periode (opdrachten, cijfers) {
    let id = document.getElementById('json');
    
    let applicationData  = "application/json;charset=utf-8,"
    + encodeURIComponent(JSON.stringify(periode1));

    let json       = document.createElement('a');
    json.href      = 'data:' + applicationData;
    json.download  = 'json.json';
    json.innerHTML = 'Ready to download your json file';

    id.appendChild(json);

    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}
function requestListener () {
    let obj = JSON.parse(this.responseText);
    periode1 = obj.slice();
}

function createGetRequest() {
    let request = new XMLHttpRequest();
    request.addEventListener("load", requestListener);
    request.open("GET", "data/json.json", false);
    request.send();
}

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft

createGetRequest();

