export interface AStyle {
    [x: number]: {
        borderColor: string;
        background: string;
    }
}

export interface GameState {
    isFinished: boolean;
    activeQuestion: number;
    score: number;
    answerStyle: null | AStyle
}

export interface Answers {
    text: string;
    id: number;
}

export interface QuestionData {
    question: string;
    id: number;
    rightAnswerId: number;
    answers: Answers[]
}