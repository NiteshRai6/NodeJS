const express = require('express');
const app = express();

app.get('', (req,res) => {
    res.send('This is a HomePage');
});

app.get('/about', (req,res) => {
    res.send('This is a About Page');
});

app.get('/help', (req,res) => {
    res.send('This is a Help Page');
});

app.listen(4000);