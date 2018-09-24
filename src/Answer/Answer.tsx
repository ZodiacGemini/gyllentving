import * as React from "react";

import { IAnswer } from "../questions";

interface IProps {
  answer: IAnswer;
  onClick: (answer: IAnswer) => void;
}
class Answer extends React.Component<IProps> {
  public onClick = () => {
    const { answer, onClick } = this.props;
    onClick(answer);
  };
  public render() {
    const { answer } = this.props;
    return (
      <button
        style={{ background: answer.isChosen ? "hotpink" : "white" }}
        onClick={this.onClick}
      >
        {answer.text}
      </button>
    );
  }
}

export default Answer;
