import React from "react";
import axios from "axios";

const DeleteButton= (props) =>{
    const deleteProductHandler = () =>{
        axios.delete('http://localhost:8000/api/products/' + props.id)
        .then(res=>{
            console.log(res)
            props.successfulCallback();
        })
        .catch(err => console.log(err))
    }

    return(
        <button onClick={deleteProductHandler}>DELETE</button>
    )
};

export default DeleteButton;