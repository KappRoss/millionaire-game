import React, {FC} from "react";
import s from './answerItem.module.css'
import ButtonImg from "../../../../../../images/button";

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
            <div className={s.buttonSvg}>
                <ButtonImg color='red'/>
            </div>
        </div>
    )
}

export default AnswerItem