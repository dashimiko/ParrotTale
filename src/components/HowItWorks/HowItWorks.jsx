import './HowItWorks.scss';
import ExploreButton from '../ExploreButton/ExploreButton';
import parrotPicture2 from '../../images/secondParrotPic.jpg';

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__box">
        <div className="how-it-works__text-box">
          <h2 className="how-it-works__title">How It Works</h2>
          <p className="how-it-works__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ExploreButton
            link="https://dribbble.com/shots/4397812-Click-Me#"
            localStyleName="how-it-works__button"
          />
        </div>
        <div className="how-it-works__pic-box">
          <img
            className="how-it-works__pic"
            src={parrotPicture2}
            alt="осмысленный альт"
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
