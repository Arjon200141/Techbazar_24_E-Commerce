import React from 'react';

const Info = ({ onNameChange, onNumberChange, onBudgetChange, onDescriptionChange }) => {
    return (
        <div className=' p-5'>
            <div className='w-full flex gap-x-5'>
                <div className=''>
                    <div className='flex items-center gap-5'>
                        <p className='text-xl font-semibold text-gray-600 space-grotesk'>Name *</p>
                    </div>
                    <input
                        type="text"
                        name="name"
                        onChange={onNameChange}
                        placeholder='Your Name *'
                        className='w-full px-5 h-14 my-5 text-base outline-none focus:border-gray-500 border-2 rounded'
                    />
                </div>

                <div className=''>
                    <div className='flex items-center gap-5'>
                        <p className='text-xl font-semibold text-gray-600 space-grotesk'>Number *</p>
                    </div>
                    <input
                        type="text"
                        name="number"
                        onChange={onNumberChange}
                        placeholder='Your Number *'
                        className='w-full px-5 h-14 my-5 text-base outline-none focus:border-gray-500 border-2 rounded'
                    />
                </div>
            </div>
            <div className='w-full'>
                <div className='flex items-center gap-5'>
                    <p className='text-xl font-semibold text-gray-600 space-grotesk'>Your Estimated Budget * </p>
                </div>
                <select
                    name="budget"
                    onChange={onBudgetChange}
                    className="select select-bordered w-full h-14 my-5 text-xl"
                    required
                >
                    <option value="" disabled selected>Choose an option</option>
                    <option value="50K-100K">50K-100K</option>
                    <option value="100K-200K">100K-200K</option>
                    <option value="200K-500K">200K-500K</option>
                    <option value="More than 500K">More than 500K +</option>
                </select>
            </div>
            <div className='w-full'>
                <div className='flex items-center gap-5'>
                    <p className='text-xl font-semibold text-gray-600 space-grotesk'>Short description *</p>
                </div>
                <textarea
                    name="description"
                    onChange={onDescriptionChange}
                    placeholder="Bio"
                    className="textarea textarea-bordered textarea-lg text-xl w-full h-[200px] my-5"
                ></textarea>
            </div>
        </div>
    );
};

export default Info;