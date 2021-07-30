import Link from "next/link";

const Hero = () => (
  //background
  <div color="bg-gray-100">
    <section>
      {/*<nav logo={<Logo xl />}> */}
      <nav>
        <li>
          <Link href="">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </nav>
    </section>
  </div>
);

export default Hero;
