import Question from "./Question";
import PropTypes from "prop-types";

export default function Quiz({ questions }) {
  return (
    <div className="questions">
      {
        questions.map((question, index) => (
          <Question key={index} {...question} />
        ))
      }
    </div>
  );
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired
}