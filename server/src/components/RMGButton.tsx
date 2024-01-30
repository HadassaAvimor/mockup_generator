import React from 'react';

interface RMGButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const RMGButton: React.FC<RMGButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default RMGButton;
