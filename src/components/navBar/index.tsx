import { NavLink } from "./NavLink";

// TODO: fix nav alignment and add hover styles

export function NavBar() {
  return (
    <nav className="flex items-center justify-center gap-10 py-4">
      <div className="flex gap-6">
        <NavLink href="#">Technologies</NavLink>
        <NavLink href="#">Why us?</NavLink>
      </div>
      <div>
        <img src="/Logo.svg" alt="Panic Logo" />
      </div>
      <div className="flex gap-6">
        <NavLink href="#">Our team</NavLink>
        <NavLink href="#">Contact Us</NavLink>
      </div>
    </nav>
  );
}
