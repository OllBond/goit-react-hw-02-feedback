import PropTypes from 'prop-types';
import css from '../feedback.module.css';
const Statistics = ({ Good, Neutral, Bad, total, positiveFeedback }) => {
  return (
    <div>
      <p className={css.parFeedback}>Good: {Good}</p>
      <p className={css.parFeedback}>Neutral: {Neutral}</p>
      <p className={css.parFeedback}>Bad: {Bad}</p>
      <p className={css.parFeedback}>Total: {total}</p>
      <p className={css.parFeedback}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};
export default Statistics;
Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
