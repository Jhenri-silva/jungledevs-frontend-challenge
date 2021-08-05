import Link from 'next/link'
import logoLabel from '@/assets/logoLabel.svg'
import Navbar from '@c/navbar'
import Image from 'next/image'
import Background from '@c/background'
import Button from '@c/button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ImageHeader from '@/assets/ImageHeader.png'
import playButton from '@/assets/playButton.svg'
import heroBackground from '@/assets/heroBackground.png'
import profileImage from '@/assets/profileImage.png'

import { useTheme } from '@material-ui/core/styles'

import { AppConfig } from '@/utils/AppConfig'

const LeftsideNavItems = () => {
    return (
        <>
            <ul className="flex flex-row">
                <li>
                    <Link href="/" passHref>
                        <Button transparent>{AppConfig.nav_option_1}</Button>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <Button transparent>{AppConfig.nav_option_2}</Button>
                    </Link>
                </li>
                <li>
                    <Link href="/" passHref>
                        <Button transparent>{AppConfig.nav_option_3}</Button>
                    </Link>
                </li>
            </ul>
        </>
    )
}

const Hero = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const mobile = useMediaQuery('(min-width: 400px)')

    return (
        <Background image={heroBackground}>
            {/* implement   color="bg-brand-secondary" on background */}
            <header>
                <Navbar
                    leftside={matches ? LeftsideNavItems : () => <></>}
                    logo={<Image src={logoLabel} alt="image" />}
                >
                    <li>
                        <Link href="" passHref>
                            <Button>{AppConfig.nav_option_4}</Button>
                        </Link>
                    </li>

                    <li>
                        {mobile ? (
                            <Link href="/" passHref>
                                <Button transparent>
                                    {AppConfig.nav_option_5}
                                </Button>
                            </Link>
                        ) : (
                            () => <></>
                        )}
                    </li>
                </Navbar>
            </header>
            <section className="sm:p-20 p-3 text-white flex justify-around items-center">
                <div className="mx-4 max-w-xl flex flex-col justify-between">
                    <h1 className="drop-shadow-lg font-medium max-w-md my-2 text-center sm:text-left">
                        {AppConfig.hero_title_primary}
                    </h1>
                    <span className="drop-shadow-lg flex my-2 sm:text-left text-center">
                        {AppConfig.hero_description_primary}
                    </span>
                    <div className="flex items-center my-10 sm:my-2">
                        <Image src={playButton} alt="image" />
                        <span className="mx-4 underline">
                            {AppConfig.hero_button}
                        </span>
                    </div>
                </div>
                {matches ? (
                    <Image src={ImageHeader} alt="image" />
                ) : (
                    () => <></>
                )}
            </section>
            <article className="drop-shadow p-6 bg-white text-center sm: text-left flex flex-col text-xs sm:text-sm sm:flex-row items-center justify-center">
                <Image src={profileImage} alt="image" />
                <span className="underline text-brand-secondary font-medium m-2">
                    {AppConfig.care_day_availability_title}
                </span>
                <span className="font-medium text-black">
                    {AppConfig.care_day_availability}
                </span>
            </article>
        </Background>
    )
}

export default Hero
