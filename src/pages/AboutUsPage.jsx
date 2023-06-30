import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ArticleTemplate from '../components/ArticleTemplate/ArticleTemplate';
import { ARTICLE_ABOUT_US } from '../utils/constants';
import pic from '../images/secondParrotPic.jpg';

function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="main">
        <ArticleTemplate article={ARTICLE_ABOUT_US} picture={pic} />
      </main>
      <Footer />
    </>
  );
}

export default AboutUsPage;
