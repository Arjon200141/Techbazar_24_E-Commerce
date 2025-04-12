import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { 
  format, 
  isToday, 
  isBefore, 
  isSameDay, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isSameMonth 
} from 'date-fns';

const Calendar = forwardRef((props, ref) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Expose the selected date to parent via ref
  useImperativeHandle(ref, () => ({
    getSelectedDate: () => selectedDate,
    setSelectedDate: (date) => setSelectedDate(date)
  }));

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    if (isBefore(day, new Date()) && !isToday(day)) return;
    setSelectedDate(day);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={prevMonth}
          className="p-2 rounded-full text-teal-300 hover:text-teal-700 hover:bg-teal-300 transition-colors"
        >
          &lt;
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button 
          onClick={nextMonth}
          className="p-2 rounded-full text-teal-300 hover:text-teal-700 hover:bg-teal-300 transition-colors"
        >
          &gt;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center font-medium py-2">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const days = eachDayOfInterval({
      start: monthStart,
      end: monthEnd,
    });

    const startDay = monthStart.getDay();
    const blanks = Array(startDay).fill(null);

    return (
      <div className="grid grid-cols-7 gap-1">
        {blanks.map((_, index) => (
          <div key={`blank-${index}`} className="h-10"></div>
        ))}
        
        {days.map((day) => {
          const isDisabled = isBefore(day, new Date()) && !isToday(day);
          const isSelected = isSameDay(day, selectedDate);
          const isCurrentDay = isToday(day);

          return (
            <div
              key={day.toString()}
              onClick={() => onDateClick(day)}
              className={`
                h-10 flex items-center justify-center
                ${isSelected ? 'rounded-full bg-white text-black' : ''}
                ${isCurrentDay && !isSelected ? 'border-2 border-white' : ''}
                ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'cursor-pointer hover:text-teal-800 hover:bg-teal-400'}
                ${!isSameMonth(day, currentMonth) ? 'text-teal-400' : ''}
                transition-colors
              `}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="bg-teal-700 text-teal-300 p-4 rounded-lg shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className="mt-4 text-center">
        Selected: {format(selectedDate, 'MMMM d, yyyy')}
      </div>
    </div>
  );
});

Calendar.displayName = 'Calendar'; // This helps with debugging

export default Calendar;