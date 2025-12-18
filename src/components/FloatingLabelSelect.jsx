import { useState } from 'react';
import Select from 'react-select';

const FloatingLabelSelect = ({ 
  label, 
  required = false, 
  options,
  value, 
  onChange,
  name 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value;

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #380F05',
      borderRadius: 0,
      padding: '12px 8px',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      '&:hover': {
        border: '1px solid #380F05',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 8px',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'transparent',
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      color: '#380F05',
    }),
    input: (provided) => ({
      ...provided,
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '18px',
      color: '#380F05',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#380F05',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 0,
      border: '1px solid #380F05',
      boxShadow: 'none',
      marginTop: 0,
      zIndex: 20,
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      color: (state.isSelected || state.isFocused) ? '#FFFEFD' : '#380F05',
      backgroundColor: (state.isSelected || state.isFocused) ? '#380F05' : 'transparent',
      padding: '12px 16px',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#380F05',
        color: '#FFFEFD',
      },
    }),
  };

  return (
    <div className="relative w-full">
      <Select
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        styles={customStyles}
        isSearchable={false}
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

export default FloatingLabelSelect;