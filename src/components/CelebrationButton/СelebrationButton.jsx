/* eslint-disable import/no-unresolved */
import { React, useCallback } from 'react';
import './CelebrationButton.scss';
// import {confetti} from 'https://cdn.skypack.dev/canvas-confetti@1';

// eslint-disable-next-line import/no-extraneous-dependencies
import confetti from 'canvas-confetti';

function CelebrationButton({ buttonText, handleCelebrationButton }) {
  const addedConfetti = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }, []);

  const onCelebrationButtonClick = () => {
    addedConfetti();
    handleCelebrationButton();
  };

  return (
    <button
      className="celebration__button"
      type="button"
      onClick={() => onCelebrationButtonClick()}
    >
      {buttonText}
    </button>
  );
}

export default CelebrationButton;
