import Footer from '../components/Footer/Footer';
import Benefits from '../components/Benefits/Benefits';
import FAQ from '../components/FAQ/FAQ';
import AboutUs from '../components/AboutUs/AboutUs';
import Promo from '../components/Promo/Promo';
import Header from '../components/Header/Header';
import ParrotsProfiles from '../components/ParrotProfileCarousel/ParrotsProfiles/ParrotsProfiles';

function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <Promo />
        <Benefits />
        <AboutUs />
        <ParrotsProfiles />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
