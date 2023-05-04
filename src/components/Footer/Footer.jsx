import './Footer.scss';
import SocialBox from './SocialBox/SocialBox';
import InformationBox from './InformationBox/InformationBox';
import ContactForm from './ContactForm/ContactForm';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__figure-first_mobile" />
        <div className="footer__figure-second_mobile" />
        <div className="footer__figure-third_mobile" />
        <div className="footer__content-box">
          <span className="footer__social-title">follow us</span>
          <SocialBox />
          <span className="footer__social-title">information</span>
          <InformationBox />
          <p className="footer__caption_company">
            Copyright © 2023 • Your Company • {}
            <span className="footer__caption_company-span">
              All rights reserved
            </span>
          </p>
          <p className="footer__caption_author">
            Made by da_miko{' '}
            <span className="footer__caption_author-span">
              One man digital agency
            </span>
          </p>
        </div>
        <div className="footer__content-box">
          <span className="footer__social-title">contact with me</span>
          <a className="footer__email" href="mailto:dashamikolaichuk@gmail.ru">
            dashamikolaichuk@gmail.ru
          </a>
          <span className="footer__social-title">keep in touch</span>
          <ContactForm />
        </div>
      </div>
      <div className="footer__wave" />
    </footer>
  );
}

export default Footer;
