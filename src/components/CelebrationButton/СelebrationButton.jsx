import { React, useCallback } from 'react';
import './CelebrationButton.scss';
// eslint-disable-next-line import/no-unresolved
import confetti from 'https://cdn.skypack.dev/canvas-confetti@1';

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
