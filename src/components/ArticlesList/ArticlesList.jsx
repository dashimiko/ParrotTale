/* eslint-disable no-unused-vars */
import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';

function ArticlesList({ articles }) {
  return (
    <div>
      <h1>Список статей блога</h1>
      <ul>
        {articles.map((article) => (
          <ArticleCard card={article} key={article.id} />
        ))}
      </ul>
    </div>
  );
}

export default ArticlesList;
