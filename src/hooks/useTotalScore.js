import React, {useContext, useEffect, useState} from "react";
import moneyAccount from "../data/moneyAccount";
import {Context} from "../data/context";

export default () => {

    const {total, setScore} = useContext(Context)

    const [totalScore, setTotalScore] = useState('$1000')
    const [index, setIndex] = useState(11)

    useEffect(() => {
        let total = moneyAccount.money.filter( (_, i) => i === index )[0]
        setTotalScore(total)


    }, [index])

    return [totalScore, setIndex]
}