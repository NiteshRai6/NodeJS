const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send(`
    <h1> Welcome to HomePage </h1>
    <a href = './about'> Go to About Page </a>
    `);
});

app.get('/about', (req, res) => {
    res.send(`
    <h1> Welcome to About Page </h1>
    <input type = 'text' placeholder = 'username' /> <br /> <br />
    <a href = './help'> Go to Help Page </a>
    `);
});

app.get('/help', (req, res) => {
    res.send(`
    <h1> Welcome to Help Page </h1>
    <button> Click Me </button> <br /> <br />
    data =  [
        {name : 'Nitesh Rai' , email : 'ndelhi66@gmail.com'},
        {name : 'Selena' , email : 'selena@gmail.com'}
    ] <br /> <br />
    <a href = '/'> Go to Home Page </a>
    `);
});

app.listen(4000);