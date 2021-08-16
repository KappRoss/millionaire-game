import React, {FC, useState} from 'react';
import Burger from '../Burger';

interface MMProps {
    onOpenHandler: (isOpen: boolean) => void
}

const MobileMenu: FC<MMProps> = ({onOpenHandler}) => {
    const [open, setOpen] = useState<boolean>(false);
    const menuId = "main-menu";

    return (
        <div onClick={() => onOpenHandler(open)}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId}/>
        </div>
    );
}

export default MobileMenu;