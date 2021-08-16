import React, {FC} from 'react';
import { StyledBurger } from './Burger.styled';

interface BurgerProp {
    open: boolean
    setOpen: any
}

const Burger: FC<BurgerProp> = ({ open, setOpen, ...props }) => {
    const isExpanded = open;

    return (

        <StyledBurger
            aria-label="Toggle menu"
            aria-expanded={isExpanded}
            // @ts-ignore
            open={open}
            onClick={() => setOpen(!open)} {...props}
            style={{outline: 'none'}}
        >
            <span />
            <span />
            <span />
        </StyledBurger>
    )
}

export default Burger;