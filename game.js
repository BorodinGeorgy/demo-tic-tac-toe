let command = process.argv[2];
let params = process.argv.slice(3);

switch (command) {
    case 'start':
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
