// import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import logo from '../../images/icons/icon-logo-feather.svg';

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
    document.body.classList.toggle('body_lock');
  };

  return (
    <header className="header">
      <div className="header__box">
        <div className="logo__group">
          <Link to="/rainbow" className="header__link">
            <div className="header__logo-background">
              <img className="header__logo" src={logo} alt="Лого проекта" />
            </div>
          </Link>
          <p className="header__company-name">ParrotTales</p>
        </div>
        <Navigation isBurgerOpen={isBurgerOpen} onBurgerClick={onBurgerClick} />
      </div>
    </header>
  );
}

export default Header;
