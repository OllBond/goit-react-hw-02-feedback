import { Component } from 'react';
import css from './feedback.module.css';

class Feedback extends Component {
  render() {
    return (
      <div>
        <h3 className={css.titleFeedback}>Please leave feedback</h3>
        <div className={css.btnWrapper}>
          <button className={css.btnFeedback}>Good</button>
          <button className={css.btnFeedback}>Neutral</button>
          <button className={css.btnFeedback}>Bad</button>
        </div>
        <div>
          <h4 className={css.titleStatistics}>Statistics</h4>
          <p className={css.parFeedback}>Good: </p>
          <p className={css.parFeedback}>Neutral: </p>
          <p className={css.parFeedback}>Bad: </p>
        </div>
      </div>
    );
  }
}
export default Feedback;
