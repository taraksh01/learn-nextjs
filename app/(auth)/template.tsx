"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-black px-2"
      />
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
