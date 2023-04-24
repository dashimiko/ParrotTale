import './Promo.scss';
import PictureBox from './PictureBox/PictureBox';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__box">
        <div className="promo__figure rotation" />
        <div className="promo__dots" />
        <div className="promo__title-box">
          <h1 className="promo__title">
            Combine
            <span className="promo__strong-word_desktop">
              <span className="promo__strong-word"> fine</span> pictures
            </span>
            <span className="promo__strong-word_mobile">
              <span className="promo__strong-word"> cool</span> images
            </span>
          </h1>
          <h2 className="promo__subtitle_desktop">To represent a rainbow</h2>
          <h2 className="promo__subtitle_mobile">
            To create any grid by scaling and resizing
          </h2>
        </div>
        <PictureBox />
      </div>
    </section>
  );
}

export default Promo;
