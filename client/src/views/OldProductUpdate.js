import React, { useState, useEffect } from "react"
import axios from 'axios'
import { navigate } from "@reach/router";

const ProductUpdate = (props) =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' + props.id)
        .then(res=>{
            console.log(res.data.product)
            setTitle(res.data.product.title);
            setPrice(res.data.product.price);
            setDescription(res.data.product.description);
        })
        .catch(err => console.log(err))
    }, []);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const updatedProduct = {
            title,
            price,
            description,
        }
        console.log (updatedProduct);
        axios.put('http://localhost:8000/api/products/' + props.id, updatedProduct)
            .then(res => {
                console.log(res)
                navigate("/products/" + props.id);
            })
            .catch(err => console.log(err));
    };

    return(
        <div>
            <h3>Edit a Product</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label>Price: $</label>
                    <input type="number" value={price} step={0.01} onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <button type="submit">Edit Product</button>
            </form>
        </div>
    )
};

export default ProductUpdate;