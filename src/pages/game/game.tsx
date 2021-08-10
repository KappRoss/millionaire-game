import React, {FC, useEffect, useState} from "react";
import s from './game.module.css'
import questions from '../../data'
import {useHistory} from "react-router-dom";

const Game: FC = () => {

    const [isFinished, setIsFinished] = useState(false)
    const history = useHistory()

    useEffect(() => {
        isFinished && history.push('/game-over')
    })

    return (
        <div className={s.container}>
            <div className={s.gamePlace}>
                <div>
                    question
                </div>
                <div>
                    answers
                </div>
            </div>
            <div className={s.scorePlace}>
                money
            </div>
        </div>
    )
}

export default Game