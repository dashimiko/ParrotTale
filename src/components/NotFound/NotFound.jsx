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
          <div className="circ8" />
          <div className="circ3" />
          <div className="circ5" />
          <div className="circ7" />
          <div className="ojo" />
          <div className="detail" />
          <div className="text-figure">
            <p className="aaaa">
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </p>
          </div>
        </div>
        <div />
      </div>
      <Link to="/ParrotTale" className="notfound__link link">
        home
      </Link>
    </section>
  );
}

export default NotFound;
