import React from "react";
import s from './button.module.css'

const Button: React.FC = ({children}) => {
    return (
        <button
            className={s.button}
        >
            {children}
        </button>
    );
}

export default Button;
