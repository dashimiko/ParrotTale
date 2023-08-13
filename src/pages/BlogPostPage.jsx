import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ArticleTemplate from '../components/ArticleTemplate/ArticleTemplate';
import { ARTICLES } from '../utils/constants';

function BlogPostPage() {
  const { postId } = useParams();

  const blogArticle = ARTICLES.find((article) => article.id === postId);

  if (!blogArticle) {
    return <div>Статья не найдена.</div>;
  }

  return (
    <>
      <Header />
      <main className="main">
        <ArticleTemplate article={blogArticle} type={blogArticle.type} />
      </main>
      <Footer />
    </>
  );
}

export default BlogPostPage;
