import React, {FC, useState} from "react";
import s from './answerItem.module.css'
import ButtonImg from "../../../../../../images/button";

interface AIProps {
    answer: any
    onAnswerClick: any
    answerStyle: any
}

const AnswerItem: FC<AIProps> = ({answer, onAnswerClick, answerStyle}) => {
    const [hoverColor, setHoverColor] = useState<string | undefined>(undefined)
    const option = ['A','B','C','D']
    return (
        <div
            className={s.container}
            onClick={() => onAnswerClick(answer.id)}
            onMouseEnter={() => setHoverColor('#FF8B37')}
            onMouseLeave={() => setHoverColor(undefined)}
        >
            <p>
                <span>{option[answer.id - 1]}</span>&nbsp;&nbsp;&nbsp; {answer.text}
            </p>
            <div className={s.buttonSvg}>
                <ButtonImg
                    borderColor={ answerStyle?.borderColor || hoverColor ||'#D0D0D8'}
                    background={ answerStyle?.background || '#FFFFFF'}
                />
            </div>
        </div>
    )
}

export default AnswerItem