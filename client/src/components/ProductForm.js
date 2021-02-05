import React, { useState } from "react"

const ProductForm = (props) =>{
    const [title, setTitle] = useState(props.initialTitle);
    const [price, setPrice] = useState(props.initialPrice);
    const [description, setDescription] = useState(props.initialDescription);

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmitProp({title, price, description});
    }

    return(
        <div>
            <h3>Product</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value) 
                        console.log(title)}}/>
                </div>
                <div>
                    <label>Price: $</label>
                    <input type="number" value={price} step={0.01} onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <button type="submit">Create/Edit Product</button>
            </form>
        </div>
    )
};

export default ProductForm;