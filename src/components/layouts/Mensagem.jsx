import styles from './Mensagem.module.css';
import { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

function Mensagem({ mensagem_p1, mensagem_p2, remetente = "Sua Vida." }) {

  const containerRef = useRef(null);

  useEffect(() => {
   ScrollReveal().reveal(containerRef.current, {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false,
   });
  }, []);
  
  return (
    <div ref={containerRef} className={styles.mensagem_container}>
        <h1>Para Meu Amor:</h1>
        <div className={styles.paragrafo_romantico}>
            <p>{mensagem_p1 }</p>
            <p>{mensagem_p2 + "❤️❤️"}</p>
            <p>Com todo meu amor, </p>
            <p>{remetente}</p>
        </div>
    </div>
  );
}

export default Mensagem;