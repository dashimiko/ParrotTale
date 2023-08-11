/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation({ isBurgerOpen, onBurgerClick }) {
  return (
    <>
      <nav
        className={`navigation navigation_state_${
          isBurgerOpen ? 'opened' : 'closed'
        }`}
        onClick={isBurgerOpen ? onBurgerClick : undefined}
      >
        <ul
          className={`navigation__list navigation__container navigation_${
            isBurgerOpen ? 'active' : ''
          }`}
        >
          <li className="navigation__item">
            <NavLink
              to="/rainbow"
              className={(navData) =>
                navData.isActive
                  ? 'navigation__link_active'
                  : 'navigation__link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/about-us"
              className={(navData) =>
                navData.isActive
                  ? 'navigation__link_active navigation__link_with-dot'
                  : 'navigation__link navigation__link_with-dot'
              }
            >
              About us
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/blog"
              className={(navData) =>
                navData.isActive
                  ? 'navigation__link_active navigation__link_with-dot'
                  : 'navigation__link navigation__link_with-dot'
              }
            >
              Blog
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/quiz"
              className={(navData) =>
                navData.isActive
                  ? 'navigation__link_active navigation__link_with-dot'
                  : 'navigation__link navigation__link_with-dot'
              }
            >
              Quiz
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className={`navigation__hamburger-menu ${
          isBurgerOpen
            ? 'navigation__hamburger-menu_fixed navigation_active'
            : ''
        }`}
        onClick={onBurgerClick}
      >
        <span />
      </button>
    </>
  );
}

export default Navigation;
