// Funkcja zamieniająca ID (liczbę lub tekst z promptu) na nazwę ruchu
function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

// Funkcja losująca ruch komputera (zwraca od razu nazwę ruchu)
function getComputerMove() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  
  if (randomNumber == 1) return 'kamień';
  if (randomNumber == 2) return 'papier';
  if (randomNumber == 3) return 'nożyce';
}

// Funkcja sprawdzająca wynik gry
function wyswietlWynik(ruchKomputera, ruchGracza) {
  if (ruchGracza === 'nieznany ruch') {
    printMessage('Nie można rozstrzygnąć gry z powodu błędnego ruchu!');
    return;
  }

  if (ruchKomputera === ruchGracza) {
    printMessage('Remis!');
  } else if (
    (ruchKomputera == 'kamień' && ruchGracza == 'papier') ||
    (ruchKomputera == 'nożyce' && ruchGracza == 'kamień') ||
    (ruchKomputera == 'papier' && ruchGracza == 'nożyce')
  ) {
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Przegrałeś! Komputer górą.');
  }
}

// --- GŁÓWNA LOGIKA GRY ---

// 1. Pobieramy ruch gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

const ruchGracza = getMoveName(playerInput);
printMessage('Twój ruch to: ' + ruchGracza);  

// 2. Losujemy ruch komputera (wywołujemy funkcję TYLKO RAZ)
const ruchKomputera = getComputerMove(); 
printMessage('Mój ruch to: ' + ruchKomputera);

// 3. Rozstrzygamy wynik
wyswietlWynik(ruchKomputera, ruchGracza);

// Logi pomocnicze w konsoli
console.log('Ruch komputera: ' + ruchKomputera);
console.log('Ruch gracza: ' + ruchGracza);
