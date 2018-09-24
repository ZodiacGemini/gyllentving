import * as React from "react";

import Button from "../Button";
import Question from "../Question/Question";
import { IAnswer, IQuestion } from "../questions";

interface IQuizProps {
  questions: IQuestion[];
  onSubmit: (points: number) => void;
}
interface IQuizState {
  questions: IQuestion[];
}

class Quiz extends React.Component<IQuizProps, IQuizState> {
  constructor(props: IQuizProps) {
    super(props);
    this.state = {
      questions: [...props.questions]
    };
  }

  public onQuestionClick = (question: IQuestion, answer: IAnswer) => {
    const questionArray = [...this.state.questions];
    const answerIndex = question.answers.findIndex(a => a.id === answer.id);
    question.answers.forEach(a => (a.isChosen = false));
    question.answers[answerIndex].isChosen = true;
    questionArray[
      questionArray.findIndex(q => q.id === question.id)
    ] = question;

    this.setState({
      questions: questionArray
    });
  };

  public correctQuiz = () => {
    const { questions } = this.state;
    const points = questions.map(
      q => q.answers.filter(a => a.isChosen && a.isCorrect).length
    );
    const finalPoints = points.reduce((p, c) => p + c, 0);
    return finalPoints;
  };

  public onSubmit = () => {
    const points = this.correctQuiz();
    this.props.onSubmit(points);
  };

  public render() {
    const { questions } = this.state;
    return (
      <div>
        {questions.map(q => {
          return (
            <Question key={q.id} question={q} onClick={this.onQuestionClick} />
          );
        })}
        <Button
          style={{ display: "block", margin: "auto" }}
          onClick={this.onSubmit}
        >
          Svara
        </Button>
      </div>
    );
  }
}

export default Quiz;
