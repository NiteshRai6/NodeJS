const express = require('express');
const con = require('./CrudConfig');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    con.query('select * from users', (err, result) => {
        if (err) {
            res.send('Error');
        }
        else {
            res.send(result);
        }
    });
});

app.post('/', (req, res) => {
    const data = req.body;
    con.query('INSERT INTO users SET ?', data, (error, result, fields) => {
        if (error) error;
        res.send(result);
    });
});

app.put('/:Id', (req, res) => {
    const data = [req.body.Name, req.body.Category, req.body.Price, req.params.Id]
    con.query('UPDATE users SET Name = ?, Category = ?, Price = ? WHERE id = ?',
        data, (error, result, fields) => {
            if (error) error;
            res.send(result);
        });
});

app.delete('/:Id', (req, res) => {
    con.query('DELETE FROM users WHERE Id =' + req.params.Id, (error, result) => {
        if (error) error;
        res.send(result);
    });
});

app.listen(4000);   