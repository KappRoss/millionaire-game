import React from "react";
import s from './button.module.css'

interface Props {
    color?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({

                                     children,
                                     onClick,
                                 }) => {
    return (
        <button
            onClick={onClick}
            className={s.button}
        >
            {children}
        </button>
    );
}

export default Button;
