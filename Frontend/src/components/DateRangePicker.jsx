import { useState, useRef, useEffect } from 'react';
import calendarIcon from '../assets/icons/calendarIcon.svg';

const DateRangePicker = ({ 
  label, 
  required = false, 
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  name 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  const isFloating = isFocused || startDate || endDate;

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setError('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    
    // Add the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const getNextMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    if (!date) return;
    setError(''); // Clear any previous error
    
    if (!isMultiDay) {
      // Single day mode - just set start date
      onStartDateChange(date);
      onEndDateChange(null);
    } else {
      // Multi-day mode
      if (!startDate) {
        // No start date yet - set it
        onStartDateChange(date);
        onEndDateChange(null);
      } else if (!endDate) {
        // Have start date, need end date
        if (date < startDate) {
          // Show error if selecting date before start date
          setError("You can't select a date before the start date");
        } else if (date.toDateString() === startDate.toDateString()) {
          // Same date clicked - do nothing or could toggle off
          return;
        } else {
          // Valid end date
          onEndDateChange(date);
        }
      } else {
        // Both dates set - start new selection
        onStartDateChange(date);
        onEndDateChange(null);
      }
    }
  };

  const isDateSelected = (date) => {
    if (!date) return false;
    if (startDate && date.toDateString() === startDate.toDateString()) return true;
    if (endDate && date.toDateString() === endDate.toDateString()) return true;
    return false;
  };

  const isDateInRange = (date) => {
    if (!date || !startDate || !endDate) return false;
    return date > startDate && date < endDate;
  };

  const formatDisplayDate = () => {
    if (!startDate) return '';
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    if (endDate && isMultiDay) {
      return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
    }
    return startDate.toLocaleDateString('en-US', options);
  };

  const handleDone = () => {
    setIsOpen(false);
    setError('');
  };

  const handleToggleMultiDay = () => {
    const newIsMultiDay = !isMultiDay;
    setIsMultiDay(newIsMultiDay);
    setError('');
    
    if (!newIsMultiDay) {
      // Turning off multi-day - clear end date
      onEndDateChange(null);
    }
    // When turning ON multi-day, keep the start date so user can select end date next
  };

  const renderMonth = (monthDate) => {
    const days = getDaysInMonth(monthDate);
    
    return (
      <div className="flex-1">
        {/* Month Header */}
        <div className="text-center font-newsreader font-semibold text-secondary text-base mb-6">
          {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
        </div>
        
        {/* Day Names */}
        <div className="grid grid-cols-7 gap-x-4 gap-y-2 mb-4">
          {dayNames.map(day => (
            <div key={day} className="text-center font-lato font-medium text-primary text-sm w-10">
              {day}
            </div>
          ))}
        </div>
        
        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-x-4 gap-y-3">
          {days.map((date, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDateClick(date)}
              disabled={!date}
              className={`
                w-10 h-10 flex items-center justify-center font-lato font-medium text-sm
                transition-colors duration-150 rounded-full
                ${!date ? 'invisible' : ''}
                ${isDateSelected(date) 
                  ? 'bg-primary text-white' 
                  : isDateInRange(date)
                    ? 'bg-[#E8E0DE] text-primary'
                    : 'text-primary hover:bg-gray-100'
                }
              `}
            >
              {date?.getDate()}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Input Field */}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
          setIsFocused(true);
        }}
        onBlur={() => !isOpen && setIsFocused(false)}
        className={`
          w-full px-4 py-4 
          border border-[#380F05] 
          bg-transparent 
          font-lato text-lg font-normal text-secondary
          cursor-pointer
          flex items-center justify-between
        `}
      >
        <span className={!startDate ? 'opacity-0' : ''}>
          {formatDisplayDate() || 'Select date'}
        </span>
        <img src={calendarIcon} alt="Select date" className="w-5 h-5 opacity-70" />
      </div>
      
      {/* Floating Label */}
      <label
        className={`
          absolute left-3 
          font-lato font-light text-lg
          text-[#380F05BF]
          transition-all duration-200
          pointer-events-none
          ${isFloating 
            ? '-top-3 text-sm bg-background px-1' 
            : 'top-1/2 -translate-y-1/2'
          }
        `}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Date Picker Dropdown - Positioned to the right */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-[#380F05]/20 rounded-2xl shadow-xl z-50 p-8 w-[720px]">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#380F05]/10">
            <span className="font-lato font-normal text-[15px] text-secondary">
              Start Date
            </span>
            <span className="text-secondary">⟶</span>
            <span className="font-lato font-normal text-[15px] text-secondary">
              End Date
            </span>
          </div>

          {/* Navigation and Months */}
          <div className="flex items-start">
            {/* Previous Month Button */}
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-2 hover:bg-gray-100 rounded-full text-secondary mt-0 mr-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Two Months */}
            <div className="flex gap-12 flex-1">
              {renderMonth(currentMonth)}
              {renderMonth(getNextMonth(currentMonth))}
            </div>

            {/* Next Month Button */}
            <button
              type="button"
              onClick={handleNextMonth}
              className="p-2 hover:bg-gray-100 rounded-full text-secondary mt-0 ml-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#380F05]/10">
            {/* Multi-day Toggle */}
            <div className="flex items-center gap-3">
              <span className="font-lato font-normal text-sm text-secondary">Multi-day Event</span>
              <button
                type="button"
                onClick={handleToggleMultiDay}
                className={`
                  w-14 h-7 rounded-full transition-colors duration-300 ease-in-out relative
                  ${isMultiDay ? 'bg-[#380F05]' : 'bg-gray-300'}
                `}
              >
                <span
                  className={`
                    absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm
                    transition-all duration-300 ease-in-out
                    ${isMultiDay ? 'left-8' : 'left-1'}
                  `}
                />
              </button>
            </div>

            {/* Error Message and Done Button */}
            <div className="flex items-center gap-4">
              {error && (
                <span className="font-lato text-sm text-secondary">
                  {error}
                </span>
              )}
              
              {/* Done Button */}
              <button
                type="button"
                onClick={handleDone}
                className="bg-primary text-white font-lato text-sm px-8 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;