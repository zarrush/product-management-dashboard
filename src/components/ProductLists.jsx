import React from 'react';
import ProductCard from "./ProductCard";

const ProductLists = ({products,setProducts}) => {
  return(
      <>
        {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              products={products}
              setProducts={setProducts}
            />
          ))}
      </>
  );

}

export default ProductLists;