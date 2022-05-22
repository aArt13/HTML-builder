let path = require('path');
let fs = require('fs/promises');
let folder = path.join(__dirname, 'files');
let folderCopy = path.join(__dirname, 'files-copy');

fs.rm(folderCopy, { recursive: true, force: true }).finally(() => {
  fs.mkdir(folderCopy, { recursive: true });
  fs.readdir(folder, { withFileTypes: true }).then((data) => {
    data.forEach((file) => {
      if (file.isFile()) {
        let filePathOld = path.join(folder, file.name);
        let filePathNew = path.join(folderCopy, file.name);
        fs.copyFile(filePathOld, filePathNew);
      }
    });
  });
});