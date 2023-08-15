import './ArticleTemplate.scss';
import ScrollToTopOnMount from '../ScrollToTopMount/ScrollToTopMount';
import DefaultTemplate from './DeafaultTemplate/DefaultTemplate';
import ExtandedTemplate from './ExtendedTemplate/ExtandedTemplate';

function ArticleTemplate({ article, type }) {
  return (
    <>
      <ScrollToTopOnMount />
      {type === 'default' ? (
        <DefaultTemplate article={article} />
      ) : (
        <ExtandedTemplate article={article} />
      )}
    </>
  );
}

export default ArticleTemplate;
