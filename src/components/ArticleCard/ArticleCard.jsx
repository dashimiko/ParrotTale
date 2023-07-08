/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import './ArticleCard.scss';

function ArticleCard({ card }) {
  return (
    <article className="parrot-card">
      <div>
        <p className="parrot-card__title">{card.title}</p>
        <img
          className="parrot-card__picture"
          src={card.pictures[0]}
          alt={card.title}
        />
        <p>{card.text[0]}</p>
      </div>
      <Link
        to={`/blog/${card.id}`}
        className="benefits__link parrot-card__button"
      >
        Learn more
      </Link>
    </article>
  );
}

export default ArticleCard;
