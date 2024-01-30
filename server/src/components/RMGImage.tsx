import React from 'react';

interface RMGImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const RMGImage: React.FC<RMGImageProps> = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} className="rounded" />;
};

export default RMGImage;
