import React, { useState, useEffect } from 'react';

const Estimations = ({ object, id, onChange }) => {
    const { title, estimationfactors, timeframe } = object;
    const [checkedItems, setCheckedItems] = useState([]);

    const handleCheckboxChange = (item) => {
        setCheckedItems(prev => {
            if (timeframe) {
                // For timeframe, only allow one selection
                return prev.includes(item) ? [] : [item];
            } else {
                // For other sections, allow multiple selections
                return prev.includes(item) 
                    ? prev.filter(i => i !== item)
                    : [...prev, item];
            }
        });
    };

    useEffect(() => {
        // Notify parent component about changes
        onChange(checkedItems);
    }, [checkedItems, onChange]);

    return (
        <div>
            <div className='flex items-center gap-5'>
                <span className='lg:py-3 lg:px-5 px-2 lg:text-2xl text-xl text-teal-700 bg-teal-200 border-2 rounded border-gray-800'>{id + 1}</span>
                <p className='lg:text-2xl text-xl font-semibold text-teal-600 space-grotesk'>{title}</p>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-y-10 my-10'>
                {estimationfactors.map((item, index) => {
                    const isChecked = checkedItems.some(checkedItem => 
                        timeframe ? checkedItem.time === item.time : checkedItem.name === item.name
                    );
                    
                    return (
                        <div
                            key={index}
                            className={`w-[150px] mx-auto h-[150px] flex flex-col justify-center items-center rounded bg-amber-50 dark:bg-teal-200 relative shadow-xl border-2 ${isChecked ? "border-green-300" : "border-gray-400"}`}
                        >
                            <button
                                type="button"
                                onClick={() => handleCheckboxChange(item)}
                                className={`w-6 h-6 border-2 shadow-md absolute -top-2 -right-2 rounded-full flex items-center justify-center ${isChecked ? 'border-green-700 bg-green-100' : 'border-none bg-gray-200'}`}
                                aria-label={`Toggle ${item.name || item.time}`}
                            >
                                {isChecked && (
                                    <svg className="w-3 h-3 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </button>
                            {timeframe ? (
                                <>
                                    <p className='text-[22px] text-gray-500 font-semibold '>{item.status}</p>
                                    <p className='text-xl text-red-500 font-semibold text-center'>{item.time}</p>
                                </>
                            ) : (
                                <>
                                    <img className='w-[35%]' src={item.image} alt={item.name} />
                                    <p className='text-xl text-gray-600 font-semibold text-center'>{item.name}</p>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Estimations;