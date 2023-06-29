import './Benefits.scss';
import BenefitCard from './BenefitCard/BenefitCard';

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__box">
        <div className="benefits__title-box">
          <h2 className="benefits__title">What can we offer </h2>
          <p className="benefits__description">
            Many people have limited knowledge about parrots, leading to
            unfortunate consequences for these birds, such as improper care and
            even loss of birds&apos; life. At our blog, we aim to change that.
          </p>
        </div>
        <div className="benefits__cardlist">
          <BenefitCard
            title="Responsible care"
            text="By offering comprehensive articles and resources, we strive to raise awareness and promote responsible parrot ownership"
            link="https://github.com/"
            iconColor="benefits__card-icon_1"
            iconPicture="benefits__card-pic_1"
          />
          <BenefitCard
            title="Extensive Expertise"
            text="You will have access to informative content gathered from various sources to better understand our feathered friends"
            link="https://github.com/"
            iconColor="benefits__card-icon_2"
            iconPicture="benefits__card-pic_2"
          />
          <BenefitCard
            title="Diverse Topics"
            text="Whether you are a novice parrot lover or an experienced bird enthusiast, we have articles suited to your needs"
            link="https://github.com/"
            iconColor="benefits__card-icon_3"
            iconPicture="benefits__card-pic_3"
          />
          <BenefitCard
            title="Support"
            text="We have a feedback form where you can reach out to us with any questions or topics that interest you"
            link="https://github.com/"
            iconColor="benefits__card-icon_4"
            iconPicture="benefits__card-pic_4"
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
