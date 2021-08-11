export declare module Quiz {

    export interface Answer {
        text: string;
        id: number;
    }

    export interface Question {
        question: string;
        id: number;
        rightAnswerId: number;
        answers: Answer[];
    }

    export interface RootObject {
        questions: Question[];
    }

}

declare module MoneyLadder {

    export interface Money {
        value: string;
    }

    export interface RootObject {
        money: Money[];
    }

}