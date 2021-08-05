import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    onClick?: () => void
    transparent?: boolean
    overrideTailwindProps?: string
    fontblack?: boolean
    type?: string
}

export default function Button(props: Props) {
    return (
        <button
            // @ts-ignore
            type="button"
            {...props}
            className={`${!props.transparent && 'bg-brand-primary'}
      rounded-sm
      text-white
      ${props.fontblack && 'text-gray-title'}
                text-xs
                p-3
                font-medium
                ${props.overrideTailwindProps}`}
        >
            {props.children}
        </button>
    )
}
