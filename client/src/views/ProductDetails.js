import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from "../components/DeleteButton";

const ProductDetails = (props)=>{
    const [product, setProduct] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' + props.id)
        .then(res=>{
            setProduct(res.data.product)
            console.log(res.data.product)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/${product._id}/edit`}>
                <button>EDIT</button>
            </Link>
            <DeleteButton successfulCallback={()=>{navigate("/")}} id={product._id}/>
        </div>
    );
}

export default ProductDetails