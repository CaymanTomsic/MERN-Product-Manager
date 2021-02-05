import React, { useState } from "react"
import axios from 'axios'

const ProductForm = (props) =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description,
        }
        console.log (newProduct);
        axios.post('http://localhost:8000/api/products/new', newProduct)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h3>Create a Product</h3>
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
                <button type="submit">Create Product</button>
            </form>
        </div>
    )
};

export default ProductForm;