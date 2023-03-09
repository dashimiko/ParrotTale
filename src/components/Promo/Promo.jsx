import React from 'react';
import './Promo.scss';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__figure" />
      <div className="promo__dots" />
      <div className="promo__title-box">
        <h1 className="promo__title">
          Combine
          <span className="promo__strong-word"> fine</span> unicorns
        </h1>
        <h2 className="promo__subtitle">To represent a rainbow</h2>
      </div>
    </div>
  );
}

export default Promo;
