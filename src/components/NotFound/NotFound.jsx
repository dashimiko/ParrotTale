import './NotFound.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="notfound section">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">not found</p>
      <div className="container">
        <div className="loro">
          <div className="circ" />
          <div className="circ3" />
          <div className="circ5" />
          <div className="circ7" />
          <div className="ojo" />
        </div>
        <div />
      </div>
      <Link to="/rainbow" className="notfound__link link">
        home
      </Link>
    </section>
  );
}

export default NotFound;
