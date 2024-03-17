"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex flex-col justify-center items-center">
      <nav className="flex justify-center items-center gap-4 w-full mb-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={
                isActive ? "text-white" : "text-gray-300 hover:text-white"
              }
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}
