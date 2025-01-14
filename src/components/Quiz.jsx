import Question from "./Question";
import PropTypes from "prop-types";
import Timer from "./Timer";

export default function Quiz({ questions }) {
  //// TODO: Add next functionality here
  /// Complete this with Timer and all the logic

  return (
    <div className="questions">
      {/* {questions.map((question, index) => (
        <Question key={index} {...question} />
      ))} */}

      { }
    </div>
  );
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
};
