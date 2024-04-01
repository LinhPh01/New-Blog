import React from "react";
import { image } from "../constants";

const navItemsInfor = [
  { name: "Home" },
  { name: "About" },
  { name: "Pages" },
  { name: "Game" },
  { name: "Blog" },
];
const NavItems = ({ name }) => {
  return (
    <li className="relative group">
      <a
        href="/"
        className="px-4 py-2 rounded-lg text-white flex items-center justify-center font-semibold hover:bg-blue-500 hover:text-white hover:underline"
      >
        {name}
      </a>
    </li>
  );
};

const Header = () => {
  return (
    <section>
      <header className="conainer mx-auto px-5 bg-black flex justify-between py-4 items-center">
        <div>
          <img
            src={image.Logo}
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="flex gap-x-9 items-center">
          <ul className="flex gap-x-5 font-semibold">
            {navItemsInfor.map((items) => (
              <NavItems key={items.name} name={items.name} />
            ))}
          </ul>
          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
