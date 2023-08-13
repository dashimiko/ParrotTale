/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import './ArticleCard.scss';
import TagList from './TagsList/TegsList';

function ArticleCard({ card, tagColors }) {
  return (
    <article className="article-card">
      <div className="article-card__content-box">
        <img
          className="article-card__picture"
          src={card.pictures[0]}
          alt={card.title}
        />
        <h3 className="article-card__title">{card.title}</h3>
        <div className="article-card__text-box">
          <p className="article-card__text">
            {card.leadParagraph
              ? card.leadParagraph
              : card.content[0].paragraph[0]}
          </p>
        </div>
      </div>
      <div className="article-card__bottom-box">
        <TagList tags={card.tags} tagColors={tagColors} />
        <Link to={`/blog/${card.id}`} className="link article-card__link" />
      </div>
    </article>
  );
}

export default ArticleCard;
