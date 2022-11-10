const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (_, res) => {
    const user = {
        name: 'Nitesh',
        email: 'ndelhi66@gmail.com',
        country: 'India',
        skills: ['Javascript', 'ReactJS', 'NodeJS', 'MongoDB']
    }
    res.render('profile', { user });
});

app.get('/login', (_,res) => {
    res.render('login');
});

app.listen(4000);