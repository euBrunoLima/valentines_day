import styles from './Mensagem.module.css';

function Mensagem({ mensagem_p1, mensagem_p2, remetente = "Sua Vida." }) {
  return (
    <div className={styles.mensagem_container}>
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