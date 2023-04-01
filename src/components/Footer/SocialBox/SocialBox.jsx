import './SocialBox.scss';

import facebookIcon from '../../../images/icons/icon-facebook.svg';
import instagramIcon from '../../../images/icons/icon-instagram.svg';
import twitterIcon from '../../../images/icons/icon-twitter.svg';

function SocialBox() {
  return (
    <nav>
      <ul className="footer__social-box">
        <li className="footer__social-item">
          <a
            className="footer__social-link"
            href="https://github.com/dashimiko"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="alt" src={facebookIcon} className="footer__social-icon" />
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
  );
}

export default SocialBox;
