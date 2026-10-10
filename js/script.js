
function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } 
  else if(argMoveId == 2){
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nożyce';
  }
  
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

}

function argComputerMove() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = ''; // <--- Deklaracja zmiennej na początku

  if (randomNumber == 1) {
    computerMove = 'kamień';
  } else if (randomNumber == 2) {
    computerMove = 'papier';
  } else if (randomNumber == 3) {
    computerMove = 'nożyce';
  }
 
  return computerMove;
}
 printMessage('Mój ruch to: ' + argComputerMove());



let argMoveId = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

printMessage('Twój ruch to: ' + getMoveName(argMoveId));  



const ruchKomputera = argComputerMove(); 
const ruchGracza = getMoveName(argMoveId); 

function wynik(ruchKomputera, ruchGracza) {

if( ruchKomputera == 'kamień' && ruchGracza == 'papier'){
  printMessage('Ty wygrywasz!');
}
else if( ruchKomputera == 'nożyce' && ruchGracza == 'kamień'){
  printMessage('Ty wygrywasz!');
}
else if( ruchKomputera == 'papier' && ruchGracza == 'nożyce'){
  printMessage('Ty wygrywasz!');
}
else if( ruchKomputera == ruchGracza){
  printMessage('Remis!');
}
else{
  printMessage('przegrana!');
}

}


wynik(ruchKomputera, ruchGracza);


