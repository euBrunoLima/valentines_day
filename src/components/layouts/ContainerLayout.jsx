import styles from './ContainerLayout.module.css';

function ContainerLayout({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default ContainerLayout;
