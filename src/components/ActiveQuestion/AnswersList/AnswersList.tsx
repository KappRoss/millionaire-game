import React, {FC} from "react";
import s from "./answersList.module.css"
import {Quiz} from "../../../pages/game/quiz";
import AnswerItem from "./AnswerItem";

// export interface Data {
//     text: string;
//     id: number;
// }

interface ALProps {
    answers: any[];
    onAnswerClick: any
}

const AnswersList: FC<ALProps> = ({answers , onAnswerClick}) => {

    return (
        <div>
            {answers.map((answer, index) => (
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClick={onAnswerClick}
                />
            ))}
        </div>
    )
}

export default AnswersList