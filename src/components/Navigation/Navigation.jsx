import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav className="navigation navigation_state_opened">
      <ul className="navigation__list navigation__container">
        <li className="navigation__item">
          <NavLink
            exact
            to="/rainbow"
            activeClassName="navigation__link_active navigation__link_menu-active"
            className="navigation__link navigation__link_main link"
          >
            Главная
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/tictactoe"
            activeClassName="navigation__link_active navigation__link_menu-active"
            className="navigation__link link"
          >
            TicTacToe
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/nothing-here"
            activeClassName="navigation__link_active navigation__link_menu-active"
            className="navigation__link link"
          >
            Nothing Here
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
