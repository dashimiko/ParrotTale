import './ArticleTemplate.scss';
import ScrollToTopOnMount from '../ScrollToTopMount/ScrollToTopMount';
import DefaultTemplate from './DeafaultTemplate/DefaultTemplate';
import ExtandedTemplate from './ExtendedTemplate/ExtandedTemplate';
import ExploreButton from '../ExploreButton/ExploreButton';

function ArticleTemplate({ article, type }) {
  return (
    <>
      <ScrollToTopOnMount />
      <section className="article-template">
        {type === 'default' ? (
          <DefaultTemplate article={article} />
        ) : (
          <ExtandedTemplate article={article} />
        )}
        <ExploreButton
          link="/blog"
          text="Back to List"
          localStyleName="back-button"
        />
      </section>
    </>
  );
}

export default ArticleTemplate;
