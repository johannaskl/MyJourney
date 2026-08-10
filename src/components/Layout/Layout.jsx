import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const links = [
  { path: "/", label: "STARTSIDA" },
  { path: "/om-mig", label: "OM MIG" },
  { path: "/utbildning", label: "UTBILDNING" },
  { path: "/yrkesbakgrund", label: "YRKESBAKGRUND" },
  { path: "/portfolio", label: "PORTFOLIO" },
  { path: "/kontakt", label: "KONTAKT" },
];

const Layout = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="text-center">
        <div className="flex items-center justify-between md:block">
          <Link to="/">
            <h1 className="text-3xl sm:text-5xl md:text-9xl font-bold my-5 md:my-10 text-slate-50 text-left sm:text-center">
              JOHANNA LARSSON
            </h1>
          </Link>

          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Stäng meny" : "Öppna meny"}
          >
            <span
              className={`block h-1 w-8 bg-slate-50 rounded transition-transform duration-300 ${
                open 
                  ? "translate-y-2 rotate-45" 
                  : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-slate-50 rounded my-1 transition-opacity duration-300 ${
                open 
                  ? "opacity-0" 
                  : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-1 w-8 bg-slate-50 rounded transition-transform duration-300 ${
                open 
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Navigering */}
        <nav className="mt-4">

          {/* Mobilmeny */}
          <ul className={`flex flex-col gap-2 md:hidden transition-all duration-300 ${
              open 
                ? "max-h-96 opacity-100 bg-slate-50/40 rounded-2xl"
                : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
            }`}
            aria-hidden={!open}
          >
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`block rounded-full px-6 py-2 transition-all duration-200 ${
                    pathname === link.path
                      ? "bg-slate-50 text-slate-900"
                      : "hover:bg-slate-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktopmeny */}
          <ul className="hidden md:flex flex-col md:flex-row justify-center">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block rounded-full px-4 lg:px-8 py-2 transition-all duration-200 ${
                    pathname === link.path
                      ? "bg-slate-50 text-slate-900"  
                      : "hover:bg-slate-50/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p className="flex justify-center font-thin mt-20 text-slate-50/50">
          <Link to="/">&copy; Johanna Larsson </Link>
        </p>
      </footer>
    </>
  );
};

export default Layout;
