function playerMove(index, game) {
    index = Number(index);

    if (isNaN(index)) {
        throw new TypeError('Cell index should be a number');
    }

    if (index < 0 || index > 8) {
        throw new RangeError('Cell index should be within [0, 8] range');
    }

    if (game.board[index] !== ' ') {
        throw new Error('Cell is not empty');
    }

    game.board[index] = game.player;
}

exports.player = playerMove;

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerMove(game) {
    let index;

    do {
        index = randomInt(game.board.length);
    } while (game.board[index] !== ' ');

    game.board[index] = game.computer;
}

exports.computer = computerMove;
