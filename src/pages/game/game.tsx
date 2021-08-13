import React, {FC, useEffect, useState} from "react";
import s from './game.module.css'
import questions from '../../data'
import {useHistory} from "react-router-dom";
import ActiveQuestion from "./components/ActiveQuestion";
import ScoreDashboard from "./components/ScoreDashboard";
import {buttonStyle, Context} from '../../data/context'
// @ts-ignore

const Game: FC = () => {
    const {questions: data} = questions
    const history = useHistory()
    const [state, setState] = useState({
        isFinished: false,
        activeQuestion: 0,
        score: 11,
        answerStyle: {
            borerColor: 'grey',
            background: 'white'
        }
    })

    useEffect(() => {
        state.isFinished && history.push('/game-over')
    })

    const onAnswerClickHandler = (answerId: number) => {
        const question = data[state.activeQuestion]

        if (question.rightAnswerId === answerId) {
            const timeout = window.setTimeout(() => {
                if (isGameOver()) {
                    history.push('/game-over')
                } else {
                    setState({
                        ...state,
                        activeQuestion: state.activeQuestion + 1,
                        score: state.score - 1,
                        answerStyle: {
                            borerColor: '#47D867',
                            background: '#E6FAEA'
                        }
                    })
                }
                window.clearTimeout(timeout)
            }, 500)
        } else {
            const timeout = window.setTimeout(() => {
                history.push('/game-over')
                window.clearTimeout(timeout)
            }, 1000)
        }
    }

    // 12 or question.length
    const isGameOver = () => state.activeQuestion + 1 === 4

    return (
        <div className={s.container}>
            <div className={s.gamePlace}>
                <Context.Provider value={state.answerStyle}>
                    <ActiveQuestion
                        data={data[state.activeQuestion]}
                        onAnswerClick={onAnswerClickHandler}
                    />
                </Context.Provider>
            </div>
            <div className={s.scorePlace}>
                <ScoreDashboard score={state.score}/>
            </div>
        </div>
    )
}

export default Game