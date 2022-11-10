import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ProductList = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let result = await fetch('http://localhost:4000/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:4000/product/${id}`, {
            method: 'Delete',
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4000/search/${key}`, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json();
            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }
    }

    return (
        <div className='product-table'>
            <h1> Product List </h1>

            <input type='text' className='search-product-box' placeholder='Seacrh Product'
                onChange={searchHandle} />

            <div className='table-data'>
                <table>
                    <tbody>
                        <tr className='table-header'>
                            <td>S No.</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Category</td>
                            <td>Company</td>
                            <td>Operation</td>
                        </tr>

                        {
                            products && products.length > 0 ? products.map((item, index) =>

                                <tr key={item._id}>
                                    <td> {index + 1} </td>
                                    <td> {item.name} </td>
                                    <td> {item.price} Rs </td>
                                    <td> {item.category} </td>
                                    <td> {item.company} </td>

                                    <td>
                                        <td><Link to={'/update/' + item._id}> <EditRoundedIcon /> </Link> </td>
                                        <td><button className='delbtn' onClick={() => deleteProduct(item._id)}> <DeleteForeverIcon /> </button></td>
                                    </td>
                                </tr>
                            )
                                : <h1> No Result Found </h1>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ProductList;
