import React from 'react';
import './Promo.scss';
import PictureBox from './PictureBox/PictureBox';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__figure rotation" />
      <div className="promo__dots" />
      <div className="promo__title-box">
        <h1 className="promo__title">
          Combine
          <span className="promo__strong-word"> fine</span> pictures
        </h1>
        <h2 className="promo__subtitle">To represent a rainbow</h2>
      </div>
      <PictureBox />
    </section>
  );
}

export default Promo;
