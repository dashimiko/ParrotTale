// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Promo from '../Promo/Promo';
import TicTacToe from '../TicTacToe/TicТacToe';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Benefits from '../Benefits/Benefits';
import FAQ from '../FAQ/FAQ';
import Prices from '../Prices/Prices';
import HowItWorks from '../HowItWorks/HowItWorks';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Routes>
          <Route
            path="/rainbow"
            element={
              <>
                <Header />
                <main className="main">
                  <Promo />
                  <Benefits />
                  <HowItWorks />
                  <Prices />
                  <FAQ />
                </main>
                <Footer />
              </>
            }
          />
          <Route
            path="/ticTacToe"
            element={
              <>
                <Header />
                <main>
                  <TicTacToe />
                </main>
              </>
            }
          />
          <Route path="/blog" element={<h2>Blog</h2>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
