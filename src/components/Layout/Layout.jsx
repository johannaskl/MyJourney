import { Link, Outlet, useLocation } from "react-router-dom";

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

  return (
    <>
      <header className="text-center">
        <Link to="/">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold my-10 text-slate-50">
            JOHANNA LARSSON
          </h1>
        </Link>

        {/* Navigering */}
        <nav className="mt-4">
          <ul className="flex flex-col md:flex-row justify-center">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block rounded-full px-6 py-2 transition-all duration-200 ${
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
