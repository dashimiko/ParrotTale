import { React } from 'react';
import './Footer.scss';
import facebookIcon from '../../images/icons/icon-facebook.svg';
import instagramIcon from '../../images/icons/icon-instagram.svg';
import twitterIcon from '../../images/icons/icon-twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-box">
          <span className="footer__social-title">follow us</span>
          <nav>
            <ul className="footer__social-box">
              <li className="footer__social-item">
                <a
                  className="footer__social-link"
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="alt"
                    src={facebookIcon}
                    className="footer__social-icon"
                  />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  className="footer__social-link"
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="alt" src={instagramIcon} />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  className="footer__social-link"
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img alt="alt" src={twitterIcon} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__content-box">
          <span className="footer__social-title">contact with me</span>
          <a className="footer__email" href="mailto:dashamikolaichuk@gmail.ru">
            dashamikolaichuk@gmail.ru
          </a>
        </div>
      </div>
      <div className="footer__wave" />
    </footer>
  );
}

export default Footer;
