/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './InformationBox.scss';

function InformationBox() {
  return (
    <nav className="footer__informaiton-box">
      <ul className="footer__informaiton-list">
        <li className="footer__informaiton-item">
          <NavLink
            to="/blog"
            // target="_blank"
            // rel="noreferrer"
            className="footer__informaiton-link"
          >
            Blog
          </NavLink>
        </li>
        <li className="footer__informaiton-item">
          <NavLink
            to="/quiz"
            // target="_blank"
            // rel="noreferrer"
            className="footer__informaiton-link"
          >
            Quiz
          </NavLink>
        </li>
        <li className="footer__informaiton-item">
          <NavLink
            to="/about-us"
            // target="_blank"
            // rel="noreferrer"
            className="footer__informaiton-link"
          >
            About us
          </NavLink>
        </li>
      </ul>
      <ul className="footer__informaiton-list">
        <li className="footer__informaiton-item">
          <NavLink
            to="/blog/parrots_pop_culture"
            // target="_blank"
            // rel="noreferrer"
            className="footer__informaiton-link"
          >
            Collaboration with the Masscult podcast
          </NavLink>
        </li>
        <li className="footer__informaiton-item">
          <HashLink
            smooth
            to="/ParrotTale/#profiles"
            // href="#profiles"
            // target="_blank"
            // rel="noreferrer"
            className="footer__informaiton-link"
          >
            Parrot&apos; profiles
          </HashLink>
        </li>
        <li className="footer__informaiton-item">
          <HashLink
            // href="#faq"
            smooth
            to="/ParrotTale/#faq"
            // target="_blank"
            // rel="noreferrer"
            className="footer__informaiton-link"
          >
            FAQ
          </HashLink>
        </li>
      </ul>

      {/*
        <ul className="footer__informaiton-list">
        <li className="footer__informaiton-item">
          <a
            href="https://github.com/dashimiko"
            target="_blank"
            rel="noreferrer"
            className="footer__informaiton-link"
          >
            Privacy Policy
          </a>
        </li>
         <li className="footer__informaiton-item">
          <a
            href="https://github.com/dashimiko"
            target="_blank"
            rel="noreferrer"
            className="footer__informaiton-link"
          >

          </a>
        </li>
        </ul> */}
    </nav>
  );
}

export default InformationBox;
