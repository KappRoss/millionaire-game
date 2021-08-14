import React, {FC} from "react";
import s from './layout.module.css'

const Layout: FC = ({children}) => (
        <main className={s.layout}>
            {children}
        </main>
    )

export default Layout