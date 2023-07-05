import './ArticleTemplate.scss';

function ArticleTemplate({ article }) {
  return (
    <section className="article-template">
      <h1 className="article-template__title">{article.title}</h1>
      <div className="article-template__picture-box">
        {article.pictures.map((picture) => (
          <img
            className="article-template__picture"
            src={picture}
            alt={picture}
            key={picture}
          />
        ))}
      </div>
      <div className="article-template__text">
        {article.text.map((paragraph) => (
          <p
            className="article-template__paragraph"
            key={paragraph.substr(1, 9)}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export default ArticleTemplate;
