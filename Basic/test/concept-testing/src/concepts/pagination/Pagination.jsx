// Pagination
import React, { useEffect, useState } from 'react'

const ProductCard = ({ image, title }) => {
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-img' />
      <span>{title}</span>
    </div>
  )
}

const page_size = 10

const Pagination = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const fetchData = async () => {
    const rawData = await fetch('https://dummyjson.com/products?limit=30')
    const data = await rawData.json()
    setProducts(data.products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const totalProducts = products.length
  const noOfPages = Math.ceil(totalProducts / page_size)


  const indexOfLastProduct = currentPage * page_size
  const indexOfFirstProduct = indexOfLastProduct - page_size
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  return !products.length ? (
    <h1 className='product-status'>No products found</h1>
  ) : (
    <div>
      <h1 className='product-status'>Products</h1>

      {/* Page Numbers */}
      <div className='page-no-container'>
        {[...Array(noOfPages).keys()].map((n) => (
          <span
            key={n}
            className={`page-no ${currentPage === n + 1 ? 'active' : ''}`}
            onClick={() => setCurrentPage(n + 1)}
          >
            {n + 1}
          </span>
        ))}
      </div>

      {/* Products */}
      <div className='products-container'>
        {currentProducts.map((p) => (
          <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
        ))}
      </div>
    </div>
  )
}

export default Pagination
