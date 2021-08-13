import React, {FC} from "react";
import s from "./answersList.module.css"
import AnswerItem from "./AnswerItem";

interface ALProps {
    answers: any[];
    onAnswerClick: any
    answerStyle: any
}

const AnswersList: FC<ALProps> = ({answers, onAnswerClick, answerStyle}) => (
    <div className={s.container}>
        {answers.map((answer, index) => (
            <AnswerItem
                key={index}
                answer={answer}
                onAnswerClick={onAnswerClick}
                answerStyle={answerStyle ? answerStyle[answer.id] : null}
            />
        ))}
    </div>
)


export default AnswersList