export interface IAnswer {
  id: number;
  isCorrect: boolean;
  isChosen?: boolean;
  text: string;
}
export interface IQuestion {
  answers: IAnswer[];
  id: number;
  question: string;
}

export const questions: IQuestion[] = [
  {
    answers: [
      {
        id: 1,
        isCorrect: false,
        text: "Inga"
      },
      {
        id: 2,
        isCorrect: true,
        text: "Många"
      },
      {
        id: 3,
        isCorrect: false,
        text: "Några"
      }
    ],
    id: 1,
    question:
      "Hur många äpplen kommer Sofias pappa skörda från sin trädgård nästa år?"
  },
  {
    answers: [
      {
        id: 4,
        isCorrect: true,
        text: "Inga"
      },
      {
        id: 5,
        isCorrect: false,
        text: "Många"
      },
      {
        id: 6,
        isCorrect: true,
        text: "Några"
      }
    ],
    id: 2,
    question:
      "Hur många äpplen kommer Alexanders pappa skörda från sin trädgård nästa år?"
  },
  {
    answers: [
      {
        id: 7,
        isCorrect: true,
        text: "Inga"
      },
      {
        id: 8,
        isCorrect: false,
        text: "Många"
      },
      {
        id: 9,
        isCorrect: false,
        text: "Några"
      }
    ],
    id: 3,
    question: "Hur många Plopp finns kvar i skålen?"
  }
];
