import styles from './DiasJuntos.module.css';
import Temporizador from './Temporizador';
import anima from '../../styles/animations.module.css'

function DiasJuntos({ tempoJuntos }) {

  return (
    <div className={`${styles.dias_juntos_container} ${anima.fadeIn_2}`}>
      <h1>Eu te amo Há:</h1>
      <p className={anima.fadeIn_3}>{tempoJuntos}</p>
      <hr />
    </div>
  );
}

export default DiasJuntos;