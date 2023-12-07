import { links, profiles } from "@/lib/constants";
import Link from "next/link";
import { FC } from "react";
import { NavigationLink } from "./navigation-link";

export const NavigationContent: FC = () => {
  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-4">
        <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight">Aníbal Santos</span>
            <span className="text-neutral-600">Software Engineer</span>
          </div>
        </Link>
        <div className="flex flex-col gap-1">
          {links.map((link, linkIndex) => (
            <NavigationLink
              key={link.href}
              href={link.href}
              label={link.label}
              icon={link.icon}
              shortcutNumber={linkIndex + 1}
            />
          ))}
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 text-sm">
        <span className="px-2 text-xs font-medium leading-relaxed text-neutral-600">
          Profiles
        </span>
        <div className="flex flex-col gap-1">
          {Object.values(profiles).map((profile) => (
            <NavigationLink
              key={profile.url}
              href={profile.url}
              label={profile.title}
              icon={profile.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
