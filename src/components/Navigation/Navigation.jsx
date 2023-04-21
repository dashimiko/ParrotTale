// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/rainbow"
            className={(navData) =>
              navData.isActive ? 'navigation__link_active' : 'navigation__link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/tictactoe"
            className={(navData) =>
              navData.isActive
                ? 'navigation__link_active navigation__link_with-dot'
                : 'navigation__link navigation__link_with-dot'
            }
          >
            TicTacToe
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/nothing"
            className={(navData) =>
              navData.isActive
                ? 'navigation__link_active navigation__link_with-dot'
                : 'navigation__link navigation__link_with-dot'
            }
          >
            Nothing Here
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
            blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
