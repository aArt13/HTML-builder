const fs = require('fs');
const path = require('path');
let { stdout, stdin } = require('process');

const byeFunc = () => {
  stdout.write('Good luck! I hope see you again.');
  process.exit();
};

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Hello! I need some text from you..Do it:\n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    byeFunc();
  }
  output.write(data);
});
process.on('SIGINT', byeFunc);