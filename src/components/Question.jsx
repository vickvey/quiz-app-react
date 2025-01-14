import PropTypes from 'prop-types';
import './Question.css';

function Question({ id, content, options, correct, handleSubmit }) {
  return (
    <form className='question' id={id} onSubmit={handleSubmit}>
      <p>{content}</p>
      {options.map((option, index) => (
        <label key={index}>
          <input type="radio" name={id} value={index} />
          {option}
        </label>
      ))}
    </form>
  );
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  correct: PropTypes.string.isRequired,
};

export default Question;
