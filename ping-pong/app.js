const p1 = {
    score: 0,
    button:document.querySelector('#p1Button'),
    displayed: document.querySelector('#p1Score'),
}

const p2 = {
    score: 0,
    button:document.querySelector('#p2Button'),
    displayed: document.querySelector('#p2Score'),
}

const resetButton = document.querySelector('#reset');
const winScore = document.querySelector('#winningScore');

let winningScore = 0;
let isGameOver = false;

function updateScores (player, opponent) {
    if (!isGameOver){
        player.score += 1
        if(player.score === winningScore){
           isGameOver = true;
           player.displayed.classList.add('has-text-success');
           opponent.displayed.classList.add('has-text-danger');
           player.button.disabled = true;
        opponent.button.disabled = true;
        }
        player.displayed.textContent = player.score;
    }  
}

winScore.addEventListener('change', function () {
    winningScore = parseInt(winScore.value);
});

p1.button.addEventListener('click', function (){
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function (){
   updateScores(p2, p1);
});

resetButton.addEventListener('click', reset);

function reset() {
    for(let p of [p1,p2]) {
        p.displayed.textContent = 0;
        p.displayed.classList.remove('has-text-success', 'has-text-danger');
        p.score = 0;
        p.button.disabled = false;
    }
    isGameOver = false;
}


