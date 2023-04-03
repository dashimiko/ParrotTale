import { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from '@emailjs/browser';
import CelebrationButton from '../../CelebrationButton/СelebrationButton';
import './ContactForm.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      event.target,
      process.env.REACT_APP_PUBLIC_KEY
    );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__box">
        <input
          className="contact-form__input contact-form__name"
          placeholder="Your name"
          type="text"
          name="name_from"
          id="name-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          className="contact-form__input contact-form__email"
          placeholder="E-mail"
          type="email"
          name="email_from"
          id="email-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="contact-form__box">
        <textarea
          className="contact-form__input contact-form__text"
          placeholder="Leave your message"
          name="message_from"
          id="message-input"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <CelebrationButton
          buttonText="SEND"
          coordinateX={0.75}
          coordinateY={0.7}
          handleCelebrationButton={() =>
            // eslint-disable-next-line no-console
            console.log('congrat!')
          }
        />
      </div>
    </form>
  );
}

export default ContactForm;
