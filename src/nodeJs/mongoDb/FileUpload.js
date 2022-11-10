const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/Users/niteshmac/NiteshRai/Coding/React/todos-list/src/Component/NodeJS/MongoDB')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + '.jpg')
        }
    })
}).single('user_file');

app.post('/upload', upload, (req, res) => {
    res.send('File uploaded Successfully.')
});

app.listen(4000);
