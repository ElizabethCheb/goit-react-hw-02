// App.jsx
import { useState, useEffect } from 'react';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Description from './Description/Description';
const App = () => {
  const initialFeedback = { good: 0, neutral: 0, bad: 0 };
  const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || initialFeedback;
  const [feedback, setFeedback] = useState(storedFeedback);
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
    setFeedback(initialFeedback);
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  return (
    <div>
      <Description /> {}
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      <Feedback feedback={feedback} totalFeedback={totalFeedback} />
    </div>
  );
};

export default App;
