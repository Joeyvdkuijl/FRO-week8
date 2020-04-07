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
let cijfer = Math.floor(Math.random() * 11);
function Cijfer(opdracht, cijfer) {
    let Opcf = this;

    Opcf.opdracht = opdracht;
    Opcf.cijfer = cijfer;
}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
let Opdracht1 = new Opdracht('FRO','opdracht1');
let Opdracht2 = new Opdracht('FRO','opdracht2');
let Opdracht3 = new Opdracht('FRO','opdracht3');
let Opdracht5 = new Opdracht('Java','opdracht4');
let Opdracht6 = new Opdracht('Java','opdracht5');
let Opdracht7 = new Opdracht('Java','opdracht6');
let Opdracht8 = new Opdracht('CMS','opdracht7');
let Opdracht9 = new Opdracht('CMS','opdracht8');
let Opdracht10 = new Opdracht('CMS','opdracht9');

let cijfer1 = new  Cijfer(Opdracht1, 1);
let cijfer2 = new  Cijfer(Opdracht2, 2);
let cijfer3 = new  Cijfer(Opdracht3, 3);
let cijfer4 = new  Cijfer(Opdracht4, 4);
let cijfer5 = new  Cijfer(Opdracht5, 5);
let cijfer6 = new  Cijfer(Opdracht6, 6);
let cijfer7 = new  Cijfer(Opdracht7, 7);
let cijfer8 = new  Cijfer(Opdracht8, 8);
let cijfer9 = new  Cijfer(Opdracht9, 9);
let cijfer10 = new  Cijfer(Opdracht10, 10);
// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [Opdracht1, Opdracht2, Opdracht3, Opdracht4, Opdracht5, Opdracht6, Opdracht7, Opdracht8, Opdracht9, Opdracht10];
let cijfers = [cijfer1, cijfer2, cijfer3, cijfer4, cijfer5, cijfer6, cijfer7, cijfer8, cijfer9, cijfer10];

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft

