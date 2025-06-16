import { default as React } from 'react';

interface FeedbackProps {
    label?: string;
    labelForFeedback?: string;
    onFeedBack: (feedback: string) => void;
}
export declare const Feedback: React.FC<FeedbackProps>;
export default Feedback;
