import React from 'react';
import logo from '../assets/icons/logo.png';

const MobileHeader = () => {
  return (
    <div>
        <header className='header'>
            <img src={logo} alt="IBC2888" className='logo' />
        </header>
    </div>
  )
}

export default MobileHeader;