import React, { useState } from 'react';
import Recaptcha from './Recaptcha';

const SayHello = () => {
    const [formData, setFormData] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        comment: ''
    });
    const [ndaAgreed, setNdaAgreed] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        comment: '',
        ndaAgreed: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            company: '',
            name: '',
            email: '',
            phone: '',
            comment: '',
            ndaAgreed: ''
        };

        // Validate required fields
        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
            valid = false;
        }

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            valid = false;
        } else if (!/^[0-9+\-\s]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
            valid = false;
        }

        if (!ndaAgreed) {
            newErrors.ndaAgreed = 'You must agree to the NDA to proceed';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleCheckboxChange = () => {
        const newValue = !isChecked;
        setIsChecked(newValue);
        setNdaAgreed(newValue);
        // Clear NDA error when checkbox is clicked
        if (errors.ndaAgreed) {
            setErrors(prev => ({
                ...prev,
                ndaAgreed: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Log all form data to console
        console.log('Form Data:', {
            ...formData,
            ndaAgreed: ndaAgreed
        });

        // Here you would typically send the data to your backend
        // axios.post('/api/contact', { ...formData, ndaAgreed })
    };

    return (
        <div className='my-10 min-h-svh'>
            <div className='relative h-[155px] flex lg:justify-start justify-center items-center mt-5 lg:ml-10'>
                <p className='font-extrabold uppercase text-teal-200 dark:text-teal-600 lg:text-[100px] text-[70px] h-[100px] lg:top-0 top-[20px] lg:left-0 absolute m-0'>
                    Say Hello!</p>
                <h2 className='font-extrabold text-teal-700 dark:text-teal-200 lg:text-6xl text-4xl absolute lg:pl-8 lg:tracking-normal tracking-wider'>
                    Say Hello!</h2>
            </div>

            <form onSubmit={handleSubmit} className='w-full grid grid-cols-5 px-10'>
                <div className='lg:col-span-3 col-span-5 p-5 flex flex-wrap gap-y-3'>
                    <h2 className='text-3xl font-bold space-grotesk'>Contact us for a <span className='text-teal-500'>free <br />
                        IT consultation</span></h2>

                    <div className='w-full'>
                        <input
                            name="company"
                            type="text"
                            placeholder='Company'
                            value={formData.company}
                            onChange={handleInputChange}
                            className={`py-2 px-2 lg:text-2xl text-xl lg:my-2 my-1 w-full outline-none border-b-2 ${errors.company ? 'border-red-500' : 'border-gray-400 focus:border-black'}`}
                        />
                        {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
                    </div>

                    <div className='lg:w-[45%] w-full'>
                        <input
                            name="name"
                            type="text"
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`py-2 px-2 lg:text-2xl text-xl lg:my-2 my-1 w-full outline-none border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-400 focus:border-black'}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className='lg:ml-[10%] lg:w-[45%] w-full'>
                        <input
                            name="email"
                            type="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`py-2 px-2 lg:text-2xl text-xl lg:my-2 my-1 w-full outline-none border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-400 focus:border-black'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className='w-full'>
                        <input
                            name="phone"
                            type="tel"
                            placeholder='Phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`py-2 px-2 lg:text-2xl text-xl lg:my-2 my-1 w-full outline-none border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-400 focus:border-black'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    <div className='w-full'>
                        <textarea
                            name="comment"
                            placeholder='Comment'
                            value={formData.comment}
                            onChange={handleInputChange}
                            className={`py-2 px-2 lg:text-2xl text-xl lg:my-2 my-1 w-full outline-none border-b-2 ${errors.comment ? 'border-red-500' : 'border-gray-400 focus:border-black'}`}
                        />
                        {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
                    </div>

                    <Recaptcha siteKey={"6Lezjw4rAAAAAA9cpg2P63hW2Iwkbdj-XEcN5p_I"} />

                    <button
                        type="submit"
                        className='relative lg:w-[30%] w-full overflow-hidden bg-teal-900/60 shadow-md text-white px-5 py-2 rounded-md transition-all duration-500 group'
                    >
                        <span className='absolute inset-0 bg-gradient-to-br from-teal-900/60 to-teal-300/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500' />
                        <span className='absolute inset-0 bg-gradient-to-br from-teal-300/60 to-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                        <span className='relative z-10 text-xl'>SUBMIT</span>
                    </button>

                    <div className=" ml-5">
                        <div
                            className={`flex items-center p-2 mt-2 cursor-pointer`}
                            onClick={handleCheckboxChange}
                        >
                            <div className={`w-6 h-6 border-2 rounded-full mr-2.5 flex items-center justify-center ${isChecked ? 'border-green-700 bg-green-100' : 'border-gray-500'}`}>
                                {isChecked && (
                                    <svg className="w-3 h-3 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>
                            <div className="text-base text-wrap font-medium space-grotesk text-gray-600">
                                I want to protect my data by signing an NDA
                            </div>
                        </div>
                        {errors.ndaAgreed && <p className="text-red-500 text-sm ml-10">{errors.ndaAgreed}</p>}
                    </div>
                </div>

                <div className='lg:col-span-2 col-span-5'>
                    <div className='grid grid-cols-4 col-span-2 pt-10 h-[380px]'>
                        <div className='flex justify-center items-start relative'>
                            <p className='bg-gray-200 dark:bg-teal-200 dark:text-black rounded-full w-fit px-3 py-1 z-10'>1</p>
                            <div className='w-0 h-full border-dashed border-[1px] absolute z-0'></div>
                        </div>
                        <p className='col-span-3'>In 3 days an expert contacts you shortly after having analyzed your business requirements.</p>

                        <div className='flex justify-center items-start relative'>
                            <p className='bg-gray-200 dark:bg-teal-200 dark:text-black rounded-full w-fit px-3 py-1 z-10'>2</p>
                            <div className='w-0 h-full border-dashed border-[1px] absolute z-0'></div>
                        </div>
                        <p className='col-span-3'>We sign an NDA to ensure the highest privacy level if required.</p>

                        <div className='flex justify-center items-start relative'>
                            <p className='bg-gray-200 dark:bg-teal-200 dark:text-black rounded-full w-fit px-3 py-1'>3</p>
                        </div>
                        <p className='col-span-3'>We will submit a proposal according to your requirements including an estimate and timeline.</p>
                    </div>

                    <div className='lg:text-end text-center px-5'>
                        <p className='text-xl font-semibold space-grotesk'>Feel Free to Contact Us</p>
                        <p className='text-xl font-medium'><span className='text-red-700 space-grotesk'>Closed</span> (Friday-Saturday)</p>
                        <p className='text-xl font-medium'><span className='text-teal-700 space-grotesk'>9AM-6PM</span> (Sunday-Thursday)</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SayHello;