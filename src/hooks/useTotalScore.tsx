import {useEffect, useState} from "react";
import moneyAccount from "../data/moneyAccount";

export default () => {

    const [totalScore, setTotalScore] = useState<string>('$0')
    const [index, setIndex] = useState<number>(11)

    useEffect(() => {
        let total = moneyAccount.money.filter((_, i) => i === index)[0]
        setTotalScore(total)
        sessionStorage.setItem('totalScore', totalScore)
    }, [index])

    return [setIndex, totalScore]
}