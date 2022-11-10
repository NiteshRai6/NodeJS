const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    Name: String,
    Category: String,
    Price: Number
});                         //Schema defines Database Fields where validation can be applied.

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        Name: 'Macbook',
        Category: 'Laptop',
        Price: 100000
    });
    let result = await data.save();
    console.log(result, ' Data Inserted Successfully');                // Model use Schema to connect NodeJS & MongoDB.
}

const updateInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne(
        { name: 'BMW' },
        {
            $set: { Price: 5800000 }
        });
    console.log(data, ' Data Updated Successfully');
}

const deleteInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({ name: 'BMW' });
    console.log(data, ' Data Deleted Successfully');
}

const findInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({Name: 'Apple'});
    console.log(data, ' Data Found Successfully');
}

findInDB();
