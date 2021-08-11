import React, {FC} from "react";
import s from './answerItem.module.css'

interface AIProps {
    answer: any,
    onAnswerClick: any
}

const AnswerItem: FC<AIProps> = ({answer, onAnswerClick}) => {
    return (
        <div
            className={s.container}
            onClick={() => onAnswerClick(answer.id)}
        >
            <p>{answer.text}</p>
        </div>
    )
}

export default AnswerItem