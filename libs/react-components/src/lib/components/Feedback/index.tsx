import React, { useState } from 'react';
import styles from './styles.module.scss';
import IconButtonToggle from '../IconButtonToggle';
import Typography from '../Typography';

// Define the interface for the Feedback component props
interface FeedbackProps {
  label?: string; // Optional label for the feedback component
  labelForFeedback?: string; // Optional label to display after feedback is given
  onFeedBack: (feedback: string) => void; // Callback function to handle feedback submission
}

export const Feedback: React.FC<FeedbackProps> = ({
  label = 'Did this page help?',
  labelForFeedback = 'Thank you for your feedback!',
  onFeedBack,
}) => {
  const defaultFeedback = 'neutral';
  const [feedback, setFeedback] = useState<string>(defaultFeedback);
  const feedbackLabel = feedback !== defaultFeedback ? labelForFeedback : label;
  const sendFeedback = (feedbackType: string) => {
    const response = feedback === feedbackType ? defaultFeedback : feedbackType;
    setFeedback(response);

    if (onFeedBack) {
      onFeedBack(response);
    }
  };

  return (
    <div className={styles.feedback}>
      <span className={styles.feedbackLabel}>
        <Typography scale="body1">{feedbackLabel}</Typography>
      </span>
      <IconButtonToggle
        offIcon="thumb_up"
        onIcon="thumb_up"
        onClick={() => sendFeedback('positive')}
        toggledOn={feedback === 'positive'}
      />
      <IconButtonToggle
        offIcon="thumb_down"
        onIcon="thumb_down"
        onClick={() => sendFeedback('negative')}
        toggledOn={feedback === 'negative'}
      />
    </div>
  );
};

export default Feedback;
