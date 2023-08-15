import './ParrotsProfiles.scss';
import Carousel from '../Carousel/Carousel';

function ParrotsProfiles() {
  return (
    <section className="parrots-profiles" id="profiles">
      <div className="parrots-profiles__box">
        <h2 className="parrots-profiles__title">Parrot&apos;s profiles</h2>
        <p className="parrots-profiles__subtitle">
          They are so{' '}
          <span className="parrots-profiles__accent-word">different</span>
        </p>
        <Carousel />
      </div>
    </section>
  );
}

export default ParrotsProfiles;
