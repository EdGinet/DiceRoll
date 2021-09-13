let totalScore, currentScore, activePlayer;

//Roll
document.querySelector('.roll').addEventListener('click', function() {
    const randomRoll = Math.floor(Math.random() * 6 ) + 1;
    const dice = 'images/Dice-' + randomRoll + '.png';
    document.querySelector('img').setAttribute('src', dice);

    if(randomRoll !==1) {
        currentScore += randomRoll;
        document.getElementById('current-player-score-' + activePlayer).innerText = currentScore;
    } else {
        switchPlayer()
        
    }
})

//HOLD
document.querySelector('.hold').addEventListener('click', function() {
    totalScore[activePlayer] += currentScore;
    document.getElementById('score-' + activePlayer).innerText = totalScore[activePlayer];
    
    if (totalScore[activePlayer] >= 100) {
        document.getElementById('player-' + activePlayer).innerText = 'Winner !';
        document.getElementById('player-' + activePlayer).classList.add('winner');
        document.getElementById('player-' + activePlayer).classList.remove('active');

        document.querySelector('.roll').disabled = true;
        document.querySelector('.hold').disabled = true;
        play = false;

    } else {
        switchPlayer();
    }
})

// Function that switches players
function switchPlayer() {
    currentScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById('current-player-score-0').innerText = '0';
    document.getElementById('current-player-score-1').innerText = '0';

    document.getElementById('player-0-side').classList.toggle('active');
    document.getElementById('player-1-side').classList.toggle('active');
}


// Function that starts the game 
function start() {
    totalScore = [0, 0];
    currentScore = 0; 
    activePlayer = 0;
    play = true;
    
    document.getElementById('score-0').innerText = '0';
    document.getElementById('score-1').innerText = '0';
    document.querySelector('.current-score').innerText = '0';
    document.getElementById('player-0').innerText = 'Player 1';
    document.getElementById('player-1').innerText = 'Player2';

    document.getElementById('player-0-side').classList.remove('winner');
    document.getElementById('player-1-side').classList.remove('winner');
    document.getElementById('player-0-side').classList.remove('active');
    document.getElementById('player-1-side').classList.remove('active');
    document.getElementById('player-0-side').classList.add('active');
    
    document.querySelector('.roll').disabled = false;
    document.querySelector('.hold').disabled = false;
}

document.getElementById('newgame').addEventListener('click', start);