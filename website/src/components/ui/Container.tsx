import React from 'react'
import s from './Ui.module.sass'
import { cls } from '@/utils'

interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export function Container({ children, className, ...rest }: Props) {
    return (
        <div className={cls(s.container, className)} {...rest}>
            {children}
        </div>
    )
}
