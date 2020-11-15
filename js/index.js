var fields = document.querySelectorAll('.field');

var playerOne = true;

function checkIfWinner() {

  if (fields[0].classList.contains('player1') && fields[1].classList.contains('player1') && fields[2].classList.contains('player1') ||
    fields[3].classList.contains('player1') && fields[4].classList.contains('player1') && fields[5].classList.contains('player1') ||
    fields[6].classList.contains('player1') && fields[7].classList.contains('player1') && fields[8].classList.contains('player1') ||
    fields[0].classList.contains('player1') && fields[4].classList.contains('player1') && fields[8].classList.contains('player1') ||
    fields[6].classList.contains('player1') && fields[4].classList.contains('player1') && fields[2].classList.contains('player1')
  ) {
    console.log('player 1 wins');
  }

  if (fields[0].classList.contains('player2') && fields[1].classList.contains('player2') && fields[2].classList.contains('player2') ||
    fields[3].classList.contains('player2') && fields[4].classList.contains('player2') && fields[5].classList.contains('player2') ||
    fields[6].classList.contains('player2') && fields[7].classList.contains('player2') && fields[8].classList.contains('player2') ||
    fields[0].classList.contains('player2') && fields[4].classList.contains('player2') && fields[8].classList.contains('player2') ||
    fields[6].classList.contains('player2') && fields[4].classList.contains('player2') && fields[2].classList.contains('player2')
  ) {
    console.log('player 2 wins');
  }

}

fields.forEach(function (field) {
  field.addEventListener('click', function () {

    var classToAdd;

    if (playerOne === true) {
      classToAdd = 'player1';
    } else {
      classToAdd = 'player2';
    }

    field.classList.add(classToAdd);
    checkIfWinner();
    playerOne = !playerOne;
  })
})