const express = require('express');
const dbConnect = require('./MongoDB');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
    // console.log(data);
});

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertMany([req.body]);
    res.send(result);
});

app.patch('/:name', async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateMany(
        { name: req.params.name },
        { $set: req.body }
    );
    res.send('Data Updated Successfully');
});

app.delete('/:name', async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({ name: req.params.name });
    res.send('Data Deleted Successfully');
});

app.listen(4000);