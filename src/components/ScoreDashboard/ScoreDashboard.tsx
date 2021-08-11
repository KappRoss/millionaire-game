import React, {FC} from "react";
import moneyAccount from "../../data/moneyAccount";

interface SDProps {
    score: number
}

const ScoreDashboard: FC<SDProps> = ({score}) => {

    const {money: scoreDashboard} = moneyAccount

    return (
        <div>
            {scoreDashboard.map((item, index) => {
                    let color = "#D0D0D8"
                    if (score === index) {
                        color = "#FF8B37"
                    }
                    if (score > index) {
                        color = 'black'
                    }

                    return <div
                        style={{
                            textAlign: "center",
                            color: color
                        }}
                        key={item}>
                        {item}
                    </div>
                }
            )}
        </div>
    )
}

export default ScoreDashboard