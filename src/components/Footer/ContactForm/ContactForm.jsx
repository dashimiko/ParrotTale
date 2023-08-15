/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import CelebrationButton from '../../CelebrationButton/СelebrationButton';
import './ContactForm.scss';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = (data, e) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          setIsSending(false);
          // добавить какую то надпись или попап об успехе
        },
        (error) => {
          console.log('FAILED...', error);
          setIsSending(false);
          // добавить какую-то надпись или попап о неудаче
        }
      );
  };

  // сюда добавить еще одно условие, чтобы конфетти появлялись только при успешной отправке формы
  const handleConfetti = () => (!isValid ? 'invalid' : null);

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="contact-form__box">
        <label htmlFor="name-input" className="contact-form__name-input">
          <input
            {...register('name_from', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Должно быть минимум два символа',
              },
              maxLength: {
                value: 30,
                message: 'Должно быть максимум 30 символов',
              },
              pattern: {
                value: /^[А-ЯA-ZёәіңғүұқөһӘІҢҒҮҰҚӨҺ[\]h-]+$/imu,
                message:
                  'Допустимы только латиница, кириллица, пробелы и дефисы',
              },
              onChange: (e) => setName(e.target.value),
            })}
            className="contact-form__input contact-form__name"
            placeholder="Your name"
            type="text"
            name="name_from"
            id="name-input"
            value={name}
            autoComplete="off"
          />
          {errors?.name_from && (
            <span className="contact-form__error">
              {errors?.name_from?.message || 'something wrong...'}
            </span>
          )}
        </label>
        <label htmlFor="email-input" className="contact-form__email-input">
          <input
            {...register('email_from', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 2,
                message: 'Должно быть минимум два символа',
              },
              maxLength: {
                value: 50,
                message: 'Должно быть максимум 50 символов',
              },
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                message: 'Введите адрес электронной почты',
              },
              onChange: (e) => setEmail(e.target.value),
            })}
            className="contact-form__input contact-form__email"
            placeholder="E-mail"
            type="email"
            name="email_from"
            id="email-input"
            value={email}
            autoComplete="off"
          />
          {errors?.email_from && (
            <span className="contact-form__error">
              {errors?.email_from?.message || 'something wrong...'}
            </span>
          )}
        </label>
      </div>
      <div className="contact-form__box">
        <label htmlFor="message-input" className="contact-form__message-input">
          <textarea
            {...register('message_from', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 10,
                message: 'Должно быть минимум 10 символов',
              },
              onChange: (e) => setMessage(e.target.value),
            })}
            className="contact-form__input contact-form__text"
            placeholder="Leave your message"
            name="message_from"
            id="message-input"
            value={message}
            autoComplete="off"
          />
          {errors?.message_from && (
            <span className="contact-form__error">
              {errors?.message_from?.message || 'something wrong...'}
            </span>
          )}
        </label>
        <CelebrationButton
          isDisabled={isSending}
          // isDisabled={isSending || !isValid}
          buttonText="SEND"
          coordinateX={0.75}
          coordinateY={0.7}
          handleCelebrationButton={() => handleConfetti()}
        />
      </div>
    </form>
  );
}

export default ContactForm;
