import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            exact
            to="/rainbow"
            activeClassName="navigation__link_active"
            className="navigation__link"
          >
            Главная
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/tictactoe"
            activeClassName="navigation__link_active"
            className="navigation__link navigation__link_with-dot"
          >
            TicTacToe
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/nothing-here"
            activeClassName="navigation__link_active"
            className="navigation__link navigation__link_with-dot"
          >
            Nothing Here
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
