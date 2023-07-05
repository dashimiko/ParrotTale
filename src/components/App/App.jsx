// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import TicTacToe from '../TicTacToe/TicТacToe';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage';
import AboutUsPage from '../../pages/AboutUsPage';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Routes>
          <Route path="/rainbow" element={<HomePage />} />
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
          <Route path="/blog" element={<NotFound />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
