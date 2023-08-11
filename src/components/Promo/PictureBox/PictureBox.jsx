import { NavLink } from 'react-router-dom';
import ExploreButton from '../../ExploreButton/ExploreButton';
import './PictureBox.scss';
// import parrotPicture from '../../../images/firstParrotPic.jpg';
import parrotPicture from '../../../images/masscult_picture2.jpg';
import parrotPicture2 from '../../../images/quiz_picture3.jpg';
import parrotPicture3 from '../../../images/thirdParrotPic.jpg';
import parrotPicture4 from '../../../images/whitebird_picture.jpg';
import parrotPicture5 from '../../../images/fiveParrotPic.jpg';
import parrotPicture6 from '../../../images/sixParrotPic.jpg';
import parrotPicture7 from '../../../images/sevenParrotPic.jpg';

const buttonlink = '/blog';
const localstyle = 'pictureBox__button';

function PictureBox() {
  return (
    <>
      <div className="pictureBox pictureBox__desktop">
        <div className="pictureBox__fragment_left">
          <p className="pictureBox__text pictureBox__text_left-figure">
            This is a fan site about parrots, extraordinary creatures deserving
            of our awe
          </p>
          <a
            className="pictureBox__overlay"
            href={buttonlink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="pictureBox__pic_1"
              src={parrotPicture}
              alt="нужен осмысленный альт"
            />
            {/* <p className="pictureBox__pic1-headline">
              That is why these birds are so fabulous and gorgeous
            </p> */}
            <p className="pictureBox__pic1-headline">
              Collaboration with the Masscult podcast
            </p>
            {/* <span className="pictureBox__pic1-descripton">
              10 interesting facts
            </span> */}
            <span className="pictureBox__pic1-descripton">
              Parrots in pop culture
            </span>
          </a>
          <ExploreButton link={buttonlink} localStyleName={localstyle} />
        </div>

        <div className="pictureBox__fragment-container">
          <div className="pictureBox__fragment_top">
            <NavLink
              className="pictureBox__overlay"
              href={buttonlink}
              // target="_blank"
              // rel="noreferrer"
              to="/quiz"
            >
              <img
                className="pictureBox__pic_2"
                src={parrotPicture2}
                alt="нужен осмысленный альт"
              />
              <span className="pictureBox__pic2-headline">
                What parrot am I? Test
              </span>
            </NavLink>
            <figure className="pictureBox__figure">
              <figcaption className="pictureBox__text pictureBox__text_top-figure">
                Immerse yourself in the world of parrots through our blog
                articles
              </figcaption>
              <div className="pictureBox__figure-box">
                <img
                  className="pictureBox__pic_3"
                  src={parrotPicture3}
                  alt="нужен осмысленный альт"
                />
                <img
                  className="pictureBox__pic_4"
                  src={parrotPicture4}
                  alt="нужен осмысленный альт"
                />
              </div>
            </figure>
          </div>
          <div className="pictureBox__fragment_bottom">
            <img
              className="pictureBox__pic_5"
              src={parrotPicture5}
              alt="нужен осмысленный альт"
            />
            <a
              className="pictureBox__overlay"
              href={buttonlink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="pictureBox__pic_6"
                src={parrotPicture6}
                alt="нужен осмысленный альт"
              />
              <span className="pictureBox__pic6-headline">About smartness</span>
            </a>
            <img
              className="pictureBox__pic_7"
              src={parrotPicture7}
              alt="нужен осмысленный альт"
            />
          </div>
        </div>
      </div>
      <div className="pictureBox pictureBox__mobile">
        <div className="pictureBox__fragment_left">
          <img
            className="pictureBox__pic_1"
            src={parrotPicture}
            alt="нужен осмысленный альт"
          />
          <img
            className="pictureBox__pic_5"
            src={parrotPicture5}
            alt="нужен осмысленный альт"
          />
        </div>
        <div className="pictureBox__fragment-container">
          <div className="pictureBox__fragment_top">
            <img
              className="pictureBox__pic_2"
              src={parrotPicture2}
              alt="нужен осмысленный альт"
            />
            <img
              className="pictureBox__pic_3"
              src={parrotPicture3}
              alt="нужен осмысленный альт"
            />
          </div>
          <div className="pictureBox__fragment_bottom">
            <div className="pictureBox__group_1">
              <img
                className="pictureBox__pic_4"
                src={parrotPicture4}
                alt="нужен осмысленный альт"
              />
              <img
                className="pictureBox__pic_7"
                src={parrotPicture7}
                alt="нужен осмысленный альт"
              />
            </div>
            <div className="pictureBox__group_2">
              <img
                className="pictureBox__pic_6"
                src={parrotPicture6}
                alt="нужен осмысленный альт"
              />

              <ExploreButton link={buttonlink} localStyleName={localstyle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PictureBox;
