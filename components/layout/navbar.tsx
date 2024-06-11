"use client";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./logo";
import MobileSidebar from "./mobileSidebar";
import SignInButton from "./signInButton";
const Navbar = () => {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  const links = [
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Experiments",
      link: "/experiments",
    },
    {
      name: "Podcasts",
      link: "/podcasts",
    },
    {
      name: "Demos",
      link: "/demos",
    },
  ];
  const icons = [
    {
      link: "/chat",
      description: "Chatting",
      icon: "M12,3C6.5,3 2,6.58 2,11C2.05,13.15 3.06,15.17 4.75,16.5C4.75,17.1 4.33,18.67 2,21C4.37,20.89 6.64,20 8.47,18.5C9.61,18.83 10.81,19 12,19C17.5,19 22,15.42 22,11C22,6.58 17.5,3 12,3M12,17C7.58,17 4,14.31 4,11C4,7.69 7.58,5 12,5C16.42,5 20,7.69 20,11C20,14.31 16.42,17 12,17Z",
    },
    {
      link: "/sponsor",
      description: "Sponsors",
      icon: "M5,15L4.4,14.5C2.4,12.6 1,11.4 1,9.9C1,8.7 2,7.7 3.2,7.7C3.9,7.7 4.6,8 5,8.5C5.4,8 6.1,7.7 6.8,7.7C8,7.7 9,8.6 9,9.9C9,11.4 7.6,12.6 5.6,14.5L5,15M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M21.1,18.1H8.9V17C8.9,16.36 12,14.9 15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1Z",
    },
    {
      link: "https://www.facebook.com/profile.php?id=100024624228231&mibextid=ZbWKwL",
      description: "Facebook",
      icon: "M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z",
    },
    {
      link: "https://github.com/Tales-of-zuna",
      description: "Github",
      icon: "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",
    },
  ];

  return (
    <div className="absolute z-10 w-full p-4 md:p-8">
      <div className="flex items-center justify-between text-gray-400">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="hidden items-center gap-4 font-semibold sm:flex">
          {links.map((link) => (
            <Link
              className={`transform transition-all duration-300 ease-in-out hover:text-gray-200 ${
                link.link === path ? "text-gray-200" : "text-gray-400"
              }`}
              key={link.name}
              href={link.link}
            >
              {link.name}
            </Link>
          ))}
          {icons.map((icon) => (
            <Tooltip
              key={icon.icon}
              color="foreground"
              content={icon.description}
            >
              <Link href={icon.link}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform transition-all duration-300 ease-in-out hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={icon.icon} />
                </svg>
              </Link>
            </Tooltip>
          ))}
          <div className="h-10 w-px rounded-full bg-neutral-400 opacity-50"></div>
          <SignInButton />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <SignInButton />
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
