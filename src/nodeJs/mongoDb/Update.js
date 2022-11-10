const dbConnect = require('./MongoDB');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        { brand: 'Samsung' },
        {
            $set: { brand: 'MI', price: 9000 }
        }
    );

    if (result.acknowledged) {
        console.log(result, 'Data Updated Successfully');
    }
}
updateData();