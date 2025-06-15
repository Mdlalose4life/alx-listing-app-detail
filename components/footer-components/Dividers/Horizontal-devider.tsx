import React from 'react';

interface HorizintalDeviderProps {
  height?: string;
  color?: string;
  thickness?: string;
}

const HorizintalDevider: React.FC<HorizintalDeviderProps> = ({
  height = 'h-[0.1px]',
  color = 'bg-gray-700',
  thickness = 'w-py',
}) => {
  return <div className={`${height} ${thickness} ${color}`} />;
};

export default HorizintalDevider;
