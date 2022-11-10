const dbConnect = require('./MongoDB');

const deleteData = async () => {
    let data = await dbConnect();
    let result = await data.deleteMany( { brand: 'MI' } );

    if (result.acknowledged) {
        console.log(result, 'Data Deleted Successfully');
    }
}
deleteData();