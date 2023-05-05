import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const {_id, img, name, price, description} = props.product;
    const navigate = useNavigate();
    const seeDetails = (id)=>{
        navigate(`/product/${id}`);
    }
    return (
        <div class="col">
            <div class="card">
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Name: {name}</h5>
                <h3>Price: {price} tk/piece</h3>
                <p class="card-text">{description}</p>
                <button onClick={()=>seeDetails(_id)} className='btn btn-success'>See Details</button>
            </div>
            </div>
        </div>
    );
};

export default Product;