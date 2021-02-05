import React, { useState, useEffect } from "react";
import axios from 'axios';
import { navigate } from "@reach/router";
import ProductForm from "../components/ProductForm";

const ProductUpdate = (props) =>{
    const [initialTitle, setInitialTitle] = useState("");
    const [initialPrice, setInitialPrice] = useState();
    const [initialDescription, setInitialDescription] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' + props.id)
        .then(res=>{
            console.log(res.data.product);
            setInitialTitle(res.data.product.title);
            setInitialPrice(res.data.product.price);
            setInitialDescription(res.data.product.description);
            setLoaded(true);
        })
        .catch(err => console.log(err))
    }, []);

    const editProduct = ({title, price, description}) =>{
        const updatedProduct = {
            title,
            price,
            description,
        }
        console.log(updatedProduct);
        axios.put('http://localhost:8000/api/products/' + props.id, updatedProduct)
            .then(res => {
                console.log(res)
                navigate("/products/" + props.id);
            })
            .catch(err => console.log(err));
    };

    return(
        <div>
            {loaded && <ProductForm initialTitle= {initialTitle} initialPrice = {initialPrice} initialDescription={initialDescription} onSubmitProp = {editProduct} />}
        </div>
    )
};

export default ProductUpdate;