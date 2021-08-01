import Link from "next/link";
import { AppConfig } from "@/utils/AppConfig";
import logoLabel from "@/assets/logoLabel.svg";
import { Navbar, Image, Background, Button } from "..";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ImageHeader from "@/assets/ImageHeader.png";
import playButton from "@/assets/playButton.svg";
import heroBackground from "@/assets/heroBackground.png";

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
      <main className="sm:p-20 p-3">
        <article className="text-white flex justify-between items-center">
          <div className="mx-4 max-w-xl flex flex-col justify-between">
            <h1 className="font-medium max-w-md my-2 text-center sm:text-left">
              {AppConfig.hero_title_primary}
            </h1>
            <span className="flex my-2 sm:text-left text-center">
              {AppConfig.hero_description_primary}
            </span>
            <div className="flex items-center my-10 sm:my-2">
              <Image src={playButton} />
              <span className="mx-4 buttonlink">{AppConfig.hero_button}</span>
              <style jsx>
                {`
                  .buttonlink {
                    text-decoration: underline;
                  }
                `}
              </style>
            </div>
          </div>
          {matches ? <Image src={ImageHeader}></Image> : () => <></>}
        </article>
      </main>
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
