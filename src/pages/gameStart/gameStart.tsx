import React, {FC} from "react";
import s from './gameStart.module.css'
import {NavLink} from "react-router-dom";

const GameStart: FC = () => {

    return (
        <div className={s.mainContainer}>
            <div className={s.handImageBlock}/>
            <div className={s.infoBlock}>
                <p>Who wants to be a millionaire?</p>
                <NavLink to={'/game'}>Start</NavLink>
            </div>
        </div>
    )
}

export default GameStart