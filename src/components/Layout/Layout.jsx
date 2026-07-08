import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="text-center">
        <Link to="/">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold my-10 text-slate-50">JOHANNA LARSSON</h1>
        </Link>

        {/* Navigering */}
        <nav className="mx-auto px-4 sm:px-6 md:max-w-5xl w-full mt-4">
          <ul className="mt-3 flex flex-col sm:flex-row">
            <li className={`mr-1 p-2 rounded-full sm:w-48 ${isActive("/") ? "bg-slate-50" : " hover:bg-slate-50/50"}`}>
              <Link to="/">STARTSIDA</Link>
            </li>
            
            <li className={`mr-1 p-2 rounded-full sm:w-48 ${isActive("/om-mig") ? "bg-slate-50" : " hover:bg-slate-50/50"}`}>
              <Link to="/om-mig">OM MIG</Link>
            </li>

            {/* Dropdown för erfarenhet */}
            <li className="relative group mr-1 p-2 rounded-full sm:w-48 hover:bg-slate-50">
              <Link to="#">ERFARENHET</Link>
              <ul className="absolute hidden group-hover:block bg-stone-200 mt-1 shadow-lg rounded-lg">
                <li className={`p-2 rounded-full sm:w-48 ${isActive("/utbildning") ? "bg-slate-50" : " hover:bg-slate-50/50"}`}>
                  <Link to="/utbildning">UTBILDNING</Link>
                </li>
                <li className={`p-2 rounded-full sm:w-48 ${isActive("/yrkesbakgrund") ? "bg-slate-50" : " hover:bg-slate-50/50"}`}>
                  <Link to="/yrkesbakgrund">YRKESBAKGRUND</Link>
                </li>
              </ul>
            </li>

            <li className={`mr-1 p-2 rounded-full sm:w-48 ${isActive("/portfolio") ? "bg-slate-50" : " hover:bg-slate-50/50"}`}>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            
            <li className={`mr-1 p-2 rounded-full sm:w-48 ${isActive("/kontakt") ? "bg-slate-50" : " hover:bg-slate-50/50"}`}>
              <Link to="/kontakt">KONTAKT</Link>
            </li>
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
