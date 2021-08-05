import calendarIcon from '@/assets/calendarIcon.svg'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Button from '@c/button'
import fbIcon from '@/assets/fbIcon.svg'
import ttIcon from '@/assets/ttIcon.svg'
import instaIcon from '@/assets/instaIcon.svg'

import { AppConfig } from '@/utils/AppConfig'

const CallToActionButton = () => {
    return (
        <button
            className="bg-brand-secondary text-white w-72 rounded"
            type="button"
        >
            <div className="flex flex-row  items-center justify-start">
                <div className="my-auto px-6 py-4">
                    <Image src={calendarIcon} alt="image" />
                </div>
                <div className="flex flex-col items-start p-2">
                    <span className="text-base">
                        {AppConfig.footer_call_to_action_button_title}
                    </span>
                    <span className="text-xs">
                        {AppConfig.footer_call_to_action_button_description}
                    </span>
                </div>
            </div>
        </button>
    )
}

export default function Footer() {
    return (
        <>
            <section className="grid grid-row-auto gap-4 text-center justify-center p-12">
                <h2 className="font-medium text-gray-title">
                    {AppConfig.footer_call_to_action_button_title}
                </h2>
                <span className="text-gray-title">
                    {AppConfig.footer_call_to_action_button_description}
                </span>
                <div className="items-center">
                    <CallToActionButton />
                </div>
                <span className="underline text-brand-secondary">
                    {AppConfig.footer_call_to_action_link}
                </span>
            </section>
            <section className="text-center px-12">
                <div className="grid sm:grid-cols-3 grid-cols-1">
                    <div className="sm:justify-self-start justify-self-center self-center">
                        <Image src={logo} alt="image" />
                    </div>
                    <div className="my-4 self-center">
                        <Button fontblack transparent>
                            {AppConfig.footer_link_1}
                        </Button>
                        <Button fontblack transparent>
                            {AppConfig.footer_link_2}
                        </Button>
                        <Button fontblack transparent>
                            {AppConfig.footer_link_3}
                        </Button>
                        <Button fontblack transparent>
                            {AppConfig.footer_link_4}
                        </Button>
                    </div>
                    <div className="sm:justify-self-end justify-self-center py-4 self-center">
                        <Image src={fbIcon} alt="image" />
                        <Image src={ttIcon} alt="image" />
                        <Image src={instaIcon} alt="image" />
                    </div>
                </div>
                <span className="pb-8">{AppConfig.footer_copryright}</span>
            </section>
        </>
    )
}
