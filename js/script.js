// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito23.

// Chiedi all'utente il suo nome
const userName = prompt("Inserisci il tuo nome");

// DEBUG
console.log(userName);

// Chiedi all'utente il suo cognome
const userSurname = prompt("Inserisci il tuo cognome");

// Chiedi all'utente il suo colore preferito
const userFavorite = prompt("Quale è il tuo colore preferito?");

// Mostrare a pagina il risultato
document.getElementById('mio_id').innerHTML = `Ecco la tua password: ${userName}${userSurname}${userFavorite}23`;

