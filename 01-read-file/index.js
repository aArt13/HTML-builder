const fs = require('fs');
const path = require('path');

const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
// const stream = new fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let data = '';
stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log(data));
stream.on('error', error => console.log('Error: ', error.message));

// fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', (error, data) => {
//  if (error) throw error;
//  console.log(data);
//});