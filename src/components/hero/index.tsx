import Link from "next/link";
import { AppConfig } from "@/utils/AppConfig";
import logoLabel from "@/assets/logoLabel.svg";
import { Navbar, Image, Background, Button } from "..";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ImageHeader from "@/assets/ImageHeader.png";
import playButton from "@/assets/playButton.svg";
import heroBackground from "@/assets/heroBackground.png";
import profileImage from "@/assets/profileImage.png";

const Hero = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const mobile = useMediaQuery("(min-width: 400px)");

  return (
    <Background image={heroBackground} color="bg-brand-secondary">
      <header>
        <Navbar
          leftside={matches ? LeftsideNavItems : () => <></>}
          logo={<Image src={logoLabel} />}
        >
          <li>
            <Link href="">
              <Button>{AppConfig.nav_option_4}</Button>
            </Link>
          </li>

          <li>
            {mobile ? (
              <Link href="/">
                <Button transparent>{AppConfig.nav_option_5}</Button>
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
            <Image src={playButton} />
            <span className="mx-4 underline">{AppConfig.hero_button}</span>
          </div>
        </div>
        {matches ? <Image src={ImageHeader}></Image> : () => <></>}
      </section>
      <article className="drop-shadow p-6 bg-white text-center sm: text-left flex flex-col text-xs sm:text-sm sm:flex-row items-center justify-center">
        <Image src={profileImage} />
        <span className="underline text-brand-secondary font-medium m-2">
          {AppConfig.care_day_availability_title}
        </span>
        <span className="font-medium text-black">
          {AppConfig.care_day_availability}
        </span>
      </article>
    </Background>
  );
};

const LeftsideNavItems = () => {
  return (
    <>
      <ul className="flex flex-row">
        <li>
          <Link href="">
            <Button transparent>{AppConfig.nav_option_1}</Button>
          </Link>
        </li>
        <li>
          <Link href="">
            <Button transparent>{AppConfig.nav_option_2}</Button>
          </Link>
        </li>
        <li>
          <Link href="">
            <Button transparent>{AppConfig.nav_option_3}</Button>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Hero;
