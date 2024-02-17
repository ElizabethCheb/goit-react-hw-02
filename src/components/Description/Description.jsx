import styles from './Description.module.css';
const Description = () => {
  return (
    <div className={styles.divDescr}>
      <h1 className={styles.sip}>Sip Happens Café</h1>
      <p className={styles.feedback}>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  );
};
export default Description;
