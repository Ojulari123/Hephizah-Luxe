import { useState } from 'react';

const FloatingLabelTextarea = ({ 
  label, 
  required = false, 
  value, 
  onChange,
  name,
  placeholder = '',
  rows = 6
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="w-full">
      {/* Label above textarea */}
      <label className="block font-lato font-light text-base text-[#380F05BF] mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        rows={rows}
        className={`
          w-full px-4 py-4 
          border border-[#380F05] 
          bg-transparent 
          font-lato text-lg font-normal text-secondary
          outline-none
          transition-all duration-200
          resize-vertical
          placeholder:font-lato placeholder:font-light placeholder:text-[#380F05BF] placeholder:text-base
        `}
      />
    </div>
  );
};

export default FloatingLabelTextarea;