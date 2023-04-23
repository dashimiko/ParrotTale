/* eslint-disable no-nested-ternary */
import './PriceCard.scss';

function PriceCard({ title, price, priceDescription, ButtonText, typeOfCard }) {
  return (
    <article
      className={`priceCard priceCard_${
        typeOfCard === 'priority' ? 'priority' : ''
      }`}
    >
      <div>
        <p className="priceCard__title">{title}</p>
        <p className="priceCard__price">
          <span className="priceCard__price-accent">{price}</span>
          {priceDescription}
        </p>
        <ul className="priceCard__condition-list">
          {typeOfCard === 'standart' ? (
            <>
              <li className="priceCard__condition priceCard__condition_standart">
                Components-driven system
              </li>
              <li className="priceCard__condition priceCard__condition_standart">
                Sales-boosting landing pages
              </li>
              <li className="priceCard__condition priceCard__condition_standart">
                Awesome Feather icons pack
              </li>
              <li className="priceCard__condition priceCard__condition_standart">
                Themed into 3 different styles
              </li>
            </>
          ) : typeOfCard === 'priority' ? (
            <>
              <li className="priceCard__condition priceCard__condition_priority">
                Components-driven system
              </li>
              <li className="priceCard__condition priceCard__condition_priority">
                Sales-boosting landing pages
              </li>
              <li className="priceCard__condition priceCard__condition_priority">
                Awesome Feather icons pack
              </li>
              <li className="priceCard__condition priceCard__condition_priority">
                Themed into 3 different styles
              </li>
              <li className="priceCard__condition priceCard__condition_priority">
                Will help to learn Figma
              </li>
            </>
          ) : (
            <>
              <li className="priceCard__condition">Components-driven system</li>
              <li className="priceCard__condition">
                Sales-boosting landing pages
              </li>
              <li className="priceCard__condition">
                Awesome Feather icons pack
              </li>
            </>
          )}
        </ul>
      </div>
      <button
        type="button"
        className={`benefits__link priceCard__button priceCard__button_${
          typeOfCard === 'priority' ? 'priority' : ''
        }`}
      >
        {ButtonText}
      </button>
    </article>
  );
}

export default PriceCard;
