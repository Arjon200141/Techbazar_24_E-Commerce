import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/MOCK_DATA.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        // Find the product with matching ID
        const foundProduct = data.find(p => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading product data:', err);
        setError('Failed to load product data');
        setLoading(false);
      });
  }, [id]);

  const handleButtonClick = (e) => {
    e.stopPropagation();

    // Get current cart from localStorage or initialize empty array
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already exists in cart
    const existingItemIndex = currentCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      // Update quantity if exists
      currentCart[existingItemIndex] = {
        ...currentCart[existingItemIndex],
        quantity: (currentCart[existingItemIndex].quantity || 1) + 1
      };
    } else {
      // Add new item with proper structure and default quantity
      const cartProduct = {
        ...product,
        quantity: 1,
        // Ensure price structure is consistent
        price: {
          current: product.price.current,
          original: product.price.original || product.price.current,
          currency: product.price.currency
        }
      };
      currentCart.push(cartProduct);
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));

    // Dispatch event to notify other components of cart changes
    window.dispatchEvent(new Event('cartUpdated'));

    // Show feedback to user
    alert(`${product.product_name} added to cart! Current quantity: ${existingItemIndex !== -1 ? currentCart[existingItemIndex].quantity : 1
      }`);
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0077b6]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
      </div>
    );
  }

  const discountPercentage = product.price.original
    ? Math.round(((product.price.original - product.price.current) / product.price.original) * 100)
    : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image Section - Placeholder */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center h-96">
          <span className="text-gray-400">Product Image</span>
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <span className="text-sm text-gray-500">{product.brand}</span>
            <h1 className="text-3xl font-bold text-gray-800">{product.product_name}</h1>
            <p className="text-gray-600">Model: {product.model}</p>
          </div>

          {/* Price Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-[#0077b6]">
                {product.price.current} {product.price.currency}
              </span>
              {product.price.original && product.price.current < product.price.original && (
                <>
                  <span className="text-lg text-gray-500 line-through">
                    {product.price.original} {product.price.currency}
                  </span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                    {discountPercentage}% OFF
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Availability & Warranty */}
          <div className="mb-6 space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Availability:</span> {product.availability}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Warranty:</span> {product.warranty}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">SKU:</span> {product.sku}
            </p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={handleButtonClick} className="bg-gradient-to-r from-[#0077b6] to-[#60c7fe] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#005f8d] transition-colors">
              Add to Cart
            </button>
            <button className="border border-[#0077b6] text-[#0077b6] py-3 px-6 rounded-lg font-medium hover:bg-[#0077b6] hover:text-white transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.technical_specifications && Object.entries(product.technical_specifications).map(([key, value]) => {
            if (typeof value === 'object') {
              return (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-700 capitalize">{key.replace('_', ' ')}</h4>
                  <ul className="mt-1">
                    {Object.entries(value).map(([dim, val]) => (
                      <li key={dim} className="text-gray-600">
                        {dim}: {val} cm
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-700 capitalize">{key.replace('_', ' ')}</h4>
                <p className="text-gray-600">{value}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Applications */}
      {product.applications && product.applications.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Applications</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.applications.map((app, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#0077b6] mr-2">•</span>
                <span className="text-gray-700">{app}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;