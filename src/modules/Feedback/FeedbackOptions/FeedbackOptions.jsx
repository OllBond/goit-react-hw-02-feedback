import css from '../feedback.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnWrapper}>
      {options.map(option => {
        return (
          <button
            className={css.btnFeedback}
            key={option}
            onClick={() => onLeaveFeedback(option)}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOptions;
/* <button
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
      </button> */
