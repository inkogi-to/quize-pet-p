import {useQuiz} from "../context/QuizContext";

function Options() {
    const {questions, dispatch, answer, index} = useQuiz()
    const question = questions[index]
    const hasAnswer = answer !== null;
    return (
        <div className="options">
            {question.options.map((option, index) => (
                <button
                    className={`btn btn-option ${index === answer ? "answer" : ""} ${
                        hasAnswer
                            ? index === question.correctOption
                                ? "correct"
                                : "wrong"
                            : ""
                    }`}
                    key={option}
                    disabled={hasAnswer}
                    onClick={() => dispatch({type: "newAnswer", payload: index})}
                >
                    {option}
                </button>

            ))}
        </div>
    );
}

export default Options;
