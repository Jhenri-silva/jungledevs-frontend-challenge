import { ReactNode } from 'react'

import Image from 'next/image'

type IBackgroundProps = {
    children?: ReactNode
    tailwindprops?: string
    image?: any
}

const Background = (props: IBackgroundProps) => (
    <div className={props.tailwindprops}>
        <div className="hero">
            {props.children}
            <div className="bg">
                {props.image && (
                    <Image
                        alt="background image"
                        className="bgimage"
                        src={props.image}
                        layout="fill"
                    />
                )}
            </div>
        </div>
        <style jsx>
            {`
                .bg {
                    position: absolute;
                    top: 0;
                    width: 100%;
                    float: right;
                    min-height: 500px;
                    z-index: -1;
                    @apply bg-brand-secondary;
                    min-width: 385px;
                }
            `}
        </style>
    </div>
)

export default Background
