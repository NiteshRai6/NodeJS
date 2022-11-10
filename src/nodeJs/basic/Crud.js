const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'File');
const filePath = `${dirPath}/Apple.txt`;

fs.writeFileSync(filePath, 'This is a simple text file');

fs.readFile(filePath, 'utf-8', (err, item) => {
    console.log(item);
});

// fs.appendFile(filePath, ' And You are in NodeJs.', (err) => {
//     if (!err)
//         console.log('File is updated.');
// });

// fs.rename(filePath, `${dirPath}/Fruit.txt`, (err) => {
//     if (!err)
//         console.log('File name is updated');
// });

// fs.unlinkSync(`${dirPath}/Fruit.txt`);
