import './Benefits.scss';
import BenefitCard from './BenefitCard/BenefitCard';

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__box">
        <div className="benefits__title-box">
          <h2 className="benefits__title">
            Delivering good designs since 1954 🦜
          </h2>
          <p className="benefits__description">
            We’re the first multi-purpose design kit solutions for businesses.
            We help you bridge gaps between your layouts, templates and
            developers to empower all involved.
          </p>
        </div>
        <div className="benefits__cardlist">
          <BenefitCard
            title="Swap the icon"
            text="Delivering faster and more personalized support with shared
              screens and cool design systems for Figma"
            link="https://github.com/"
            iconColor="benefits__card-icon_1"
            iconPicture="benefits__card-pic_1"
          />
          <BenefitCard
            title="Detach if need"
            text="Identify qualified customers with easy-to-use live chat messaging
            and AI-based Sales Bot"
            link="https://github.com/"
            iconColor="benefits__card-icon_2"
            iconPicture="benefits__card-pic_2"
          />
          <BenefitCard
            title="Toggle icons"
            text="Delivering faster and more personalized support with shared
            screens and cool design systems for Figma"
            link="https://github.com/"
            iconColor="benefits__card-icon_3"
            iconPicture="benefits__card-pic_3"
          />
          <BenefitCard
            title="Replace a title"
            text="You can toggle to any icon within Instances and customize outlined
            stroke to more bolder or lighter"
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
