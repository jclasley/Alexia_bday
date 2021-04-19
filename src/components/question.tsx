import * as React from 'react';

interface QProps {
  change: Function,
  question: string,
  answer: string
}
const Question = ({change, question, answer}: QProps) => {
  const [given, changeAnswer] = React.useState('');

  const updateAnswer = (txt: string) => {
    changeAnswer(txt);
    if (change(txt, answer)) {
      changeAnswer('');
    };
  }

  return (
    <>
    <div className="question">{question}</div>
    <input type="text" value={given} onChange={(e) => updateAnswer(e.target.value)}></input>
    </>
  )
}

export default Question;