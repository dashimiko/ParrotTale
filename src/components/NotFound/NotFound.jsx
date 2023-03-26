import './NotFound.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="notfound section">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">Страница не найдена</p>
      <Link to="/rainbow" className="notfound__link link">
        Домой
      </Link>
    </section>
  );
}

export default NotFound;
