import React, {FC} from "react";
import s from './ActiveQuestion.module.css'
import AnswersList from "./AnswersList";
import {AStyle, QuestionData} from "../../../../types";

interface AQProps {
    data: QuestionData
    onAnswerClick: (answerId: number) => void
    answerStyle: null | AStyle
}

const ActiveQuestion: FC<AQProps> = ({
                                         data,
                                         onAnswerClick,
                                         answerStyle
                                     }) => (
    <div className={s.activeQuestion}>
        <p >{data.question}</p>
        <AnswersList
            answers={data.answers}
            onAnswerClick={onAnswerClick}
            answerStyle={answerStyle}
        />
    </div>
)

export default ActiveQuestion