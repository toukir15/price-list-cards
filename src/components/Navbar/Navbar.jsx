import React, { useState } from "react";
import Link from "../Link/Link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
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
    <nav>
      <div onClick={() => setOpen(!open)}>
        <span>{open ? "open" : "close"}</span>
        <FiMenu />
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
