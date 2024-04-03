import React, { useState } from "react";
import { image } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItemsInfor = [
  { name: "Home", type: "link" },
  { name: "About", type: "link" },
  { name: "Pages", type: "link" },
  { name: "Game", type: "link" },
  { name: "Blog", type: "link" },
];
const NavItems = ({ item }) => {
  return (
    <li className="relative group">
      {item.type === "link"}
      <a
        href="/"
        className="px-4 py-2 rounded-lg text-white flex items-center justify-center font-semibold hover:bg-blue-500 hover:text-white hover:underline"
      >
        {item.name}
      </a>
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="conainer mx-auto px-5 bg-black flex justify-between py-4 items-center">
        <div>
          <img
            className="w-16"
            src={image.Logo}
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-10 h-10 rounded-md bg-blue-500"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu
              className="w-10 h-10 rounded-md bg-blue-500"
              onClick={navVisibilityHandler}
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-gray-800 lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-8 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-sort flex flex-col lg:flex-row gap-x-2 font-semibold">
            {navItemsInfor.map((item) => (
              <NavItems key={item.name} item={item} />
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
