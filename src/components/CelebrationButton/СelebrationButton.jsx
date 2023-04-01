/* eslint-disable import/no-unresolved */
import { useCallback } from 'react';
import './CelebrationButton.scss';
// import {confetti} from 'https://cdn.skypack.dev/canvas-confetti@1';

// eslint-disable-next-line import/no-extraneous-dependencies
import confetti from 'canvas-confetti';

function CelebrationButton({
  buttonText,
  handleCelebrationButton,
  coordinateX,
  coordinateY,
}) {
  const addedConfetti = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60,
      origin: {
        x: coordinateX,
        y: coordinateY,
      },
    });
  }, [coordinateX, coordinateY]);

  const onCelebrationButtonClick = () => {
    addedConfetti();
    handleCelebrationButton();
  };

  return (
    <button
      className="celebration__button"
      type="submit"
      onClick={() => onCelebrationButtonClick()}
    >
      {buttonText}
    </button>
  );
}

export default CelebrationButton;
