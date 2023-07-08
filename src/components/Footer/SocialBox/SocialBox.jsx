import './SocialBox.scss';

import instagramIcon from '../../../images/icons/icon-instagram.svg';

function SocialBox() {
  return (
    <nav>
      <ul className="footer__social-box">
        <li className="footer__social-item">
          <a
            className="footer__social-link"
            href="https://www.instagram.com/kira_petrovich_hohlova/"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="alt" src={instagramIcon} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SocialBox;
