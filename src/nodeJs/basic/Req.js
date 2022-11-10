const express = require('express');
const app = express();

app.get('', (req,res) => {
    console.log('Data send by browser :',req.query.name);
    res.send('Welcome '+req.query.name);
});
app.listen(4000);

//URL : http://localhost:4000/?name=Nitesh , Output : Welcome Nitesh
