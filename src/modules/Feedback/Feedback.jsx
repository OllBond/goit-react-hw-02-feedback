import { Component } from 'react';
import css from './feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    // деструктуризація об'єкту state
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    // this.state.good
    const value = this.state[propName];
    // toFixed округлення 2 значення після коми
    const result = ((value / total) * 100).toFixed(2);
    // toFixed повертає строку - тому Number
    return Number(result);
  }
  //   name - це good, neutral, bad
  leaveFeedback(name) {
    // якщо нове значення залежить від попереднього - передається call-back
    this.setState(prevState => {
      // вираховувані властивості об'єкта
      return { [name]: prevState[name] + 1 };
    });
  }
  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage('good');
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h3 className={css.titleFeedback}>Please leave feedback</h3>
        <div className={css.btnWrapper}>
          <button
            className={css.btnFeedback}
            onClick={() => this.leaveFeedback('good')}
          >
            Good
          </button>
          <button
            className={css.btnFeedback}
            onClick={() => this.leaveFeedback('neutral')}
          >
            Neutral
          </button>
          <button
            className={css.btnFeedback}
            onClick={() => this.leaveFeedback('bad')}
          >
            Bad
          </button>
        </div>
        <div>
          <h4 className={css.titleStatistics}>Statistics</h4>
          <p className={css.parFeedback}>Good: {good}</p>
          <p className={css.parFeedback}>Neutral: {neutral}</p>
          <p className={css.parFeedback}>Bad: {bad}</p>
          <p className={css.parFeedback}>Total: {total}</p>
          <p className={css.parFeedback}>
            Positive feedback: {positiveFeedback}
          </p>
        </div>
      </div>
    );
  }
}
export default Feedback;
