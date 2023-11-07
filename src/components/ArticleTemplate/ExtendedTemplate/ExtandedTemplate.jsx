import './ExtandedTemplate.scss';

function ExtandedTemplate({ article }) {
  return (
    <>
      <h1 className="article-template__title">{article.title}</h1>
      <p className="article-template__paragraph extended-article-template__subtitle">
        {article.subTitle}
      </p>
      <p className="article-template__paragraph extended-article-template__lead">
        {article.leadParagraph}
      </p>
      <div className="article-template__picture-box">
        {article.pictures.map((picture) => (
          <img
            className="article-template__picture extended-article-template_picture"
            src={picture}
            alt={picture}
            key={picture}
            loading="lazy"
          />
        ))}
      </div>
      <div className="article-template__text">
        {article.content.map((block) => (
          <div key={block.id}>
            <p className="article-template__headline extended-article-template__block-title">
              {block.headline}
            </p>
            {block.paragraph.map((paragraph) => (
              <p
                className="article-template__paragraph extanded-article-template__paragraph"
                key={paragraph.slice(0, 10)}
              >
                {paragraph}
              </p>
            ))}
            <img
              className="article-template__picture extended-article-template_picture"
              src={block.picture}
              alt={block.picture}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ExtandedTemplate;
