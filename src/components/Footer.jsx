function Footer() {
  const footerLinks = {
    Product: [
      { label: "Technologies", href: "#technologies" },
      { label: "Your Stack", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Community", href: "#" },
    ],
  };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="page-container py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5"
              aria-label="Dev Stack home"
            >
              <span className="gradient-bg flex h-9 w-9 items-center justify-center rounded-xl">
                <span className="text-sm font-extrabold text-white">
                  &lt;/&gt;
                </span>
              </span>

              <span className="gradient-text font-jakarta text-xl font-extrabold tracking-tight">
                Dev Stack
              </span>
            </a>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Explore modern developer technologies and build a stack that
              works for your next project.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2 className="text-sm font-bold text-slate-900">{title}</h2>

              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition-colors hover:text-slate-900"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-slate-900"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;