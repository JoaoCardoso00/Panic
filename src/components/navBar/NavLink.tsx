import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a className="text-xl text-text-white" href={href}>
      {children}
    </a>
  );
};
