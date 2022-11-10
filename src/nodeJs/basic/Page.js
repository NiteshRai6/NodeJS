const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, 'Pages');

// app.use(express.static(filePath));

app.get('', (_,res) => {
    res.sendFile(`${filePath}/home.html`)
});

app.get('/about', (_,res) => {
    res.sendFile(`${filePath}/about.html`)
});

app.get('/help', (_,res) => {
    res.sendFile(`${filePath}/help.html`)
});

app.get('*', (_,res) => {
    res.sendFile(`${filePath}/nopage.html`)
});

app.listen(4000);