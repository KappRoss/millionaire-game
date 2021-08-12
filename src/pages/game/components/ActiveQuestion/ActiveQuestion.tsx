import React, {FC} from "react";
import s from './ActiveQuestion.module.css'
import {Quiz} from '../../quiz';
import AnswersList from "./AnswersList";

interface AQProps {
    // data: Quiz.Question,
    data: any
    onAnswerClick: any
    // onAnswerClick: () => number
}

const ActiveQuestion: FC<AQProps> = ({data, onAnswerClick}) => {

    return (
        <div className={s.activeQuestion}>
            <p>{data.question}</p>
            <AnswersList
                answers={data.answers}
                onAnswerClick={onAnswerClick}
            />
        </div>
    )
}

export default ActiveQuestion