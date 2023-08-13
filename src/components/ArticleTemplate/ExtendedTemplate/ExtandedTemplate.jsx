import './ExtandedTemplate.scss';

function ExtandedTemplate({ article }) {
  return (
    <section className="article-template">
      <h1 className="article-template__title">{article.title}</h1>
      <p className="article-template__paragraph">{article.subTitle}</p>
      <p className="article-template__paragraph">{article.leadParagraph}</p>
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
        {article.content.map((block) => (
          <div key={block.id}>
            <p className="article-template__headline">{block.headline}</p>
            {block.paragraph.map((paragraph) => (
              <p
                className="article-template__paragraph"
                key={paragraph.slice(0, 10)}
              >
                {paragraph}
              </p>
            ))}
            <img
              className="article-template__picture"
              src={block.picture}
              alt={block.picture}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExtandedTemplate;
