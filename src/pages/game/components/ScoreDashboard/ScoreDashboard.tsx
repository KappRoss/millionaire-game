import React, {FC, useState} from "react";
import moneyAccount from "../../../../data/moneyAccount";
import s from './scoreDashboard.module.css'
import ButtonScore from "./components/ButtonScore";
import {StyledMobWrapper} from "./StyledMobMenu.styled";
import MobileMenu from "../../../../components/MobileMenu/MobileMenu";

interface SDProps {
    score: number
}

const ScoreDashboard: FC<SDProps> = ({score, ...props}) => {

    let [open, setOpen] = useState(true)
    const onOpenHandler = (isOpen: boolean) => setOpen(isOpen)

    const {money: scoreDashboard} = moneyAccount

    return (
        <>
            <MobileMenu onOpenHandler={onOpenHandler}/>
            <StyledMobWrapper open={open}  {...props}>
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
            </StyledMobWrapper>
        </>
    )
}

export default ScoreDashboard