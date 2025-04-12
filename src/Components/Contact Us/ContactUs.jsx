import React, { useState } from 'react';
import SayHelloLocations from './SayHelloLocations';
import EstimateProject from './EstimateProject';
import RequestSchedule from './RequestSchedule';

const ContactUs = () => {
    const [activeTab, setActiveTab] = useState('sayhello'); // 'sayhello', 'estimate', or 'schedule'
    
    const backgroundStyle = {
        backgroundImage: "url('https://i.ibb.co.com/0pRbvBFS/pageBg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'estimate':
                return <EstimateProject />;
            case 'schedule':
                return <RequestSchedule />;
            case 'sayhello':
            default:
                return <SayHelloLocations />;
        }
    };

    const handleTabChange = (tab) => {
        // If clicking the already active tab, go back to sayhello
        setActiveTab(activeTab === tab ? 'sayhello' : tab);
    };

    return (
        <div>
            <div className="w-full min-h-screen flex items-center lg:justify-start justify-center lg:px-32 px-5 lg:py-0 py-5" style={backgroundStyle}>
                <div className="w-[100%] p-8 space-y-10 rounded-lg flex lg:flex-row flex-col-reverse shadow-xl lg:h-[70vh] bg-sky-800 bg-opacity-20 backdrop-blur-sm">
                    <div className='lg:w-[60%] space-y-10'>
                        <h2 className="text-5xl mt-[10%] stroke-white font-bold drop-shadow-[10px] bg-gradient-to-b from-blue-600 to-teal-500 text-transparent bg-clip-text">
                            Contact Us
                        </h2>
                        <p className="lg:w-[70%] text-xl mt-4 text-white space-grotesk">
                            We would love to hear from you! Please feel free to contact us for any inquiries, questions, or feedback. Our dedicated team is here to assist you and provide you with the information you need.
                        </p>
                        <div className='flex lg:flex-row flex-col justify-start gap-5 mt-5'>
                            <button
                                onClick={() => handleTabChange('estimate')}
                                className='relative overflow-hidden bg-teal-900/60 shadow-md text-white px-5 py-2 rounded-md transition-all duration-500 group'
                            >
                                <span className='absolute inset-0 bg-gradient-to-br from-teal-900/60 to-teal-300/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500' />
                                <span className='absolute inset-0 bg-gradient-to-br from-teal-300/60 to-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                                <span className='relative z-10 text-xl'>
                                    {activeTab === 'estimate' ? 'Say Hello' : 'Estimate Project'}
                                </span>
                            </button>

                            <button
                                onClick={() => handleTabChange('schedule')}
                                className='relative overflow-hidden bg-teal-900/60 shadow-md text-white px-5 py-2 rounded-md transition-all duration-500 group'
                            >
                                <span className='absolute inset-0 bg-gradient-to-br from-teal-900/60 to-teal-300/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500' />
                                <span className='absolute inset-0 bg-gradient-to-br from-teal-300/60 to-teal-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                                <span className='relative z-10 text-xl'>
                                    {activeTab === 'schedule' ? 'Say Hello' : 'Request Schedule'}
                                </span>
                            </button>
                        </div>
                    </div>
                    <img className='lg:w-fit w-[300px] rounded-2xl mx-auto' src="https://i.ibb.co.com/BVrzRNxy/Contact-robott.png" alt="" />
                </div>
            </div>
            {renderTabContent()}
        </div>
    );
};

export default ContactUs;