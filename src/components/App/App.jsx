import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Promo from '../Promo/Promo';
import TicTacToe from '../TicTacToe/TicТacToe';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <main>
          <Routes>
            <Route path="/rainbow" element={<Promo />} />
            <Route path="/ticTacToe" element={<TicTacToe />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
