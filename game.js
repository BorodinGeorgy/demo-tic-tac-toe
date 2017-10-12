let command = process.argv[2];
let params = process.argv.slice(3);

switch (command) {
    case 'start':
        let game = createGame();
        saveGame(game);
        break;

    case 'print':
        break;

    case 'move':
        break;

    case 'help':
    default:
        helpCommand();
        break;
}

function createGame() {
    let game = {
        board: [
            ' ', ' ', ' ',
            ' ', ' ', ' ',
            ' ', ' ', ' ',
        ],
        player: '⚽️',
        computer: '🏀',
    };

    return game;
}

function saveGame(game) {
    let fs = require('fs');
    let serialized = JSON.stringify(game, null, 2);

    fs.writeFileSync('game.json', serialized);
}

function helpCommand() {
    let help = `
    Tic-tac-toe
    ===========

    Usage:

        node game start  – Начать игру
        node game print  - Отобразить поле
        node game move 4 - Сделать ход
`;
    console.log(help);
}
