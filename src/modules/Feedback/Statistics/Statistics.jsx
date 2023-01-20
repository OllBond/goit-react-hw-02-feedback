import css from '../feedback.module.css';
const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div>
      <p className={css.parFeedback}>Good: {good}</p>
      <p className={css.parFeedback}>Neutral: {neutral}</p>
      <p className={css.parFeedback}>Bad: {bad}</p>
      <p className={css.parFeedback}>Total: {total}</p>
      <p className={css.parFeedback}>Positive feedback: {positiveFeedback}</p>
    </div>
  );
};
export default Statistics;
