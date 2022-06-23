import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useEffect, useRef } from 'react'
import WallSocket from './utils/socket'
import Product from './components/Product'
import WallWebSocket from './services/WallWebSocket.js'
import ProductCard from './components/ProductCard'
import AddProduct from './components/AdminPanel/AddProduct/AddProduct'
import ProductsList from './components/AdminPanel/ProductsList'
import EditProducts from './components/AdminPanel/EditProducts'

function App() {

  return (
    <Routes>

      <Route path="/" element={<ProductCard />} />
      <Route path="products/:id" element={<Product />} />
      <Route path="products/add" element={<AddProduct />} />
      <Route path="products/list" element={<ProductsList />} />
      <Route path="products/edit/:id" element={<EditProducts />} />



    </Routes>
  )
}

export default App
