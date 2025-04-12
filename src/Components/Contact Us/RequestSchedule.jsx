import React, { useState, useRef, useEffect } from 'react';
import CalendarComponent from './CalendarComponent';
import TimeSlotSelector from './TimeSlotSelector';
import Info from './Info';
import { FaCalendarAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import ServiceSelector from './ServiceSelector';
import WhatHappensNext from './WhatHappensNext';

const RequestSchedule = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // State for all form data except date (which Calendar manages)
  const [formData, setFormData] = useState({
    selectedTime: null,
    name: '',
    number: '',
    budget: '',
    description: '',
    service: null
  });

  // Ref to access Calendar's selected date
  const calendarRef = useRef();

  const slides = [
    { component: <CalendarComponent ref={calendarRef} />, icon: <FaCalendarAlt /> },
    { component: <TimeSlotSelector selectedTime={formData.selectedTime} onTimeSelect={handleTimeSelect} />, icon: <FaClock /> },
    {
      component: <Info
        onNameChange={(e) => setFormData({ ...formData, name: e.target.value })}
        onNumberChange={(e) => setFormData({ ...formData, number: e.target.value })}
        onBudgetChange={(e) => setFormData({ ...formData, budget: e.target.value })}
        onDescriptionChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />,
      icon: <FaInfoCircle />
    }
  ];

  // Handler for time selection
  function handleTimeSelect(time) {
    setFormData({ ...formData, selectedTime: time });
  }

  // Handler for service selection
  function handleServiceSelect(service) {
    setFormData({ ...formData, service });
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleSubmit = () => {
    // Get the current selected date from Calendar component
    const selectedDate = calendarRef.current?.getSelectedDate() || new Date();

    const submissionData = {
      ...formData,
      selectedDate
    };

    console.log("Form Submission Data:", submissionData);
    alert('Form submitted! Check console for data.');
  };

  // Handle wheel/touch events for swipe navigation
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startY = 0;
    let isSwiping = false;

    const handleWheel = (e) => {
      if (isAnimating) return;

      if (e.deltaY > 0) {
        // Scroll down - move to next slide
        goToSlide(Math.min(currentSlide + 1, slides.length - 1));
      } else {
        // Scroll up - move to previous slide
        goToSlide(Math.max(currentSlide - 1, 0));
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
      isSwiping = true;
    };

    const handleTouchMove = (e) => {
      if (!isSwiping || isAnimating) return;
      const y = e.touches[0].clientY;
      const diff = startY - y;

      // Only prevent default if vertical swipe
      if (Math.abs(diff) > 10) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!isSwiping || isAnimating) return;
      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;

      if (diff > 50) {
        // Swipe up - next slide
        goToSlide(Math.min(currentSlide + 1, slides.length - 1));
      } else if (diff < -50) {
        // Swipe down - previous slide
        goToSlide(Math.max(currentSlide - 1, 0));
      }

      isSwiping = false;
    };

    slider.addEventListener('wheel', handleWheel);
    slider.addEventListener('touchstart', handleTouchStart, { passive: false });
    slider.addEventListener('touchmove', handleTouchMove, { passive: false });
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('wheel', handleWheel);
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide, isAnimating]);

  return (
    <div className='bg-teal-50 dark:bg-teal-50/0'>
      <div className='relative h-[155px] flex lg:justify-start justify-center items-center mt-5 lg:ml-10'>
        <p className='font-extrabold uppercase text-teal-200 dark:text-teal-600 lg:text-[100px] text-[70px] h-[100px] lg:top-0 top-[20px] lg:left-0 absolute m-0'>
          Lets Talk!</p>
        <h2 className='font-extrabold text-teal-700 dark:text-teal-200 lg:text-6xl text-4xl absolute lg:pl-8 lg:tracking-normal tracking-wider'>
          Lets Talk!</h2>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div className='flex justify-center items-center'>
          <ServiceSelector onServiceSelect={handleServiceSelect}></ServiceSelector>
        </div>
        <div className="relative h-screen w-fit overflow-y-hidden overflow-x-clip">
          {/* Navigation Dots */}
          <div className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-teal-400 rounded-full shadow-black shadow-md z-20 flex flex-col items-center gap-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`p-2 rounded-full transition-all ${currentSlide === index ? 'text-teal-700 scale-125' : 'text-white hover:text-gray-600'}`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {React.cloneElement(slide.icon, {
                  size: 20,
                  className: currentSlide === index ? 'opacity-100' : 'opacity-70'
                })}
              </button>
            ))}
          </div>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="h-fit transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${currentSlide * 100}vh` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-screen w-full flex items-center justify-center p-4"
              >
                <div className="w-full">
                  {slide.component}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 right-10">
            <button
              onClick={handleSubmit}
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all"
            >
              Submit Request
            </button>
          </div>
        </div>
      </div>

      <WhatHappensNext></WhatHappensNext>

    </div>
  );
};

export default RequestSchedule;