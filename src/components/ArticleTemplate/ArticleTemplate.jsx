import './ArticleTemplate.scss';
import { useLocation } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopMount/ScrollToTopMount';
import DefaultTemplate from './DeafaultTemplate/DefaultTemplate';
import ExtandedTemplate from './ExtendedTemplate/ExtandedTemplate';
import ReturnButton from '../UI/ReturnButton/ReturnButton';

function ArticleTemplate({ article, type }) {
  const Location = useLocation();
  return (
    <>
      <ScrollToTopOnMount />
      <section className="article-template">
        {type === 'default' ? (
          <DefaultTemplate article={article} />
        ) : (
          <ExtandedTemplate article={article} />
        )}
        {Location.pathname !== '/about-us' && <ReturnButton link="/blog" />}
      </section>
    </>
  );
}

export default ArticleTemplate;
