import { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Description from './Description/Description';
import Notification from './Notification/Notification';
const getInitialFeedbackState = () => {
  const initialFeedback = { good: 0, neutral: 0, bad: 0 };
  const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || initialFeedback;
  return storedFeedback;
};
const App = () => {
  const [feedback, setFeedback] = useState(getInitialFeedbackState());
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    const initialFeedback = { good: 0, neutral: 0, bad: 0 };
    setFeedback(initialFeedback);
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
};
export default App;