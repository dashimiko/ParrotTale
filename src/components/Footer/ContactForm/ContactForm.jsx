import { useState } from 'react';
import CelebrationButton from '../../CelebrationButton/СelebrationButton';
import './ContactForm.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // здесь можно добавить логику для отправки данных
  };

  return (
    <form className="contact-form">
      <div className="contact-form__box">
        <input
          className="contact-form__input contact-form__name"
          placeholder="Your name"
          type="text"
          id="name-input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          className="contact-form__input contact-form__email"
          placeholder="E-mail"
          type="email"
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
          id="message-input"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <CelebrationButton
          buttonText="SEND"
          handleCelebrationButton={handleSubmit}
          coordinateX={0.75}
          coordinateY={0.7}
        />
      </div>
    </form>
  );
}

export default ContactForm;