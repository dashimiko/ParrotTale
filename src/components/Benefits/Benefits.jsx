import './Benefits.scss';

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__box">
        <div className="benefits__title-box">
          <h2 className="benefits__title">
            Delivering good designs since 1954 🚚💨
          </h2>
          <p className="benefits__description">
            We’re the first multi-purpose design kit solutions for businesses.
            We help you bridge gaps between your layouts, templates and
            developers to empower all involved.
          </p>
        </div>
        <div className="benefits__cardlist">
          <article className="benefits__card">
            <div className="benefits__card-icon benefits__card-icon_1">
              <div className="benefits__card-pic benefits__card-pic_1" />
            </div>
            <h3 className="benefits__card-title">Support</h3>
            <p className="benefits__card-text">
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
              className="benefits__link"
            >
              Learn more
            </a>
          </article>
          <article className="benefits__card">
            <div className="benefits__card-icon benefits__card-icon_2">
              <div className="benefits__card-pic benefits__card-pic_2" />
            </div>
            <h3 className="benefits__card-title">Sales growth</h3>
            <p className="benefits__card-text">
              Identify qualified customers with easy-to-use live chat messaging
              and AI-based Sales Bot
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
              className="benefits__link"
            >
              Learn more
            </a>
          </article>
          <article className="benefits__card">
            <div className="benefits__card-icon benefits__card-icon_3">
              <div className="benefits__card-pic benefits__card-pic_3" />
            </div>
            <h3 className="benefits__card-title">Coponents-driven</h3>
            <p className="benefits__card-text">
              Delivering faster and more personalized support with shared
              screens and cool design systems for Figma
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
              className="benefits__link"
            >
              Learn more
            </a>
          </article>
          <article className="benefits__card">
            <div className="benefits__card-icon benefits__card-icon_4">
              <div className="benefits__card-pic benefits__card-pic_4" />
            </div>
            <h3 className="benefits__card-title">Swap the icon</h3>
            <p className="benefits__card-text">
              You can toggle to any icon within Instances and customize outlined
              stroke to more bolder or lighter
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/"
              className="benefits__link"
            >
              Learn more
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
