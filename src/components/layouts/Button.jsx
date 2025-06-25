import styles from './Button.module.css';
import { useState } from 'react';

function Button({ text, onClick }) {

  const [isAnimating, setIsAnimating] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
        onClick();
    },300);
  
  }

  return (
    <div className={styles.button_container}>
        <button className={`${styles.bubbly_button} ${isAnimating ? styles.animate : ''}`} onClick={handleClick}>
          {text}
        </button>
    </div>
    
  );
}

export default Button;