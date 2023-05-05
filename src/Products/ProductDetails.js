import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    let [productDetails, setProductDetails] = useState({});
    const {productId} = useParams();
    const url = `https://cse470.onrender.com/product/${productId}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setProductDetails(data))
    }, [])
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 col-lg-6 col-12">
                    <img className='img-fluid' src={productDetails.img} alt="" />
                </div>
                <div className="col-md-6 col-lg-6 col-12 text-start">
                    <h3>ProductId: {productDetails._id}</h3>
                    <h3>Name:{productDetails.name}</h3>
                    <p>Price:{productDetails.price}</p>
                    <p>Details: {productDetails.description}</p>
                    <button className='btn btn-warning'>Update Product Info</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;