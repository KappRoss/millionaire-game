import React, {FC, useContext} from "react";
import s from './gameStatus.module.css'
import {NavLink, useLocation} from "react-router-dom";
import Button from "../../components/Button";
import {Context} from "../../data/context";

const GameStatus: FC = () => {

    const location = useLocation()
    let isMain = location.pathname === '/'
    const context = useContext(Context)
    const {total} = context
    // console.log(totalScore)


    return (
        <div className={isMain ? s.mainContainer : s.gameOverContainer}>
            <div className={s.handImageBlock}/>
            <div className={s.infoBlock}>
                <div className={s.contentWrapper}>
                    {isMain
                        ? <p>Who wants to be a millionaire?</p>
                        : <>
                            <p className={s.totalScore}>Total score:</p>
                            <p> earned</p>
                        </>
                    }
                    <NavLink className={s.startButton} to={'/game'}>
                        <Button>{isMain ? "Start" : "Try again"}</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default GameStatus