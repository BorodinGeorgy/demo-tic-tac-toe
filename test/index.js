let assert = require('assert');
let moves = require('../moves');

describe('playerMove', () => {
    it('should throw an error if cell index is out of bounds', () => {
        let game = {
            board: [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' ',
            ],
            player: '⚽️',
            computer: '🏀',
        };

        assert.throws(() => {
            moves.player(9, game);
        });

        assert.throws(() => {
            moves.player(-1, game);
        });
    });

    it('should throw an error if cell index is not a number', () => {
        let game = {
            board: [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' ',
            ],
            player: '⚽️',
            computer: '🏀',
        };

        assert.throws(() => {
            moves.player('hello', game);
        });
    });

    it('should throw an error if cell is not empty', () => {
        let game = {
            board: [
                '⚽️', ' ', ' ',
                ' ', '', ' ',
                ' ', ' ', ' ',
            ],
            player: '⚽️',
            computer: '🏀',
        };

        assert.throws(() => {
            moves.player('0', game);
        });
    });
});