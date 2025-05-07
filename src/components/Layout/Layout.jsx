import { Link, Outlet, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="text-center mt-10">
        <Link to="/">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-10">Johanna Larsson</h1>
          <hr className="md:max-w-5xl mx-auto my-5" />
        </Link>

        {/* Navigering */}
        <div className="mx-auto px-4 sm:px-6 md:max-w-5xl w-full">
          <ul className="bg-stone-400/40 mt-3 flex flex-col sm:flex-row shadow-md rounded-lg">
            <li className={`mr-1 p-2 rounded-md sm:w-48 ${isActive("/") ? "bg-stone-700/50 text-slate-100" : "text-neutral-800 hover:bg-stone-700 hover:text-slate-100"}`}>
              <Link to="/">STARTSIDA</Link>
            </li>
            <li className={`mr-1 p-2 rounded-md sm:w-48 ${isActive("/about") ? "bg-stone-700/50 text-slate-100" : "text-neutral-800 hover:bg-stone-700 hover:text-slate-100"}`}>
              <Link to="/about">OM MIG</Link>
            </li>
            {/* Dropdown för erfarenhet */}
            <li className="relative group mr-1 p-2 rounded-md sm:w-48 hover:bg-stone-700 hover:text-slate-100">
              <Link to="#">ERFARENHET</Link>
              <ul className="absolute hidden group-hover:block bg-stone-400 mt-1 shadow-lg rounded-lg">
                <li className={`p-2 rounded-md sm:w-48 ${isActive("/education") ? "bg-stone-700/50 text-slate-100" : "text-neutral-800 hover:bg-stone-700 hover:text-slate-100"}`}>
                  <Link to="/education">UTBILDNING</Link>
                </li>
                <li className={`p-2 rounded-md sm:w-48 ${isActive("/experience") ? "bg-stone-700/50 text-slate-100" : "text-neutral-800 hover:bg-stone-700 hover:text-slate-100"}`}>
                  <Link to="/experience">YRKESBAKGRUND</Link>
                </li>
              </ul>
            </li>
            <li className={`mr-1 p-2 rounded-md sm:w-48 ${isActive("/portfolio") ? "bg-stone-700/50 text-slate-100" : "text-neutral-800 hover:bg-stone-700 hover:text-slate-100"}`}>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li className={`mr-1 p-2 rounded-md sm:w-48 ${isActive("/contact") ? "bg-stone-700/50 text-slate-100" : "text-neutral-800 hover:bg-stone-700 hover:text-slate-100"}`}>
              <Link to="/contact">KONTAKT</Link>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p className="flex justify-center font-thin text-neutral-500 mt-12">
          <Link to="/">&copy; Johanna Larsson </Link>
        </p>
      </footer>
    </>
  );
};

export default Layout;
