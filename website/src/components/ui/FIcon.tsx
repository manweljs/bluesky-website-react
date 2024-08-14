import React from 'react'
import s from "./Ui.module.sass"
import { cls } from '@/utils'


interface Props {
    name: string
    size?: string | number
    color?: string
    primary?: boolean
    pointer?: boolean
}
export default function FIcon({ name, size = '1rem', color, primary = false, pointer }: Props) {
    const fontSize = typeof size === 'number' ? `${size}px` : size;
    color = primary ? 'var(--primary)' : color;
    const cursor = pointer ? 'pointer' : 'default';
    return <i className={cls(`fi ${name}`, s.ficon)} style={{ fontSize, color, cursor }} />;
}