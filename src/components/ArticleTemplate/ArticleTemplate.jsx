import './ArticleTemplate.scss';
import ScrollToTopOnMount from '../ScrollToTopMount/ScrollToTopMount';
import DefaultTemplate from './DeafaultTemplate/DefaultTemplate';

function ArticleTemplate({ article, type }) {
  return (
    <>
      <ScrollToTopOnMount />
      {type === 'default' ? <DefaultTemplate article={article} /> : ''}
    </>
  );
}

export default ArticleTemplate;
