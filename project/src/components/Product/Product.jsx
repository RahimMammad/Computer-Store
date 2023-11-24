import React from 'react'
import "./Product.scss"

const Product = ({ product }) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt="" />
      <h3><b>{product.manufacturer}</b> {product.model}</h3>
      <p>{product.category}</p>
      <span>{product.price}.99 $</span><br />
      <button>Add To Cart</button>
    </div>
  )
}

export default Product