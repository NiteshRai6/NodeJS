const express = require('express');
const app = express();

const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('Please provide age.')
    }
    else if (req.query.age < 18) {
        res.send('You cannot access this page')
    }
    else {
        next();
    }
}

// app.use(reqFilter);  : This is Application-level middleware.

app.get('/', (req, res) => {
    res.send('Welcome To HomePage')
});

app.get('/user', reqFilter, (req, res) => {  // Here reqfilter works as Route-Level Middleware.
    res.send('Welcome To User Page')
});

app.listen(4000);