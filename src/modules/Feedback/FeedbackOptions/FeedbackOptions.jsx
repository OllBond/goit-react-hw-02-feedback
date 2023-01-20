import css from '../feedback.module.css';
const FeedbackOptions = ({ onLeaveFeedback, onClick }) => {
  return (
    <div className={css.btnWrapper}>
      <button
        className={css.btnFeedback}
        onClick={() => onLeaveFeedback('good')}
        text="good"
        type="button"
      >
        Good
      </button>
      <button
        className={css.btnFeedback}
        onClick={() => onLeaveFeedback('neutral')}
        text="neutral"
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.btnFeedback}
        onClick={() => onLeaveFeedback('bad')}
        text="bad"
        type="button"
      >
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
