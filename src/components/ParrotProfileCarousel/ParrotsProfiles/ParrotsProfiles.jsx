/* eslint-disable no-unused-vars */
import './ParrotsProfiles.scss';
import { PARROTS_PROFILES } from '../../../utils/constants';

import ParrotCard from '../ParrotCard/ParrotCard';
import Carousel from '../Carousel/Carousel';

function ParrotsProfiles() {
  return (
    <section className="parrots-profiles">
      <div className="parrots-profiles__box">
        <h2 className="parrots-profiles__title">Parrot&apos;s profiles</h2>
        <p className="parrots-profiles__subtitle">
          They are so{' '}
          <span className="parrots-profiles__accent-word">different</span>
        </p>
        <Carousel />
        {/* <div className="parrots-profiles__card-box">
          {PARROTS_PROFILES.map((card) => (
            <ParrotCard card={card} key={card.id} />
          ))}
          </div> */}
      </div>
    </section>
  );
}

export default ParrotsProfiles;
