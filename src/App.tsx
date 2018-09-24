import "./App.css";

import * as React from "react";

import Button from "./Button";
import { questions } from "./questions";
import Quiz from "./Quiz/Quiz";

interface IAppState {
  isQuizing: boolean;
  points: number;
  doneQuizing: boolean;
}

class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isQuizing: false,
      doneQuizing: false,
      points: 0
    };
  }

  public onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ isQuizing: true, doneQuizing: false, points: 0 });
  };

  public onSubmit = (points: number) => {
    this.setState({ points, isQuizing: false, doneQuizing: true });
  };

  public render() {
    const { isQuizing, doneQuizing, points } = this.state;
    return (
      <div className="App">
        <h1>Sofias och Alexanders quizziga quiz</h1>
        <span>{doneQuizing && points + " rätt!"}</span>
        {isQuizing ? (
          <Quiz onSubmit={this.onSubmit} questions={questions} />
        ) : (
          <Button onClick={this.onClick}>
            {doneQuizing ? "Kör igen!" : "Starta Quizet"}
          </Button>
        )}
      </div>
    );
  }
}
export default App;
