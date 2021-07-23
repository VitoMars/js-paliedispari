// ------Palidroma------
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var string = prompt("Inserisci una parola e ti dirò se è palindroma");

console.log(string);

function checkPalindroma(parola) {
  parola = parola.toLowerCase();
  let parolaInvertita = parola.split("").reverse().join("");
  if (parola == parolaInvertita) {
    console.log("La parola è palindroma");
    return true;
  } else {
    console.log("La parola non è palindroma");
    return false;
  }
}

checkPalindroma(string);
