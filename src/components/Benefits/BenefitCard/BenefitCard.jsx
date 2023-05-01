import './BenefitCard.scss';

function BenefitCard({ title, text, /* link */ iconColor, iconPicture }) {
  return (
    <article className="benefits__card">
      <div className={`benefits__card-icon ${iconColor}`}>
        <div className={`benefits__card-pic ${iconPicture}`} />
      </div>
      <h3 className="benefits__card-title">{title}</h3>
      <p className="benefits__card-text">{text}</p>
      {/* <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="benefits__link"
      >
        Learn more
      </a> */}
    </article>
  );
}

export default BenefitCard;
