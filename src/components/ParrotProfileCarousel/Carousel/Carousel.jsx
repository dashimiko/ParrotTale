/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ParrotCard from '../ParrotCard/ParrotCard';
import { PARROTS_PROFILES } from '../../../utils/constants';
import './Carousel.scss';

function Carousel() {
  // const slideCount = 3; // Количество отображаемых слайдов
  const totalSlides = PARROTS_PROFILES.length;

  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 500) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 800) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={370}
      naturalSlideHeight={700}
      totalSlides={totalSlides}
      visibleSlides={visibleSlides}
      lockOnWindowScroll={true}
      slideSpacing={20}
      infinite={true}
    >
      <Slider className="carousel">
        <div className="parrots-profiles__card-box">
          {PARROTS_PROFILES.map((card, index) => (
            <Slide index={index} key={card.id}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ParrotCard card={card} />
              </div>
            </Slide>
          ))}
        </div>
      </Slider>
      <ButtonBack className="carousel__arrow carousel__arrow_left" />
      <ButtonNext className="carousel__arrow carousel__arrow_right" />
    </CarouselProvider>
  );
}

export default Carousel;
