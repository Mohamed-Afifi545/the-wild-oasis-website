"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-row sm:flex-col gap-0 sm:gap-2 h-full text-sm sm:text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-1 sm:py-3 px-3 sm:px-5  ${
                pathname === link.href
                  ? "bg-primary-900 text-primary-100 "
                  : "text-primary-200  hover:bg-primary-900 hover:text-primary-100 transition-colors"
              } flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-semibold `}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="m-auto sm:mt-auto bg-accent-500 text-primary-800 ">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
