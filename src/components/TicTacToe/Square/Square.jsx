import React from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button
      className="tic-tac-toe__square"
      type="button"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
