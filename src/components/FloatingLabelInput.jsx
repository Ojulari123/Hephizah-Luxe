import { useState } from 'react';

const FloatingLabelInput = ({ 
  label, 
  type = 'text', 
  required = false, 
  value, 
  onChange,
  name 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value;

  return (
    <div className="relative w-full">
      <input
        type={type}
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
    </div>
  );
};

export default FloatingLabelInput;