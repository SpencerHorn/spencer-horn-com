import React from 'react';

import logob from '../../assets/spencer-horn-logo-black.png';
import './header.css';

export const Header: React.FC = () => {
  return (
    <header>
      <img src={logob} className='shlogo' alt="Spencer Horn Logo" />
    </header>
  );
};