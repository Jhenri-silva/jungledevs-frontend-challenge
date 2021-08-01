import { ReactNode } from "react";

import Link from "next/link";
import { FC } from "react";
import React from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  leftside: FC;
};

const Navbar = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div className="mx-4 flex flex-row items-center">
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
      <nav className="sm:mx-8">
        <ul
          style={{ listStyle: "none" }}
          className="navbar flex items-center font-medium text-xl text-gray-800"
        >
          {<props.leftside /> ? <props.leftside /> : <></>}
        </ul>
      </nav>
    </div>

    <nav>
      <ul
        style={{ listStyle: "none" }}
        className="navbar flex items-center font-medium text-xl text-gray-800"
      >
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export default Navbar;
