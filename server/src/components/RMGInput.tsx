import React from 'react';

interface RMGInputProps {
  type?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RMGInput: React.FC<RMGInputProps> = ({ type = 'text', placeholder, onChange }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder}
      onChange={onChange}
      className="border border-gray-300 rounded px-3 py-2"
    />
  );
};

export default RMGInput;
