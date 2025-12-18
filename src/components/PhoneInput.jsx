import { useState } from 'react';
import Select from 'react-select';
import * as flags from 'country-flag-icons/react/3x2';

// Country data with flag components from country-flag-icons
const countryOptions = [
  { value: '+234', code: 'NG', country: 'Nigeria', FlagComponent: flags.NG },
  { value: '+1', code: 'US', country: 'USA', FlagComponent: flags.US },
  { value: '+44', code: 'GB', country: 'UK', FlagComponent: flags.GB },
  { value: '+91', code: 'IN', country: 'India', FlagComponent: flags.IN },
  { value: '+971', code: 'AE', country: 'UAE', FlagComponent: flags.AE },
  { value: '+27', code: 'ZA', country: 'South Africa', FlagComponent: flags.ZA },
  { value: '+233', code: 'GH', country: 'Ghana', FlagComponent: flags.GH },
  { value: '+254', code: 'KE', country: 'Kenya', FlagComponent: flags.KE },
];

const PhoneInput = ({ 
  label, 
  required = false, 
  value, 
  onChange,
  countryCode,
  onCountryChange,
  name 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFloating = isFocused || value;

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: '1px solid #380F05',
      borderRadius: 0,
      padding: '16px 8px',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      minWidth: '100px',
      minHeight: '58px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        border: '1px solid #380F05',
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    singleValue: (provided) => ({
      ...provided,
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#380F05',
      padding: '0 4px',
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 0,
      border: '1px solid #380F05',
      boxShadow: 'none',
      marginTop: 0,
      minWidth: '250px',
      zIndex: 20,
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
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

  // Custom component for the selected value - shows only flag with border radius
  const SingleValue = ({ data }) => {
    const Flag = data.FlagComponent;
    return (
      <div 
        style={{ 
          width: '32px', 
          height: '24px', 
          borderRadius: '4px', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Flag style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
      </div>
    );
  };

  // Custom component for dropdown options - shows flag + country + code
  const Option = (props) => {
    const Flag = props.data.FlagComponent;
    return (
      <div
        ref={props.innerRef}
        {...props.innerProps}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          cursor: 'pointer',
          fontFamily: 'Lato, sans-serif',
          fontSize: '14px',
          color: (props.isSelected || props.isFocused) ? '#FFFEFD' : '#380F05',
          backgroundColor: (props.isSelected || props.isFocused) ? '#380F05' : 'transparent',
        }}
      >
        <div 
          style={{ 
            width: '28px', 
            height: '20px', 
            flexShrink: 0, 
            borderRadius: '3px', 
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Flag style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
        </div>
        <span>{props.data.country} ({props.data.value})</span>
      </div>
    );
  };

  return (
    <div className="flex gap-3">
      {/* Country Code Selector */}
      <div className="flex-shrink-0">
        <Select
          options={countryOptions}
          value={countryCode}
          onChange={onCountryChange}
          styles={customStyles}
          isSearchable={false}
          components={{
            SingleValue,
            Option
          }}
        />
      </div>
      
      {/* Phone Number Input */}
      <div className="relative flex-1">
        <input
          type="tel"
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="
            w-full h-full px-4 py-4
            border border-[#380F05]
            bg-transparent 
            font-lato text-lg font-normal text-secondary
            outline-none
            transition-all duration-200
          "
        />
        <label
          className={`
            absolute left-4 
            font-lato font-light text-lg
            text-[#380F05BF]
            transition-all duration-200
            pointer-events-none
            ${isFloating 
              ? '-top-3 text-sm bg-background px-1 left-3' 
              : 'top-1/2 -translate-y-1/2'
            }
          `}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
    </div>
  );
};

export default PhoneInput;