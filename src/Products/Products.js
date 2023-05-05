import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://cse470.onrender.com/products')
        .then(res => res.json())
        .then(data=> setProducts(data))
    }, [])
    return (
        <div className='container products'>
            <div className="row mt-5 text-start">
                <h3>Products</h3>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product =><Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Products;