let command = process.argv[2];
let params = process.argv.slice(3);

switch (command) {
    case 'start':
        startCommand();
        break;

    case 'print':
        printCommand();
        break;

    case 'move':
        break;

    case 'help':
    default:
        helpCommand();
        break;
}

function startCommand() {
    let game = createGame();

    saveGame(game);
}

function printCommand() {
    let game = loadGame();

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

function saveGame(game) {
    let fs = require('fs');
    let serialized = JSON.stringify(game, null, 2);

    fs.writeFileSync('game.json', serialized);
}

function loadGame() {
    let fs = require('fs');

    try {
        let serialized = fs.readFileSync('game.json', 'utf-8');
        
        return JSON.parse(serialized);
    } catch (err) {
        if (err instanceof SyntaxError) {
            console.error('Save file corrupted');
            return null;
        }

        if (err.code === 'ENOENT') {
            console.error('No game in process');
            return null;
        }

        throw err;
    }
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
