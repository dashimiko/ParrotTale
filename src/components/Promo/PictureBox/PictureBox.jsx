import ExploreButton from '../../ExploreButton/ExploreButton';
import './PictureBox.scss';
import parrotPicture from '../../../images/firstParrotPic.jpg';
import parrotPicture2 from '../../../images/secondParrotPic.jpg';
import parrotPicture3 from '../../../images/thirdParrotPic.jpg';
import parrotPicture4 from '../../../images/fourthParrotPic.jpg';
import parrotPicture5 from '../../../images/fiveParrotPic.jpg';
import parrotPicture6 from '../../../images/sixParrotPic.jpg';
import parrotPicture7 from '../../../images/sevenParrotPic.jpg';

const buttonlink = 'https://dribbble.com/shots/4397812-Click-Me#';
const localstyle = 'pictureBox__button';

function PictureBox() {
  return (
    <div className="pictureBox">
      <div className="pictureBox__fragment_left">
        <p className="pictureBox__text pictureBox__text_left-figure">
          Use mixed grid with imagery, replace with your own photos and
          descriptions
        </p>
        <img
          className="pictureBox__pic_1"
          src={parrotPicture}
          alt="нужен осмысленный альт"
        />
        <div>
          <p className="pictureBox__pic1-headline">
            We aimed to deliver HQ templates for Figma
          </p>
          <span className="pictureBox__pic1-descripton">
            Used by 123 people
          </span>
        </div>
        <ExploreButton link={buttonlink} localStyleName={localstyle} />
      </div>

      <div className="pictureBox__fragment-container">
        <div className="pictureBox__fragment_top">
          <img
            className="pictureBox__pic_2"
            src={parrotPicture2}
            alt="нужен осмысленный альт"
          />
          <span className="pictureBox__pic2-headline">Consider it done!</span>
          <figure className="pictureBox__figure">
            <figcaption className="pictureBox__text pictureBox__text_top-figure">
              This is multipurpose grid, it fits for portfolio, services or
              agency web site
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
          <img
            className="pictureBox__pic_6"
            src={parrotPicture6}
            alt="нужен осмысленный альт"
          />
          <span className="pictureBox__pic6-headline">See my goal?</span>
          <img
            className="pictureBox__pic_7"
            src={parrotPicture7}
            alt="нужен осмысленный альт"
          />
        </div>
      </div>
    </div>
  );
}

export default PictureBox;
