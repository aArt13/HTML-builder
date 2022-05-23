let path = require('path');
let fs = require('fs');
let input = path.join(__dirname, 'styles');
let bundle = path.join(__dirname, 'project-dist', 'bundle.css');

fs.readdir(input, 'utf-8', (error, files) => {
  if (error) return console.log(error.message); 
  fs.writeFile(bundle, '', (error) => {
    if (error) return console.log(error.message); 
  });
  files.forEach((file) => {
    if (path.parse(path.join(input, file)).ext === '.css') {
      let stream = fs.createReadStream(path.join(input, file));
      stream.on('data', (data) => {
        fs.appendFile(bundle, data, (error) => {
          if (error) return console.log(error.message); 
        });
      });
    }
  });
});