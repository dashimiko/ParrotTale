import React from 'react';
import './PictureBox.scss';

function PictureBox() {
  return (
    <div className="pictureBox">
      <div className="pictureBox__fragment">
        <p className="pictureBox__text">
          Use mixed grid with imagery, replace with your own photos and
          descriptions
        </p>
        <img
          className="pictureBox__pic"
          src="/favicon144.png"
          alt="Красивая картинка"
        />
        <a
          className="pictureBox__link"
          href="https://doka.guide/html/figure-figcaption/"
        >
          Learn more
        </a>
      </div>
      <div className="pictureBox__fragment-container">
        <div className="pictureBox__fragment">
          <img
            className="pictureBox__pic"
            src="/favicon144.png"
            alt="Красивая картинка"
          />
          <figure>
            <img
              className="pictureBox__pic"
              src="/favicon144.png"
              alt="Красивая картинка"
            />
            <img
              className="pictureBox__pic"
              src="/favicon144.png"
              alt="Красивая картинка"
            />
            <figcaption className="pictureBox__text">Супер-логотип</figcaption>
          </figure>
        </div>
        <div className="pictureBox__fragment">
          <img
            className="pictureBox__pic"
            src="/favicon144.png"
            alt="Красивая картинка"
          />
          <img
            className="pictureBox__pic"
            src="/favicon144.png"
            alt="Красивая картинка"
          />
          <img
            className="pictureBox__pic"
            src="/favicon144.png"
            alt="Красивая картинка"
          />
        </div>
      </div>
    </div>
  );
}

export default PictureBox;
