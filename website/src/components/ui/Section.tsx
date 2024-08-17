import React from 'react'
import s from "./Ui.module.sass"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode

}

export function Section({ children, ...rest }: Props) {
    return (
        <div className={s.section} {...rest}>
            {children}
        </div>
    )
}
