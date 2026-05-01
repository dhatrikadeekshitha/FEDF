import { useState } from 'react'
import ProductCard from './components/ProductCard';
import './App.css'

function App() {

return (
  <div>
    <h1>My Shop</h1>

    <ProductCard name="Phone" price={15000} image="phone.png" />
    <ProductCard name="Laptop" price={150000} image="laptop.png" />
    <ProductCard name="Headphones" price={1500} image="headphones.png" />
  </div>
);
}
export default App
