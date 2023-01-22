import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
// import Feedback from './Feedback/Feedback';
// import css from './Feedback/App.css';
export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };
  // перетворення об'єкта в масив
  statePropNames = Object.keys(this.state);
  //   функція, яка змінює state, feedback - це good, neutral, bad
  onLeaveFeedback = feedback => {
    // якщо нове значення залежить від попереднього - передається call-back
    this.setState(prevState => {
      // вираховувані властивості об'єкта
      return { [feedback]: prevState[feedback] + 1 };
    });
  };
  countTotalFeedback() {
    // деструктуризація об'єкту state
    const { Good, Neutral, Bad } = this.state;
    const total = Good + Neutral + Bad;
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

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage('Good');
    const { Good, Neutral, Bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.statePropNames}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() !== 0 && (
          <Section title="Statistics">
            <Statistics
              Good={Good}
              Neutral={Neutral}
              Bad={Bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          </Section>
        )}
        {this.countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
