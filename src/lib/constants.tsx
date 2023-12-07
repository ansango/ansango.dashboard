import {
  Bookmarks,
  Github,
  Home,
  Keyboard,
  Linkedin,
  Tool,
} from "@/components/icons";

import { ReactNode } from "react";

export const SCROLL_AREA_ID = "scroll-area";
export const MOBILE_SCROLL_THRESHOLD = 20;

type Link = {
  href: string;
  label: string;
  icon?: ReactNode;
};

export const links: Array<Link> = [
  {
    href: "/",
    label: "Home",
    icon: <Home />,
  },
  {
    href: "/bookmarks",
    label: "Bookmarks",
    icon: <Bookmarks />,
  },
  {
    href: "/coding",
    label: "Coding",
    icon: <Keyboard />,
  },
  {
    href: "/tooling",
    label: "Tooling",
    icon: <Tool />,
  },
];

type Profile = {
  title: string;
  username?: string;
  url: string;
  icon?: ReactNode;
};

type Profiles = {
  [key: string]: Profile;
};

export const profiles: Profiles = {
  github: {
    title: "Github",
    url: "https://github.com/ansango",
    icon: <Github />,
  },
  linkedin: {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/ansango/",
    icon: <Linkedin />,
  },
};
