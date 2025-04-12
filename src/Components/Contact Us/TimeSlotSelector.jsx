import React, { useState, useEffect } from 'react';

const TimeSlotSelector = ({ selectedTime, onTimeSelect }) => {
  // Generate time slots from 9:30 AM to 6:00 PM in 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    let hour = 9;
    let minute = 30;

    while (hour < 18 || (hour === 18 && minute === 0)) {
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 12 ? 12 : hour > 12 ? hour - 12 : hour;
      const timeString = `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
      
      slots.push({
        time: timeString,
        value: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`, // Format as HH:MM
        displayTime: timeString,
        isSelected: false,
        isBooked: false
      });

      // Increment time by 30 minutes
      minute += 30;
      if (minute >= 60) {
        minute = 0;
        hour += 1;
      }
    }

    return slots;
  };

  const [timeSlots, setTimeSlots] = useState(generateTimeSlots());

  // Sync with parent's selectedTime prop
  useEffect(() => {
    if (selectedTime) {
      setTimeSlots(prevSlots => 
        prevSlots.map(slot => ({
          ...slot,
          isSelected: slot.value === selectedTime
        }))
      );
    }
  }, [selectedTime]);

  const handleSlotClick = (index) => {
    const newSelection = timeSlots[index].isSelected ? null : timeSlots[index];
    
    setTimeSlots(prevSlots => 
      prevSlots.map((slot, i) => ({
        ...slot,
        isSelected: i === index ? !slot.isSelected : false
      }))
    );

    onTimeSelect(newSelection?.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl text-teal-700 font-semibold mb-4">Select a Time Slot</h2>
      
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            onClick={() => handleSlotClick(index)}
            disabled={slot.isBooked}
            className={`
              p-2 rounded-md border text-center transition-colors
              ${slot.isSelected 
                ? 'bg-teal-600 text-white border-teal-600' 
                : 'border-teal-300 hover:bg-teal-100 hover:border-teal-800'}
              ${slot.isBooked 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'cursor-pointer'}
            `}
            aria-label={`Select time slot at ${slot.displayTime}`}
          >
            {slot.displayTime}
          </button>
        ))}
      </div>

      {selectedTime && (
        <div className="mt-4 p-3 bg-teal-100 text-teal-800 rounded-md">
          Selected time: <span className="font-semibold">{
            timeSlots.find(slot => slot.value === selectedTime)?.displayTime
          }</span>
        </div>
      )}
    </div>
  );
};

export default TimeSlotSelector;