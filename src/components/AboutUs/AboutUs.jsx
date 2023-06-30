import './AboutUs.scss';
import { Link } from 'react-router-dom';
// import ExploreButton from '../ExploreButton/ExploreButton';
// import parrotPicture2 from '../../images/secondParrotPic.jpg';
// import parrotPicture2 from '../../images/about-us-pic-kira.jpg';
import parrotPicture2 from '../../images/about-us-pic-kira3.jpg';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__box">
        <div className="about-us__text-box">
          <h2 className="about-us__title">About us</h2>
          <p className="about-us__text">
            Hello! This site was built by me. My name is Dasha, and I am a
            frontend developer with a passion for parrots. In the past, I worked
            as a journalist, but my love for these beautiful creatures led me to
            combine my skills in web development with my expertise in parrot
            care. In the picture is Kira, my beloved 9-year-old female
            Cockatiel.
          </p>
          <img
            className="about-us__pic_mobile"
            src={parrotPicture2}
            alt="осмысленный альт"
          />
          <Link to="/about-us" className="benefits__link about-us__link">
            Learn more
          </Link>
        </div>
        <div className="about-us__pic-box">
          <img
            className="about-us__pic"
            src={parrotPicture2}
            alt="осмысленный альт"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
