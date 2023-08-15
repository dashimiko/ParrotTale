import { useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ArticlesList.scss';
import Tags from './Tags/Tags';
import { TAG_COLORS } from '../../utils/constants';
import ScrollToTopOnMount from '../ScrollToTopMount/ScrollToTopMount';

function ArticlesList({ articles }) {
  const [activeTags, setActiveTags] = useState([]);

  const handleTagClick = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((activeTag) => activeTag !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  const filteredArticles = articles.filter((article) =>
    activeTags.every((tag) => article.tags.includes(tag))
  );

  function getAllTags(list) {
    const allTags = list.reduce((tags, article) => {
      article.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
      return tags;
    }, []);

    return allTags;
  }

  return (
    <>
      <ScrollToTopOnMount />
      <section className="articles-list">
        <div className="articles-list__box">
          <Tags
            activeTags={activeTags}
            handleTagClick={handleTagClick}
            allTags={getAllTags(articles)}
            tagColors={TAG_COLORS}
          />
          <ul className="articles-list__list">
            {filteredArticles.map((article) => (
              <ArticleCard
                card={article}
                key={article.id}
                tagColors={TAG_COLORS}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ArticlesList;
