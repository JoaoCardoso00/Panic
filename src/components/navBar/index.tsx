import { NavLink } from "./NavLink";

// TODO: fix nav alignment and add hover styles

export function NavBar() {
  return (
    <nav className="flex items-center justify-center gap-10 py-4">
      <NavLink href="#">Technologies</NavLink>
      <NavLink href="#">Why us?</NavLink>
      <img src="/Logo.svg" alt="Panic Logo" className="" />
      <NavLink href="#">Our team</NavLink>
      <NavLink href="#">Contact</NavLink>
    </nav>
  );
}
