import { ArrowUp } from 'phosphor-react';
import React from 'react';

const ButtonUp = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="sticky-button" onClick={handleScrollToTop}>
      <ArrowUp size={32} />
    </button>
  );
};

export default ButtonUp;
