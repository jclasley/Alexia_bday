import * as React from 'react';
import { questions } from '../../utils/questions';
import Question from './question';

const App = () => {
  const [qNum, nextQ] = React.useState(0);
  const [start, toggleStart] = React.useState(false);

  const showQuestion = () => {
    const q = questions[qNum];
    if (!q) {
      return (<div id="qr"><img src="assets/bday_hey_hey.png" /></div>)
    }
    return <Question change={checkQuestion} question={q.question} answer={q.answer} />
  }

  const checkQuestion = (text: string, answer: string) => {
    if (text.toLowerCase() === answer.toLowerCase()) {
      nextQ(qNum + 1);
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
    <div className="static">
      <div className="title">
        Happy birthday!
      </div>
      <div className="subhead">
        As part of your present, here's a little scavenger hunt that you can do while you're at work.
      </div>
    </div>
    {start && showQuestion()}
    {start || <button onClick={() => toggleStart(true)}>Start</button>}
    </>
  )
};

export default App;