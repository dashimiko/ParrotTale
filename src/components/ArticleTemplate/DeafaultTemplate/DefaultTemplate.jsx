import './DefaultTemplate.scss';

function DefaultTemplate({ article }) {
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
        {article.content.map((paragraph) => (
          <p className="article-template__paragraph" key={paragraph.id}>
            {paragraph.paragraph[0]}
          </p>
        ))}
      </div>
    </section>
  );
}

export default DefaultTemplate;
