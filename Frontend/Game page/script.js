const games = [
    { title: 'Artical Quiz', icon: '🎲', link: 'http://localhost:5000/' },  // Add link to the game
    { title: 'Constitution Match', icon: '🧠',link:'https://66f981821e32dd2339292df7--aquamarine-lolly-17d34f.netlify.app/' },
    
];

const gameGrid = document.querySelector('.game-grid');

// Dynamically generate game tiles
games.forEach((game) => {
    const tile = document.createElement('div');
    tile.classList.add('game-tile');

    const icon = document.createElement('div');
    icon.classList.add('game-icon');
    icon.textContent = game.icon;

    const title = document.createElement('div');
    title.classList.add('game-title');
    title.textContent = game.title;

    if (game.link) {
        tile.addEventListener('click', () => {
            window.location.href = game.link;
        });
    }

    tile.appendChild(icon);
    tile.appendChild(title);
    gameGrid.appendChild(tile);
});