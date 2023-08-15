import { useEffect } from 'react';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0); // Прокручиваем страницу в начало
  }, []);

  return null;
}

export default ScrollToTopOnMount;
