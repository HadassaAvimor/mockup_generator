import React from 'react';

interface RMGHeaderProps {
    level: '1' | '2' | '3' | '4' | '5' | '6';
    children: React.ReactNode;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({ level, children }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return React.createElement(Tag, { className: "text-xl font-bold" }, children);};

export default RMGHeader;
