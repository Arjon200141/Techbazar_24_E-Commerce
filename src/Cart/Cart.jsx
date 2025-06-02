import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Combined load/save effect with storage event listener
    useEffect(() => {
        // Load initial cart data
        const loadCart = () => {
            try {
                const savedCart = localStorage.getItem('cart');
                const parsedCart = savedCart ? JSON.parse(savedCart) : [];
                setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
            } catch (error) {
                console.error('Error loading cart:', error);
                setCartItems([]);
            }
            setIsLoading(false);
        };

        loadCart();

        // Listen for storage events (changes from other tabs)
        const handleStorageChange = (e) => {
            if (e.key === 'cart') {
                loadCart();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // Save to localStorage whenever cart changes
    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isLoading]);

    const removeFromCart = (productId) => {
        setCartItems(prevItems => {
            const newItems = prevItems.filter(item => item.id !== productId);
            return newItems;
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const calculateTotal = () => {
        const total = cartItems.reduce((total, item) => {
            const price = item.price?.current || 0;
            const quantity = item.quantity || 1;
            return total + (price * quantity);
        }, 0);

        // Round to 2 decimal places and convert back to number
        return parseFloat(total.toFixed(2));
    };

    const getCurrency = () => {
        return cartItems[0]?.price?.currency || '';
    };

    // Rest of your component remains the same...

    const proceedToCheckout = () => {
        navigate('/checkout');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0077b6]"></div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
                    <p className="mt-1 text-gray-500">Start adding some products to your cart</p>
                    <div className="mt-6">
                        <button
                            onClick={() => navigate('/')}
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0077b6] hover:bg-[#005f8d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0077b6]"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="p-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-20 w-20 bg-gradient-to-b from-[#0077b6] to-[#60c7fe] rounded-md flex items-center justify-center text-white">
                                                Product Image
                                            </div>

                                            <div className="ml-4 flex-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-medium text-[#005f8d]">
                                                        {item.product_name}
                                                    </h3>
                                                    <p className="ml-4 text-lg font-semibold text-gray-900">
                                                        {item.price.current} {item.price.currency}
                                                    </p>
                                                </div>

                                                <p className="text-sm text-gray-500">{item.brand}</p>

                                                <div className="mt-2 flex items-center">
                                                    <div className="flex items-center border border-gray-300 rounded-md">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                                                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="px-3 py-1 text-gray-900">{item.quantity || 1}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

                            <div className="border-t border-gray-200 pt-4">
                                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                                    <p>Subtotal</p>
                                    <p>{calculateTotal()} {cartItems[0]?.price.currency}</p>
                                </div>

                                <p className="text-sm text-gray-500 mb-6">
                                    Shipping and taxes calculated at checkout.
                                </p>

                                <button
                                    onClick={proceedToCheckout}
                                    className="w-full bg-gradient-to-b from-[#0077b6] to-[#60c7fe] hover:bg-[#005f8d] text-white py-3 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0077b6] transition-all duration-300"
                                >
                                    Checkout
                                </button>

                                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                                    <p>
                                        or{' '}
                                        <button
                                            onClick={() => navigate('/')}
                                            className="text-[#0077b6] font-medium hover:text-[#005f8d]"
                                        >
                                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;