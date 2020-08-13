import React from 'react';
import Logo from '../berlin.png';

const Header = () => {
  return (
    <div className='text-center mt-3'>
      <img src={Logo} width='100' height='100' alt='logo' />
      <h1 className='my-3'>Police Department of Berlin</h1>
      <h4 className='my-3'>Stolen bikes</h4>
    </div>
  );
};

export default Header;
