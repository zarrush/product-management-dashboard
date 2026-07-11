import React from 'react';

const ProductCard = ({product}) => {
  return(
    <div>
      <h2>{product.name}</h2>
      <h2>{product.brand}</h2>
      <h2>{product.model}</h2>
      <p>{product.price}</p>
      <button type="button">Delete</button>
      <button type="button">Edit</button>
    </div>
  )
};

export default ProductCard;