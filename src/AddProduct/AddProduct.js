import React from 'react';

const AddProduct = () => {
    const addAProduct = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const price=event.target.price.value;
        const desc=event.target.desc.value;
        const img=event.target.img.value;
        const proceed = window.confirm("Do you want to add this product?")
        if(proceed){
            //console.log(name, address, phone, details)
            //send data to the server
            fetch('https://cse470.onrender.com/product', {
                method: 'POST',
                body: JSON.stringify({
                    name, price, desc, img
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((data) => console.log(data));
                event.target.reset();
            }
    }
    return (
        <div className='container addproduct'>
           <div className="row text-start mt-5">
           <div className="col-12 col-md-12 col-lg-12">
            <h3>Add a New Product</h3>
           <form onSubmit={addAProduct} className='w-50'>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Price</label>
                <input type="text" name="price" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Description</label>
                <input type="text" name="desc" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Image URL (ex: https://i.ibb.co/RYvj2fW/cupcake-two.jpg)</label>
                <input type="text" name="img" class="form-control py-4" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <button type="submit" class="btn btn-primary">Add Product</button>
            </form>
           </div>
            </div> 
        </div>
    );
};

export default AddProduct;