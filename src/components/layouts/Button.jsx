import styles from './Button.module.css';
import { useState, useEffect, useRef  } from 'react';
import ScrollReveal from 'scrollreveal';

function Button({ text, onClick }) {

  const button_ref = useRef(null);

    useEffect(() => {
    ScrollReveal().reveal(button_ref.current, {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false,
   });
  }, []);

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
        <button ref={button_ref} className={`${styles.bubbly_button} ${isAnimating ? styles.animate : ''}`} onClick={handleClick}>
          {text}
        </button>
    </div>
    
  );
}

export default Button;