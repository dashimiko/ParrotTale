import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Quiz from '../components/Quiz/Quiz';

function BlogPage() {
  return (
    <>
      <Header />
      <main className="main">
        <Quiz />
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
