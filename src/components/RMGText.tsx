import React from 'react';

interface RMGTextProps {
    children: React.ReactNode;
}

const RMGText: React.FC<RMGTextProps> = ({ children }) => {
    return <p>{children}</p>;
};

export default RMGText;
