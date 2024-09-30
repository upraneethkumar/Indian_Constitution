const games = [
    { title: 'Artical Quiz', icon: '🎲', link: 'https://66fa9dd466ee802464fa4cb3--sparkly-pixie-0681ce.netlify.app/' },  // Add link to the game
    { title: 'Constitution Match', icon: '🧠',link:'https://66f981821e32dd2339292df7--aquamarine-lolly-17d34f.netlify.app/',  },
    { title: 'Guess the Right Atricle', icon: '👨🏻‍⚖️', link:'https://66faaa9988d1820dddf6f08b--tranquil-basbousa-1a679a.netlify.app/' },
    { title: 'Fill In The Blanks', icon: '📝', link:'https://66fab859fb17da20ce8cba13--stirring-quokka-1de48e.netlify.app/' },
    { title: 'True or False', icon: '📚', link:'https://66fac76fe519990df2de3977--zesty-pegasus-37b8b1.netlify.app/' },
    { title: 'Speed Test', icon: '⏱️', link:'https://66facbfa42a50113478346c8--sweet-pithivier-4a68ba.netlify.app/' },
];

const gameGrid = document.querySelector('.game-grid');


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