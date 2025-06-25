import styles from './ButtonLink.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ButtonLink({ text, to }) {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    // Reset animation
    setIsAnimating(false);
    
    // Trigger animation
    setIsAnimating(true);
    
    // Navigate after animation completes
    setTimeout(() => {
      navigate(to);
    }, 700);
  }

  return (
    <div className={styles['button-container']}>
      <button 
      className={`${styles['bubbly-button']} ${isAnimating ? styles.animate : ''}`}
      onClick={handleClick}
      >
      {text}
      </button>
    </div>
    
  );
}

export default ButtonLink;