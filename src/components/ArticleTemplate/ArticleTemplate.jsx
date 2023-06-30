import './ArticleTemplate.scss';

function ArticleTemplate({ article }) {
  return (
    <section className="article-template">
      <h1 className="article-template__title">{article.title}</h1>
      <div className="article-template__picture-box">
        <img
          className="article-template__picture"
          src={article.picture[0]}
          alt="здесь будет осмысленный альт"
        />
        <img
          className="article-template__picture"
          src={article.picture[1]}
          alt="здесь будет осмысленный альт"
        />
        <img
          className="article-template__picture"
          src={article.picture[2]}
          alt="здесь будет осмысленный альт"
        />
      </div>
      <div className="article-template__text">
        {article.text.map((paragraph) => (
          <p className="article-template__paragraph">{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default ArticleTemplate;
