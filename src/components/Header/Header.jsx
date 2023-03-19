import { React } from 'react';
// import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <section className="header">
      <div className="header__box">
        <div className="logo__group">
          <Link to="/" className="header__link">
            <img className="header__logo" src={logo} alt="Лого проекта" />
          </Link>
          <p className="header__company-name">Name</p>
        </div>
        <Navigation />
      </div>
    </section>
  );
}

export default Header;
