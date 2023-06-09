import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;