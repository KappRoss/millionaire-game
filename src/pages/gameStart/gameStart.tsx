import React, {FC} from "react";
import s from './gameStart.module.css'
import {NavLink} from "react-router-dom";
import Button from "../../components/Button";

const GameStart: FC = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.handImageBlock}/>
            <div className={s.infoBlock}>
                <div className={s.contentWrapper}>
                    <p>Who wants to be a millionaire?</p>
                    <NavLink className={s.startButton} to={'/game'}>
                        <Button>Start</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default GameStart