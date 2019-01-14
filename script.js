// EXERCICE 1.1 //
function showInterface() {
  let interface = document.createElement("div");
  document.body.appendChild(interface);
  let h1 = document.createElement("h1");
  h1.textContent = "Cinéma Le Dauphin";
  interface.appendChild(h1);
  let p = document.createElement("p");
  p.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi).";
  interface.appendChild(p);
  let btn = document.createElement("input");
  btn.type = "button";
  btn.value = "Voir les films à l’affiche cette semaine";
  interface.appendChild(btn);
}
showInterface();
// 1.2
let header = ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"];

let movie1 = ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"];
let movie2 = ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"];
let movie3 = ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervivostfrni", "Etats-Unis/Italie", "2018", "2h03", "vostfr"];
let movie4 = ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"];
let movies = [header, movie1, movie2, movie3, movie4];

// 1.3
function createArray(array, haveAHeader) {
  let table = document.createElement("table");
  let tr;
  let i = 0;
  let j;
  if (haveAHeader) {
    tr = document.createElement("tr");
    while (i < array[0].length) {
      tr.innerHTML += "<th>" + array[0][i] + "</th>";
      i = i + 1;
    }
    table.appendChild(tr);
    i = 1;
  }
  while (i < array.length) {
    tr = document.createElement("tr");
    j = 0;
    while (j < array[i].length) {
      tr.innerHTML += "<td>" + array[i][j] + "</td>";
      j = j + 1;
    }
    table.appendChild(tr);
    i = i + 1;
  }
  return table;
}
// 1.4
btn.addEventListener("click", display, false);

function display() {
  interface.style.display = "none";
  createArray(array);
  return table;
}
// EXERCICE 2.1 //
let header = ["SUBSTANCES", "Température de fusion ousolidification en °C", "Température d’ébullition en °C"];

let stuff1 = ["acide acétique", "17", "118"];
let stuff2 = ["acide nitrique", "-41", "86"];
let stuff3 = ["acide sulfurique", "10", "290"];
let stuff4 = ["alcool éthylique", "-114", "78"];
let stuff5 = ["aluminium", "660", "2450"];

let stuff = [header, stuff1, stuff2, stuff3, stuff4, stuff5];

// 2.2
function lowerBoilingTemp(array, 500) {
  let i = 0;
  let j;
  let currentElement;
  let lowerBoilingTempArray = [];
  currentElement = stuff[i];
  i = i + 1;
  j = 0;
  while (j < currentElement.length) {
    if (currentElement[j] < 500) {
      lowerBoilingTempArray.push(currentElement);
    }
    j = j + 1;
  }
  console.log(currentElement + "°C");
}
return lowerBoilingTemp;
