import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/MOCK_DATA.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error loading product data:', err));
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-32 my-10">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
