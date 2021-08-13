import React from "react";
import moneyAccount from "./moneyAccount";

export type ContextType = {
    setScore: (value: number) => string
    total: string
}

let total = '$500'

// console.log(totalScore)

const setScore = (value: number) => {
    return total = moneyAccount.money.filter( (_, index) => index === value )[0]
}





export const Context = React.createContext<ContextType>({setScore, total})