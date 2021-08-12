import React, {FC, useContext, useState} from "react";
import s from './answerItem.module.css'
import ButtonImg from "../../../../../../images/button";
import {Context} from "../../../../../../data/context";

interface AIProps {
    answer: any,
    onAnswerClick: any
}

const AnswerItem: FC<AIProps> = ({answer, onAnswerClick}) => {

    const [hoverColor, setHoverColor] = useState<string | undefined>(undefined)
    const {borerColor, background} = useContext(Context)
    console.log(borerColor, background)
    return (
        <div
            className={s.container}
            onClick={() => onAnswerClick(answer.id)}
            onMouseEnter={() => setHoverColor('#FF8B37')}
            onMouseLeave={() => setHoverColor(undefined)}
        >
            <p>
                <span>{answer.option}</span>&nbsp;&nbsp;&nbsp; {answer.text}
            </p>
            <div className={s.buttonSvg}>
                <ButtonImg borderColor={hoverColor || borerColor} background={background}/>
            </div>
        </div>
    )
}

export default AnswerItem