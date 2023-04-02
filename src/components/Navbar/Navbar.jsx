import React, { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  // console.log(object);
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      route: "/",
    },
    {
      id: 2,
      name: "About",
      route: "/about",
    },
    {
      id: 3,
      name: "Products",
      route: "/products",
    },
    {
      id: 4,
      name: "Services",
      route: "/services",
    },
    {
      id: 5,
      name: "Contact",
      route: "/contact",
    },
  ];

  return (
    <nav className="bg-gray-200 p-4">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <AiOutlineCloseCircle /> : <FiMenu />}
      </div>
      <ul
        className={`md:flex md:static absolute duration-300 bg-gray-300 md:bg-gray-200 left-0 ${
          open ? "top-12" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
