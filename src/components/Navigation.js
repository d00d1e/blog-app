import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/login",
  },
];

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span className="menu-title">Mind Seed</span>
      <div>
        <ul>
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
