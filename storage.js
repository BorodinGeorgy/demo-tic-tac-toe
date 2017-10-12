let fs = require('fs');

function saveGame(game) {
    let serialized = JSON.stringify(game, null, 2);

    fs.writeFileSync('game.json', serialized);
}

exports.saveGame = saveGame;

function loadGame() {
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

exports.loadGame = loadGame;
