const dbConnect = require('./MongoDB');

const insertData = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            { name: 'Nitesh', age: 25 },
            { name: 'Selena', age: 28 },
            { name: 'Taylor', age: 30 }
        ]
    );
    if (result.acknowledged) {
        console.log('Data Inserted Successfully');
    }
}

insertData();
