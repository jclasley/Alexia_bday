import * as React from 'react';

interface QProps {
  change: Function,
  question: string,
  answer: string
}
const Question = ({change, question, answer}: QProps) => {
  const [given, changeAnswer] = React.useState('');
  const [correct, toggleCorrect] = React.useState(true);

  const updateAnswer = (txt: string) => {
    if (change(txt, answer)) {
      toggleCorrect(true);
    } else {
      toggleCorrect(false)
    };
    changeAnswer('');
  }

  return (
    <>
    <div className="question">{question}</div>
      <input type="text" value={given} onChange={(e) => changeAnswer(e.target.value)}></input>
    <button onClick={() => updateAnswer(given)}>Lock it in</button>
    {correct || 'Try again'}
    </>
  )
}

export default Question;