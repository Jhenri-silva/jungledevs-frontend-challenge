import Link from "next/link";
import { AppConfig } from "@/utils/AppConfig";
import logoLabel from "@/assets/logoLabel.svg";
import { Navbar, Image, Background, Button } from "..";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const Hero = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const mobile = useMediaQuery("(min-width: 400px)");

  return (
    <Background color="bg-brand-secondary">
      <section>
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
      </section>
    </Background>
  );
};

const LeftsideNavItems = () => {
  return (
    <>
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
    </>
  );
};

export default Hero;
