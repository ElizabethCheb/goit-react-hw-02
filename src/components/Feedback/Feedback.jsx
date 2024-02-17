const Feedback = ({ feedback, totalFeedback }) => {
  const positivePercentage = totalFeedback > 0 ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) : 0;
  return totalFeedback > 0 ? (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  ) : null;
};
export default Feedback;
