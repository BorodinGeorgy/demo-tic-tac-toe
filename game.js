let command = process.argv[2];
let params = process.argv.slice(3);

let storage = require('./storage');
let moves = require('./moves');

switch (command) {
    case 'start':
        startCommand();
        break;

    case 'print':
        printCommand();
        break;

    case 'move':
        moveCommand(params);
        break;

    case 'help':
    default:
        helpCommand();
        break;
}

function moveCommand(params) {
    let game = storage.loadGame() || createGame();
    moves.player(params[0], game);
    moves.computer(game);
    storage.saveGame(game);
}

function startCommand() {
    let game = createGame();

    storage.saveGame(game);
}

function printCommand() {
    let game = storage.loadGame();

    if (game) {
        printGame(game);
    }
}

function printGame(game) {
    let b = game.board;
    console.log(`
        ${b[0]} | ${b[1]} | ${b[2]} 
        ----------
        ${b[3]} | ${b[4]} | ${b[5]} 
        ----------
        ${b[6]} | ${b[7]} | ${b[8]} 
    `);
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
