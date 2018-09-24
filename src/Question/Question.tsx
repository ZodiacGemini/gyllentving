import * as React from "react";

import Answer from "../Answer/Answer";
import { IAnswer, IQuestion } from "../questions";

interface IProps {
  question: IQuestion;
  onClick: (question: IQuestion, answer: IAnswer) => void;
}

class Question extends React.Component<IProps> {
  public onClick = (answer: IAnswer) => {
    const { question, onClick } = this.props;
    onClick(question, answer);
  };

  public render() {
    const { question } = this.props;
    return (
      <>
        <h2>{question.question}</h2>
        {question.answers.map(a => (
          <Answer key={a.id} answer={a} onClick={this.onClick} />
        ))}
      </>
    );
  }
}

export default Question;
