import React, {FC} from "react";
import {LayoutProps} from "../../types";
import s from './layout.module.css'

const Layout: FC<LayoutProps> = ({children} ) => {
    return (
        <main className={s.layout}>
            {children}
        </main>
    )
}

export default Layout