const fs = require('fs');
const path = require('path');
let { stdout, stdin, exit } = require('process');

const buyFunc = () => {
    stdout.write('Good luck! I hope see you again.');
    exit();
}

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Hello! I need some text from you..Do it:\n');
stdin.on('data', (data) => {
    if (data.toString().trim() === 'exit') {
        buyFunc()
    }
    output.write(data);
})
process.on('SIGINT', buyFunc);


