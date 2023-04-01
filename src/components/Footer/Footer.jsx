import './Footer.scss';
import SocialBox from './SocialBox/SocialBox';
import InformationBox from './InformationBox/InformationBox';
import ContactForm from './ContactForm/ContactForm';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-box">
          <span className="footer__social-title">follow us</span>
          <SocialBox />
          <span className="footer__social-title">information</span>
          <InformationBox />
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
