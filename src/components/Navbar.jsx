import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="page-container">
        <nav
          className="flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">
              {menuOpen ? "Close navigation menu" : "Open navigation menu"}
            </span>

            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <a
            href="#home"
            className="flex items-center gap-2.5"
            onClick={closeMenu}
            aria-label="Dev Stack home"
          >
            <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl shadow-sm">
              <span className="text-sm font-extrabold text-white">&lt;/&gt;</span>
            </span>

            <span className="font-jakarta text-lg font-extrabold tracking-tight gradient-text sm:text-xl">
              Dev Stack
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden px-2 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950 sm:block"
            >
              Sign In
            </button>

            <button
              type="button"
              className="gradient-bg rounded-full px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:px-5 sm:text-sm"
            >
              Sign Up
            </button>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-200 lg:hidden ${
            menuOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-white hover:text-slate-950"
                >
                  {link.label}
                </a>
              ))}

              <button
                type="button"
                onClick={closeMenu}
                className="mt-2 rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-white hover:text-slate-950"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;