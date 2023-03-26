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
          <span className="footer__social-title">information</span>
          <nav className="footer__informaiton-box">
            <ul className="footer__informaiton-list">
              <li className="footer__informaiton-item">
                <a
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__informaiton-link"
                >
                  Fapster app
                </a>
              </li>
              <li className="footer__informaiton-item">
                <a
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__informaiton-link"
                >
                  Get in Touch
                </a>
              </li>
              <li className="footer__informaiton-item">
                <a
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__informaiton-link"
                >
                  Things We Like
                </a>
              </li>
            </ul>
            <ul className="footer__informaiton-list">
              <li className="footer__informaiton-item">
                <a
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__informaiton-link"
                >
                  Onhovered / Active
                </a>
              </li>
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
                  Terms of Service
                </a>
              </li>
            </ul>
            <ul className="footer__informaiton-list">
              <li className="footer__informaiton-item">
                <a
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__informaiton-link"
                >
                  We are hiring!
                </a>
              </li>
              <li className="footer__informaiton-item">
                <a
                  href="https://github.com/dashimiko"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__informaiton-link"
                >
                  Resources
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
