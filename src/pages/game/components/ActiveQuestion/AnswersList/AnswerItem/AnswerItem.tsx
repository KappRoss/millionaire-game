import React, {FC, useState} from "react";
import s from './answerItem.module.css'
import ButtonImg from "../../../../../../images/button";

interface AIProps {
    answer: {
        text: string
        id: number
    }
    onAnswerClick: (answerId: number) => void
    answerStyle: null | {
        borderColor: string
        background: string
    }
}

const AnswerItem: FC<AIProps> = ({
                                     answer,
                                     onAnswerClick,
                                     answerStyle
                                 }) => {

    const [hoverColor, setHoverColor] = useState<string | undefined>(undefined)
    const option = ['A', 'B', 'C', 'D']

    const touchHandler = () => {
        setHoverColor('#FF8B37')
        setTimeout( () =>setHoverColor(undefined), 500)
    }

    return (
        <div
            className={s.container}
            onClick={() => onAnswerClick(answer.id)}
            onMouseEnter={() => setHoverColor('#FF8B37')}
            onMouseLeave={() => setHoverColor(undefined)}
            onTouchStart={touchHandler}
        >
            <p>
                <span>{option[answer.id - 1]}</span>&nbsp;&nbsp;&nbsp; {answer.text}
            </p>
            <div className={s.buttonSvg}>
                <ButtonImg
                    borderColor={answerStyle?.borderColor || hoverColor || '#D0D0D8'}
                    background={answerStyle?.background || '#FFFFFF'}
                />
            </div>
        </div>
    )
}

export default AnswerItem