import Link from 'next/link'

import Image from 'next/image'

import ImageSection from '@/assets/ImageSection4.png'

import { useTheme, useMediaQuery } from '@material-ui/core'

import { AppConfig } from '@/utils/AppConfig'

export default function FurtherInfoSection() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <section className="px-6 text-center flex flex-col justify-center items-center text-gray-title">
            <div className="max-w-3xl grid grid-rows-auto gap-4">
                <h2 className="font-medium">
                    {AppConfig.reason_section_title}{' '}
                </h2>
                <span>{AppConfig.reason_section_description} </span>
                <Link href="/" passHref>
                    <span className="text-brand-secondary underline">
                        {AppConfig.reason_section_link_text}
                    </span>
                </Link>
            </div>
            {matches ? (
                <div className="p-8 max-w-5xl">
                    <Image src={ImageSection} alt="section image" />
                </div>
            ) : (
                () => <> </>
            )}
        </section>
    )
}
