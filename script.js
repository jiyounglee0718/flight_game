const gameElement = document.getElementById('game-element');
const scoreElement = document.getElementById('score');
let landing = 0;
let gameElementX = 0;
let gameElementY = 0;

gameElement.style.left = gameElementX + 'px';
gameElement.style.top = gameElementY + 'px';

gameElement.addEventListener('mousemove', (event) => {
    gameElementX = event.clientX - gameElement.clientWidth / 2;
    gameElementY = event.clientY - gameElement.clientHeight / 2;
    gameElement.style.left = gameElementX + 'px';
    gameElement.style.top = gameElementY + 'px';
});

function createEnemy() {
    const enemy = document.createElement('img');
    enemy.src = 'images/runway.png';
    enemy.className = 'enemy';
    document.body.appendChild(enemy);

    const maxX = window.innerWidth - 30;
    const maxY = window.innerHeight - 30;
    const enemyX = Math.floor(Math.random() * maxX);
    const enemyY = Math.floor(Math.random() * maxY);

    enemy.style.left = enemyX + 'px';
    enemy.style.top = enemyY + 'px';

    enemy.addEventListener('click', () => {
        landing++;
        scoreElement.textContent = `Jiyoung's plane landing: ${landing}`;
        document.body.removeChild(enemy);
    });

    setTimeout(() => {
        document.body.removeChild(enemy);
    }, 3000);
}

setInterval(createEnemy, 2000);
