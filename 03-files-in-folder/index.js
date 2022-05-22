const fs = require('fs');
const path = require('path');

const infoFile = file =>  {
  let arr = [];
  if (file.isFile()) {
    fs.stat(path.join(__dirname, 'secret-folder', file.name), (error, stats) => {
      if (error) return console.log(error.message); 
      arr.push(file.name.split('.').slice(0, -1).join('.'));
      arr.push(path.extname(file.name).slice(1));
      arr.push((Math.round(stats.size/1024)) + 'Kb');
      console.log(arr.join(' - '));
    });
  }
};

fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (error, files) => {
  if (error) return console.log(error.message); 
  files.forEach(el => {
    infoFile(el);
  });
});