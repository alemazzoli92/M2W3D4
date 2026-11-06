// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function cambia() {
  let testoH1 = document.querySelector("h1");
  let testoOriginale = testoH1.innerText;
  testoH1.addEventListener("mouseenter", () => {
    testoH1.innerText = "Epicode";
    testoH1.style.color = "red";
  });
  testoH1.addEventListener("mouseleave", () => {
    testoH1.innerText = testoOriginale;
    testoH1.style.color = "";
  });
}
cambia();
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function changeColor() {
  let backgroundColor = document.querySelector("body");
  backgroundColor.style.backgroundColor = "green";
}
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function changeAdress() {
  let adress = document.querySelector("footer p");
  let originalAdress = adress.innerText;
  adress.addEventListener("mouseenter", () => {
    adress.innerText = "seconda stella a destra quello è il cammino";
  });
  adress.addEventListener("mouseleave", () => {
    adress.innerText = originalAdress;
  });
}
changeAdress();
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function ClassAdder() {
  let className = document.querySelectorAll("#cards a");
  for (let i = 0; i < className.length; i++) {
    className[i].classList.add("Links");
  }
}
ClassAdder();

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function ghost() {
  let imgClass = document.querySelectorAll("#cards img");
  for (let i = 0; i < imgClass.length; i++) {
    imgClass[i].classList.add("cardImg");
  }
}
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function changeColorPrize() {
  let ColorPrize = document.querySelectorAll(".prezzo");

  for (let i = 0; i < ColorPrize.length; i++) {
    ColorPrize[i].addEventListener("mouseenter", () => {
      ColorPrize[i].style.color = "red";
    });
    ColorPrize[i].addEventListener("mouseleave", () => {
      ColorPrize[i].style.color = "";
    });
  }
}
changeColorPrize();
