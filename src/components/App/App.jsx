import React from 'react';
import './App.scss';
import Promo from '../Promo/Promo';
import TicTacToe from '../TicTacToe/TicТacToe';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <main>
          <Promo />
          <TicTacToe />
        </main>
      </div>
    </div>
  );
}

export default App;
