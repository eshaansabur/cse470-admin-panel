import React, { useEffect, useState } from 'react';
import Order from './Order';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://cse470.onrender.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div className='container orders text-start'>
            <div className="row mt-5 p-4">
                <br />
                <h3>Orders List</h3>
                {
                    orders.map(order => <Order className='mb-3' key={order._id} order={order}></Order>)
                }
            </div>
            
        </div>
    );
};

export default Orders;