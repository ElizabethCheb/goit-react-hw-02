import styles from './Options.module.css';
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={styles.divOptions}>
      <button className={styles.good} onClick={() => updateFeedback('good')}>Good</button>
      <button className={styles.neutral} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={styles.bad} onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button className={styles.reset} onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;
