import React from 'react';

const Order = (props) => {
    const {_id, name, address, phone, details} =props.order;
    return (
        <div className='order bg-success text-white'>
            <h3>OrderID: {_id}</h3>
            <h4>Name: {name}</h4>
            <h4>Address: {address}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Details: {details}</h4>
        </div>
    );
};

export default Order;