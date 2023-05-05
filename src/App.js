import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Orders from './Orders/Orders';
import Products from './Products/Products';
import ProductDetails from './Products/ProductDetails';
import AddProduct from './AddProduct/AddProduct';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/add-product' element={<AddProduct></AddProduct>}></Route>
      </Routes>
    </div>
  );
}

export default App;
