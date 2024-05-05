import { Link } from "react-router-dom";
import logo from "../images/logo2.png";

const Header = () => {
  const navlinks = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "exhibit",
      link: "/exhibit",
    },
    {
      name: "donate",
      link: "/donate",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];
  return (
    <header className=" bg-transparent absolute z-[100] w-full top-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img
                src={logo}
                alt="logo"
                className="h-12 invert-[0.8] object-cover "
              />
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {navlinks.map((navlink) => {
                  const { name, link } = navlink;
                  return (
                    <li
                      key={link}
                      className="text-gray-200 transition hover:text-gray-200/75 uppercase"
                    >
                      <Link to={link}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
