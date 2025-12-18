import { useState, useRef } from 'react';
import calendarIcon from '../assets/icons/calendarIcon.svg';

const FloatingLabelDateInput = ({ 
  label, 
  required = false, 
  value, 
  onChange,
  name 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const isFloating = isFocused || value;

  const handleIconClick = () => {
    inputRef.current?.showPicker();
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full px-4 py-4 
          border border-[#380F05] 
          bg-transparent 
          font-lato text-lg font-normal text-secondary
          outline-none
          transition-all duration-200
          appearance-none
          [&::-webkit-calendar-picker-indicator]:opacity-0
          [&::-webkit-calendar-picker-indicator]:absolute
          [&::-webkit-calendar-picker-indicator]:right-0
          [&::-webkit-calendar-picker-indicator]:w-full
          [&::-webkit-calendar-picker-indicator]:h-full
          [&::-webkit-calendar-picker-indicator]:cursor-pointer
        `}
      />
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
      
      {/* Calendar Icon */}
      <button
        type="button"
        onClick={handleIconClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <img src={calendarIcon} alt="Select date" className="w-5 h-5 opacity-70" />
      </button>
    </div>
  );
};

export default FloatingLabelDateInput;