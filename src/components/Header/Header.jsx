import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.scss';

function Header() {
  return (
    <div className="header header__section_white">
      <div className="header__section section">
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
