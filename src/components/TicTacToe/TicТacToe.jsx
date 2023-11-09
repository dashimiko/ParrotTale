// import React from 'react';
import { useState } from 'react';
import './TicTacToe.scss';
import Square from './Square/Square';
import CelebrationButton from '../UI/CelebrationButton/СelebrationButton';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToe() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = '🦄';
    } else {
      nextSquares[i] = '🦜';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? '🦄' : '🦜'}`;
  }

  function handleNewGame() {
    setSquares(Array(9).fill(null));
    if (winner === '🦄') {
      setXIsNext(true);
    } else {
      setXIsNext(false);
    }
  }

  return (
    <section className="tic-tac-toe">
      <CelebrationButton
        buttonText="again"
        handleCelebrationButton={() => handleNewGame()}
        coordinateX={0.5}
        coordinateY={0.5}
        isDisabled={false}
      />
      <div className="tic-tac-toe__status">{status}</div>
      <div className="tic-tac-toe__square-border">
        <div className="tic-tac-toe__board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="tic-tac-toe__board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="tic-tac-toe__board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </section>
  );
}

export default TicTacToe;
