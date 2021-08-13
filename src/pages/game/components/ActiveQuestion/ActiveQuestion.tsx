import React, {FC} from "react";
import s from './ActiveQuestion.module.css'
import AnswersList from "./AnswersList";

interface AQProps {
    data: any
    onAnswerClick: any
    answerStyle: any
}

const ActiveQuestion: FC<AQProps> = ({data, onAnswerClick, answerStyle}) => (
    <div className={s.activeQuestion}>
        <p>{data.question}</p>
        <AnswersList
            answers={data.answers}
            onAnswerClick={onAnswerClick}
            answerStyle={answerStyle}
        />
    </div>
)

export default ActiveQuestion