import LowerHeader from '@/components/header-components/Lower-header';
import MiddleHeader from '@/components/header-components/Middle-header';
import UpperHeader from '@/components/header-components/Upper-header';
import React from 'react';
const Header: React.FC = () => {
  return (
    <div className='grid grid-row-3 absolute top-0 z-5 w-full space-y-3'>
        <UpperHeader/>
        <MiddleHeader/>
        <LowerHeader/>
    </div>
  );
};

export default Header;