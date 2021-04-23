import React from "react";

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
      <span>Mind Seed</span>
      <ul>
        {navLinks.map((link, i) => (
          <li key={i}>{link.title}</li>
        ))}
      </ul>
    </nav>
  );
}
