import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async (id) => {
        let result = await fetch(`http://localhost:4000/products/${params.id}`, {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {

        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }

        let result = await fetch(`http://localhost:4000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.log(result);
        navigate('/');
    }

    return (
        <div className='product'>
            <h1> Update Product </h1>
            <input className='inputBox' type='text'
                value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
            {error && !name && <span className='invalid-input'> Enter valid name </span>}

            <input className='inputBox' type='text'
                value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter Price' />
            {error && !price && <span className='invalid-input'> Enter valid price </span>}

            <input className='inputBox' type='text'
                value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter Category' />
            {error && !category && <span className='invalid-input'> Enter valid category </span>}

            <input className='inputBox' type='text'
                value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter Company' />
            {error && !company && <span className='invalid-input'> Enter valid company </span>}

            <button onClick={updateProduct} className='signButton' type='button'> Update </button>
        </div>
    );
}
export default UpdateProduct;
