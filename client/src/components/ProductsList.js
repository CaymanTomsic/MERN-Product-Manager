import React from 'react';
import {Link} from "@reach/router";
import DeleteButton from './DeleteButton';

const ProductsList = (props) =>{
    const {allProductsList, setAllProductsList} = props;
    console.log(allProductsList);

    const removeFromDom = (productId) =>{
        setAllProductsList(allProductsList.filter(product=> product._id != productId));
    }

    return(
        <div>
            { allProductsList.map((product, index)=>{
                return(
                    <div key={index}>
                        <Link to={"/products/"+product._id}><p>{product.title}</p></Link>
                        <Link to={`/products/${product._id}/edit`}>
                            <button>EDIT</button>
                        </Link>
                        <DeleteButton successfulCallback={()=>removeFromDom(product._id)} id={product._id}/>
                    </div>
                )
            })}
        </div>
    )
};

export default ProductsList