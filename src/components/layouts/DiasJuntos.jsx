import styles from './DiasJuntos.module.css';
import Temporizador from './Temporizador';

function DiasJuntos({ tempoJuntos }) {
  return (
    <div className={styles.dias_juntos_container}>
      <h1>Eu te amo Há:</h1>
      <p>{tempoJuntos}</p>
      <hr />
    </div>
  );
}

export default DiasJuntos;