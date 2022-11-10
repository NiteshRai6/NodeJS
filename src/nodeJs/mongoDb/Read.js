const dbConnect = require('./MongoDB');

// dbConnect().then((res) => {
//     res.find().toArray().then((data) => {
//         console.log(data);
//     });
// });

const readData = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

readData();
