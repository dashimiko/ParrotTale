// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Promo from '../Promo/Promo';
import TicTacToe from '../TicTacToe/TicТacToe';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Benefits from '../Benefits/Benefits';

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
