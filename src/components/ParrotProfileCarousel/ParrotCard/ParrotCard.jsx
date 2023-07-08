/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import './ParrotCard.scss';

function ParrotCard({ card }) {
  return (
    <article className="parrot-card">
      <div>
        <p className="parrot-card__title">{card.title}</p>
        <img
          className="parrot-card__picture"
          src={card.pictures[0]}
          alt={card.title}
        />
        <ul className="parrot-card__condition-list">
          {card.listItems.map((text) => (
            <li
              className={`parrot-card__condition parrot-card__condition_${
                card.listType === 'green'
                  ? 'green'
                  : card.listType === 'yellow'
                  ? 'yellow'
                  : ''
              }`}
              key={text}
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <Link to={card.link} className="benefits__link parrot-card__button">
        Learn more
      </Link>
    </article>
  );
}

export default ParrotCard;
