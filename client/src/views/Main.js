import React, { useEffect, useState } from 'react';

import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';
export default () => {
    const[allProductsList, setAllProductsList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setAllProductsList(res.data.products);
        })
        .catch(err => console.log(err))
    }, [])

    const createProduct = ({title, price, description}) =>{
        const newProduct = {
            title,
            price,
            description,
        }
        console.log (newProduct);
        axios.post('http://localhost:8000/api/products/new', newProduct)
            .then(res => {
                console.log(res);
                setAllProductsList([...allProductsList, res.data.product]);
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <ProductForm initialTitle="" initialPrice="" initialDescription="" onSubmitProp = {createProduct}/>
            <ProductsList allProductsList = {allProductsList} setAllProductsList={setAllProductsList}/>
        </div>
    )
}