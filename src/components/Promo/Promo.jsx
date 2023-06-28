import './Promo.scss';
import PictureBox from './PictureBox/PictureBox';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__box">
        <div className="promo__figure rotation" />
        <div className="promo__figure_background" />
        <div className="promo__dots" />
        <div className="promo__title-box">
          <h1 className="promo__title">
            Discover
            <span className="promo__strong-word_desktop">
              <span className="promo__strong-word"> cute</span> parrots
            </span>
            <span className="promo__strong-word_mobile">
              <span className="promo__strong-word"> cool</span> birds
            </span>
          </h1>
          <h2 className="promo__subtitle_desktop">
            to explore the beauty of the world
          </h2>
          <h2 className="promo__subtitle_mobile">
            to explore the beauty of the world
          </h2>
        </div>
        <PictureBox />
      </div>
    </section>
  );
}

export default Promo;
