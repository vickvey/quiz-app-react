import PropTypes from 'prop-types';
import './Question.css';

function Question({ id, content, options, correct }) {
  return (
    <div className="question">
      <fieldset id={id} name={id}>
        <legend> Question-{id} </legend>
        <p>{content}</p>
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" name={id} value={index} />
            {option}
          </label>
        ))}
        <output name="q1"></output>
      </fieldset>
    </div>
  );
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  correct: PropTypes.string.isRequired,
};

export default Question;
