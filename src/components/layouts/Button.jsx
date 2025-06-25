import styles from './Button.module.css';

function Button({ text, onClick }) {

  
  return (
    <div className={styles.button_container}>
        <button className={styles.bubbly_button} onClick={onClick}>
          {text}
        </button>
    </div>
    
  );
}

export default Button;