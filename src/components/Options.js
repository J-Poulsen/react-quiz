function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, index) => {
        const isSelectedAnswer = answer === index;
        const isCorrectAnswer = index === question.correctOption;
        const buttonClass = `btn btn-option ${
          isSelectedAnswer ? 'answer' : ''
        } ${hasAnswered ? (isCorrectAnswer ? 'correct' : 'wrong') : ''}`;

        return (
          <button
            className={buttonClass}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
