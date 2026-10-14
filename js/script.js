function playGame(x){

  let argMoveId = x;

  const getMoveName = function(argMoveId){
 
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

const argComputerMove = function(){
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
 



/* let argMoveId = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */




const ruchKomputera = argComputerMove(); 
const ruchGracza = getMoveName(argMoveId);



printMessage('Mój ruch to: ' + ruchKomputera);

printMessage('Twój ruch to: ' + ruchGracza);  

const wynik = function(ruchKomputera, ruchGracza){


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


}


document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
}); 