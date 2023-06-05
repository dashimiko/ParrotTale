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
import Practice from '../Practise';

function App() {
  const checkResponse = (res) => {
    if (res) {
      console.log(res);
      return res.json();
    }
    return res.json().then((data) => {
      throw new Error(data.message);
    });
  };

  const getData = () =>
    fetch(`https://api.realworld.io/api/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(checkResponse)
      .then((res) => console.log(res.articles))
      .catch((err) => console.log(err));

  getData();

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
          <Route path="/blog" element={<Practice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
