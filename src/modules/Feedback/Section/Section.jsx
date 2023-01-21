import css from '../feedback.module.css';
const Section = ({ children, title }) => {
  return (
    <div>
      <h3 className={css.titleFeedback}>{title}</h3>
      {children}
    </div>
  );
};

export default Section;
