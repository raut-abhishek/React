// pagination and state management 

import React, { useEffect, useState } from 'react'

const ProductCard = ({image, title}) =>{
    return <div className='product-card'>
        <img src={image} alt={title} className='product-img'/>
        <span>{title}</span>
    </div>
}

const page_size = 10;



const Pagination = () => {

    const [products, setProducts] = useState([])

    const fetchData = async ()=>{
        const rawData = await fetch('https://dummyjson.com/products?limit=30')
        const data = await rawData.json();
        setProducts(data.products);
    }

    useEffect(()=>{
        fetchData()
    },[])

    const totalProducts = products.length;
    const noOfPages = Math.ceil(totalProducts/page_size);


  return !products.length ? (
    <h1 className='product-status'>No products found</h1>
  ) : (
    <div>
        <h1 className='product-status'>Products</h1>
        <div className='page-no-container'>
            {[...Array(noOfPages).keys()].map((n)=>(
                <span className='page-no' key={n}>{n}</span>
            ))}
        </div>
        <div className='products-container'>
            {products.map(p=> <ProductCard key = {p.id} image={p.thumbnail} title={p.title}/>)}
        </div>
    </div>
  )
}

export default Pagination;