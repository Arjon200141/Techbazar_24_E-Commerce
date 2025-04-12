import React, { useState } from 'react';
import Estimations from './Estimations';
import { ImAttachment } from "react-icons/im";

const EstimateProject = () => {
    const estimations = [
        {
            title: "What are your main challenges that we can help you with?",
            estimationfactors: [
                { name: "R&D", image: "https://apisolutionsltd.com/projectEstimateicon/r&d.svg" },
                { name: "Systems Architecture", image: "https://apisolutionsltd.com/projectEstimateicon/architecture.svg" },
                { name: "UI/UX", image: "https://apisolutionsltd.com/projectEstimateicon/ui-ux.svg" },
                { name: "Development", image: "https://apisolutionsltd.com/projectEstimateicon/development.svg" },
                { name: "QA", image: "https://apisolutionsltd.com/projectEstimateicon/qa.svg" },
                { name: "Integrations", image: "https://apisolutionsltd.com/projectEstimateicon/integration.svg" },
                { name: "Maintenance", image: "https://apisolutionsltd.com/projectEstimateicon/maintenance.svg" },
                { name: "Consultency", image: "https://apisolutionsltd.com/projectEstimateicon/consultancy.svg" },
            ]
        },
        {
            title: "I already have",
            estimationfactors: [
                { name: "Idea", image: "https://apisolutionsltd.com/projectEstimateicon/idea.svg" },
                { name: "Specifications", image: "https://apisolutionsltd.com/projectEstimateicon/specification.svg" },
                { name: "UI/UX", image: "https://apisolutionsltd.com/projectEstimateicon/ui-ux.svg" },
                { name: "Code", image: "https://apisolutionsltd.com/projectEstimateicon/code.svg" },
            ]
        },
        {
            title: "Timeframe",
            timeframe: true,
            estimationfactors: [
                { status: "Hiring", time: "Now" },
                { status: "Hiring Within", time: "1 Month" },
                { status: "Hiring Within", time: "3 Months" },
                { status: "Hiring Within", time: "Later" },
            ]
        }
    ];

    // State for form inputs
    const [formData, setFormData] = useState({
        projectType: "",
        userType: "",
        contactTime: "",
        name: "",
        email: "",
        phone: "",
        bio: "",
        newsletter: false,
        challenges: [],
        existingAssets: [],
        hiringTimeframe: ""
    });

    const [errors, setErrors] = useState({});

    // Handle checkbox changes from Estimations component
    const handleEstimationChange = (index, selectedItems) => {
        if (index === 0) {
            setFormData(prev => ({ ...prev, challenges: selectedItems }));
        } else if (index === 1) {
            setFormData(prev => ({ ...prev, existingAssets: selectedItems }));
        } else if (index === 2 && selectedItems.length > 0) {
            setFormData(prev => ({ ...prev, hiringTimeframe: selectedItems[0].time }));
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate required fields
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone is required";
        if (!formData.projectType) newErrors.projectType = "Project type is required";
        if (!formData.userType) newErrors.userType = "User type is required";
        if (!formData.contactTime) newErrors.contactTime = "Contact time is required";
        
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length > 0) {
            console.error("Form errors:", newErrors);
            return;
        }
        
        console.log("Form data submitted:", formData);
        // Here you would typically send the data to an API
    };

    return (
        <div className='bg-teal-50 dark:bg-teal-50/0'>
            <div className='relative h-[155px] flex lg:justify-start justify-center items-center mt-5 lg:ml-10'>
                <p className='font-extrabold uppercase text-teal-200 dark:text-teal-600 lg:text-[100px] text-[40px] h-[100px] lg:top-[-5px] top-[45px] lg:left-0 absolute m-0'>
                    Estimate Project</p>
                <h2 className='font-extrabold text-teal-700 dark:text-teal-200 lg:text-6xl text-[28px] absolute lg:pl-16 lg:tracking-normal tracking-widest'>
                    Estimate Project</h2>
            </div>
            <form onSubmit={handleSubmit} className=' lg:mx-32 mx-5 py-10'>
                <div>
                    {estimations.map((item, index) => (
                        <Estimations 
                            key={index}
                            object={item} 
                            id={index}
                            onChange={(selectedItems) => handleEstimationChange(index, selectedItems)}
                        />
                    ))}
                </div>
                <div className='flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-[45%]'>
                        <div className='flex items-center gap-5'>
                            <span className='lg:py-3 lg:px-5 px-2 lg:text-2xl text-xl text-teal-700 bg-teal-200 border-2 rounded border-gray-800'>4</span>
                            <p className='lg:text-2xl text-xl font-semibold text-teal-600 space-grotesk'>Is this a new or existing project?</p>
                        </div>
                        <select 
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="select select-bordered w-full h-16 my-5 text-xl"
                            required
                        >
                            <option value="" disabled selected>Choose an option</option>
                            <option value="Existing Project">Existing Project</option>
                            <option value="New Project">New Project</option>
                        </select>
                        {errors.projectType && <p className="text-red-500">{errors.projectType}</p>}
                    </div>
                    <div className='lg:w-[45%]'>
                        <div className='flex items-center gap-5'>
                            <span className='lg:py-3 lg:px-5 px-2 lg:text-2xl text-xl text-teal-700 bg-teal-200 border-2 rounded border-gray-800'>5</span>
                            <p className='lg:text-2xl text-xl font-semibold text-teal-600 space-grotesk'>You Are </p>
                        </div>
                        <select 
                            name="userType"
                            value={formData.userType}
                            onChange={handleInputChange}
                            className="select select-bordered w-full h-16 my-5 text-xl"
                            required
                        >
                            <option value="" disabled selected>Choose an option</option>
                            <option value="Individual">Individual</option>
                            <option value="Company">Company</option>
                        </select>
                        {errors.userType && <p className="text-red-500">{errors.userType}</p>}
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-[45%]'>
                        <div className='flex items-center gap-5'>
                            <span className='lg:py-3 lg:px-5 px-2 lg:text-2xl text-xl text-teal-700 bg-teal-200 border-2 rounded border-gray-800'>6</span>
                            <p className='lg:text-2xl text-xl font-semibold text-teal-600 space-grotesk'>Preferred Time For Contact </p>
                        </div>
                        <select 
                            name="contactTime"
                            value={formData.contactTime}
                            onChange={handleInputChange}
                            className="select select-bordered w-full h-16 my-5 text-xl"
                            required
                        >
                            <option value="" disabled selected>Choose an option</option>
                            <option value="Morning">Morning</option>
                            <option value="Noon">Noon</option>
                            <option value="Afternoon">Afternoon</option>
                        </select>
                        {errors.contactTime && <p className="text-red-500">{errors.contactTime}</p>}
                    </div>
                    <div className='lg:w-[45%]'>
                        <div className='flex items-center gap-5'>
                            <span className='lg:py-3 lg:px-5 px-2 lg:text-2xl text-xl text-teal-700 bg-teal-200 border-2 rounded border-gray-800'>5</span>
                            <p className='lg:text-2xl text-xl font-semibold text-teal-600 space-grotesk'>Attach any files you feel would be useful </p>
                        </div>
                        <div className=' w-full flex justify-center items-center gap-2 font-semibold h-16 my-5 text-xl border-2 border-gray-600 border-dashed'>
                            <ImAttachment />
                            <p>Please attach the PDF file</p>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-between'>
                    <div className='lg:w-[45%]'>
                        <div className='flex items-center gap-5'>
                            <span className='lg:py-3 lg:px-5 px-2 lg:text-2xl text-xl text-teal-700 bg-teal-200 border-2 rounded border-gray-800'>8</span>
                            <p className='lg:text-2xl text-xl font-semibold text-teal-600 space-grotesk'>Fill the details </p>
                        </div>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder='Your Name *' 
                            className='w-full px-5 h-16 my-5 text-xl outline-none focus:border-gray-500 border-2 rounded' 
                        />
                        {errors.name && <p className="text-red-500 -mt-4">{errors.name}</p>}
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Your Email address *' 
                            className='w-full px-5 h-16 my-5 text-xl outline-none focus:border-gray-500 border-2 rounded' 
                        />
                        {errors.email && <p className="text-red-500 -mt-4">{errors.email}</p>}
                        <input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder='Your Phone number *' 
                            className='w-full px-5 h-16 my-5 text-xl outline-none focus:border-gray-500 border-2 rounded' 
                        />
                        {errors.phone && <p className="text-red-500 -mt-4">{errors.phone}</p>}
                    </div>
                    <div className='lg:w-[45%] '>
                        <div className='flex items-center gap-5'>
                            <span className='lg:py-3 lg:px-5 px-2 lg:text-2xl text-xl text-teal-50/0
                             bg-teal-50/0  rounded '>5</span>
                            <p className='lg:text-2xl text-xl font-semibold text-teal-50/0 space-grotesk'>Attach any files you feel would be useful </p>
                        </div>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                            placeholder="Bio"
                            className="textarea textarea-bordered textarea-lg text-xl w-full h-[275px] lg:my-5"
                        ></textarea>
                    </div>
                </div>
                <div
                    className={`flex items-center p-2 mt-2 cursor-pointer`}
                    onClick={() => setFormData(prev => ({ ...prev, newsletter: !prev.newsletter }))}
                >
                    <div className={`w-6 h-6 border-2 rounded-full mr-2.5 flex items-center justify-center ${formData.newsletter ? 'border-green-700 bg-green-100' : 'border-gray-500'}`}>
                        {formData.newsletter && (
                            <svg className="w-3 h-3 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                    <div className="text-base text-wrap font-medium space-grotesk text-gray-600">
                        I want to receive a monthly tech newsletter
                    </div>
                </div>
                <button
                    type="submit"
                    className='relative overflow-hidden bg-teal-900/60 shadow-md text-white px-10 my-2 py-2 rounded-full transition-all duration-500 group'
                >
                    <span className='absolute inset-0 bg-gradient-to-br from-teal-900/60 to-teal-300/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500' />
                    <span className='absolute inset-0 bg-gradient-to-br from-teal-300/60 to-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <span className='relative z-10 text-xl'>SUBMIT</span>
                </button>
            </form>
        </div>
    );
};

export default EstimateProject;