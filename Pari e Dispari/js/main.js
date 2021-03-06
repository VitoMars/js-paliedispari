// ----- Pari e Dispari -----
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiediamo all'utente di scegliere Pari o Dispari
do {
  var pariDispari = prompt("Pari o Dispari?");
  pariDispari = pariDispari.toUpperCase();
} while (pariDispari != "PARI" && pariDispari != "DISPARI");
console.log("Il giocatore ha scelto: " + pariDispari);

// Chiediamo all'utente di scegliere un numero da 1 a 5
do {
  var numeroGiocatore = parseInt(prompt("Scegli un numero da 1 a 5"));
} while (numeroGiocatore < 1 || numeroGiocatore > 5);
console.log("Il giocatore ha scelto: " + numeroGiocatore);

// Funzione per la generazione di numeri random con un range
function generaNumero(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Generiamo il numero al computer
numeroComputer = generaNumero(1, 5);
console.log("Il computer ha scelto: " + numeroComputer);

// Sommiamo i due numeri
sommaNumeri = numeroGiocatore + numeroComputer;
console.log("La somma dei due numeri è: " + sommaNumeri);

// Funzione per controllare il pari o il dispari
function checkPariDispari(str) {
  if (str % 2 == 0) {
    var risultato = "PARI";
  } else {
    var risultato = "DISPARI";
  }
  return risultato;
}

// Dichiariamo il vincitore
if (checkPariDispari(sommaNumeri) == pariDispari) {
  console.log("Il giocatore ha vinto");
} else {
  console.log("Il giocatore ha perso");
}
