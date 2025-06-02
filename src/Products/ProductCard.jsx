import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  if (!product) return null;

  const { id, product_name, brand, price, technical_specifications } = product;

  const discount = price.original
    ? Math.round(((price.original - price.current) / price.original) * 100)
    : 0;

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();

    // Get current cart from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already exists in cart
    const existingItem = currentCart.find(item => item.id === product.id);

    if (existingItem) {
      // Update quantity if exists
      existingItem.quantity += 1;
    } else {
      // Add new item with quantity 1
      currentCart.push({ ...product, quantity: 1 });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));

    // Optional: You might want to show a notification here
    alert(`${product.product_name} added to cart!`);
  };

  return (
    <div
      className="max-w-xs rounded-none overflow-hidden shadow-xl bg-white border border-[#0077b6] hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Product Image */}
      <div className="bg-gradient-to-b from-[#0077b6] to-[#60c7fe] h-44 flex items-center justify-center text-white text-lg font-semibold">
        Product Image
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-[#005f8d] line-clamp-1">{product_name}</h3>
            <p className="text-gray-600 text-sm">{brand}</p>
          </div>
          {price.original && price.current < price.original && (
            <span className="min-w-fit bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Connectivity Badge */}
        {technical_specifications?.connectivity && (
          <div className="mb-3">
            <span className="inline-flex items-center bg-[#e0f4ff] text-[#0077b6] text-xs px-2 py-1 rounded-full">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {technical_specifications.connectivity}
            </span>
          </div>
        )}

        {/* Price and Action */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              {price.current} {price.currency}
            </span>
            {price.original && price.current < price.original && (
              <span className="text-xs line-through text-gray-500 ml-2">
                {price.original} {price.currency}
              </span>
            )}
          </div>
          <button
            className="bg-gradient-to-b from-[#0077b6] to-[#60c7fe] hover:bg-[#005f8d] text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300 shadow-md"
            onClick={handleButtonClick}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;