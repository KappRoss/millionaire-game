import React, {FC} from "react";

interface AIProps {
    answer: any,
    onAnswerClick: any
}

const AnswerItem: FC<AIProps> = ({answer, onAnswerClick}) => {
    return (
        <div onClick={() => onAnswerClick(answer.id)} >
            <p>{answer.text}</p>
        </div>
    )
}

export default AnswerItem