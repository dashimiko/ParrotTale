import Footer from '../components/Footer/Footer';
import Benefits from '../components/Benefits/Benefits';
import FAQ from '../components/FAQ/FAQ';
import Prices from '../components/Prices/Prices';
import AboutUs from '../components/AboutUs/AboutUs';
import Promo from '../components/Promo/Promo';
import Header from '../components/Header/Header';

function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <Promo />
        <Benefits />
        <AboutUs />
        <Prices />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
