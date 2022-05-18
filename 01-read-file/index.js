// const fs = require('fs');
// const path = require('path');

// fs.readFile(
//     path.join(__dirname, 'text.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

const fs = require('fs');
const path = require('path');

// const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
const stream = new fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let data = '';
stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log(data));
stream.on('error', error => console.log('Error: ', error.message));