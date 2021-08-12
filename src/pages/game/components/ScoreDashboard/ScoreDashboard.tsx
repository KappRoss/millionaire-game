import React, {FC} from "react";
import moneyAccount from "../../../../data/moneyAccount";
import s from './scoreDashboard.module.css'
import ButtonScore from "./components/ButtonScore";

interface SDProps {
    score: number
}

const ScoreDashboard: FC<SDProps> = ({score}) => {

    const {money: scoreDashboard} = moneyAccount

    return (
        <div className={s.container}>

            {scoreDashboard.map((item, index) => {
                    let color = "#D0D0D8"
                    if (score === index) {
                        color = "#FF8B37"
                    }
                    if (score > index) {
                        color = 'black'
                    }

                    return <div className={s.item} key={item}>
                        <div
                            className={s.itemValue}
                            style={{
                                textAlign: "center",
                                color: color
                            }}
                        >
                            {item}
                        </div>
                        <div className={s.button}>
                            <ButtonScore/>
                        </div>
                    </div>


                }
            )}
        </div>
    )
}

export default ScoreDashboard