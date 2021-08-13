import React, {FC, useEffect, useState} from "react";
import s from './game.module.css'
import questions from '../../data'
import {useHistory} from "react-router-dom";
import ActiveQuestion from "./components/ActiveQuestion";
import ScoreDashboard from "./components/ScoreDashboard";
import useTotalScore from "../../hooks/useTotalScore";

const Game: FC = () => {
    const {questions: data} = questions

    const history = useHistory()
    const [total, setIndex] = useTotalScore()
    const [state, setState] = useState({
        isFinished: false,
        activeQuestion: 0,
        score: 11,
        answerStyle: null //[id]: {borderColor: '#D0D0D8', background: '#FFFFFF'}
    })

    useEffect(() => {
        state.isFinished && history.push('/game-over')
    })

    const onAnswerClickHandler = (answerId: number) => {
        const question = data[state.activeQuestion]
        // @ts-ignore
        setIndex(state.score)

        if (question.rightAnswerId === answerId) {

            setState({
                ...state,
                // @ts-ignore
                answerStyle: {
                    [answerId]: {borderColor: '#47D867', background: '#E6FAEA'}
                }
            })

            const timeout = window.setTimeout(() => {
                if (isGameOver()) {
                    history.push('/game-over')
                } else {
                    setState({
                        ...state,
                        activeQuestion: state.activeQuestion + 1,
                        score: state.score - 1,
                    })

                }
                window.clearTimeout(timeout)
            }, 500)

        } else {
            setState({
                ...state,
                // @ts-ignore
                answerStyle: {
                    [answerId]: {borderColor: '#EC6259', background: '#FDEEED'}
                }
            })
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
                <ActiveQuestion
                    data={data[state.activeQuestion]}
                    onAnswerClick={onAnswerClickHandler}
                    answerStyle={state.answerStyle}
                />
            </div>
            <div className={s.scorePlace}>
                {/*<Context.Provider value={state.score}>*/}
                    <ScoreDashboard score={state.score}/>
                {/*</Context.Provider>*/}

            </div>
        </div>
    )
}

export default Game