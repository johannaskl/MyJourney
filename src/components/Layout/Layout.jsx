import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

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
            className="md:hidden text-slate-50 text-3xl"
            onClick={() => setOpen(!open)}
          >☰</button>
        </div>

        {/* Navigering */}
        <nav className="mt-4">

          {/* Mobilmeny */}
          <ul className={`flex flex-col gap-2 md:hidden transition-all duration-300 ${
            open ? "max-h-96 opacity-100 bg-slate-50/40 rounded-2xl" : "max-h-0 opacity-0 overflow-hidden"
          }`}>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
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
