import ImageSection3 from '@/assets/ImageSection3.png'

import Image from 'next/image'
import Link from 'next/link'

import { AppConfig } from '@/utils/AppConfig'

export default function PaymentSection() {
    return (
        <section className="flex md:flex-row flex-col px-8 items-center justify-center">
            <div className="px-6 sm:px-20">
                <Image src={ImageSection3} alt="dashboard" />
            </div>
            <div className="grid md:max-w-xs max-w-full md:text-left text-center auto-rows-auto gap-4 my-8">
                <h2 className="font-medium text-gray-title">
                    {AppConfig.payment_title}
                </h2>
                <span className="text-gray-description">
                    {AppConfig.payment_description}
                </span>
                <Link href="/" passHref>
                    <span className="text-brand-secondary underline">
                        {AppConfig.payment_link_text}
                    </span>
                </Link>
            </div>
        </section>
    )
}
