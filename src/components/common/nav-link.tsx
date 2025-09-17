"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

function NavLink({ href, children, className }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = href === "/" ? pathName === "/" : pathName.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-200 text-sm text-gray-600 hover:text-rose-500",
        isActive && "text-rose-500 font-medium",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
