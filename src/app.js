/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("OMG! No me vas a creer pero...");

  var excuse = {
    criminal: ["Mi perro", "Mi pareja", "Una gaviota", "Un ovni"],
    crime: ["rompió", "se llevó", "me robó", "me pidió que le preste"],
    toAvoid: [
      "mi tarea",
      "mi carnet",
      "mi report anual",
      "mi código para este Sprint"
    ],
    crimeTime: [
      "ayer",
      "cuando me despisté",
      "hace 5 minutos",
      "sin pensarlo dos veces"
    ]
  };
  /*console.log(excuse.criminal[1], excuse.crime[3], excuse.toAvoid[3]),
    excuse.crimeTime[2];*/

  // referencias a los elementos
  var generateButton = document.getElementById("generateButton");
  var excuseElement = document.getElementById("excuse");

  // click al botón
  generateButton.addEventListener("click", function() {
    // índices aleatorios
    var randomCriminalIndex = Math.floor(
      Math.random() * excuse.criminal.length
    );
    var randomCrimeIndex = Math.floor(Math.random() * excuse.crime.length);
    var randomToAvoidIndex = Math.floor(Math.random() * excuse.toAvoid.length);
    var randomCrimeTimeIndex = Math.floor(
      Math.random() * excuse.crimeTime.length
    );

    // Construir el resultado
    var result = `${excuse.criminal[randomCriminalIndex]} ${excuse.crime[randomCrimeIndex]} ${excuse.toAvoid[randomToAvoidIndex]} ${excuse.crimeTime[randomCrimeTimeIndex]}`;

    // Mostrar el resultado
    excuseElement.innerHTML = result;
  });
};
