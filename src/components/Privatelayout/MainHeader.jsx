import { ArrowBigDown, ArrowDown, ArrowDown01, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/images/avi.jpg";

const MainHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-linear-to-b from-black via-black/30 to-transparent ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="h-7 md:h-9"
          />
        </Link>

        <ul className="hidden lg:flex gap-6 text-sm font-medium text-white">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
          <li className="cursor-pointer hover:text-gray-300">Movies</li>
          <li className="cursor-pointer hover:text-gray-300">New & Popular</li>
          <li className="cursor-pointer hover:text-gray-300">My List</li>
          <li className="cursor-pointer hover:text-gray-300">
            Browse by Languages
          </li>
        </ul>

        <div className="flex items-center gap-4 relative    ">
          <div className="flex items-center gap-2 rounded-full border border-gray-500 px-3 py-1.5 md:w-auto w-40">
            <SearchIcon size={18} className="text-white" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            />
          </div>

          <button onClick={() => setShow(!show)}>
            <img
              src={profile}
              alt="profile"
              className="h-9 w-9 rounded-full object-cover"
            />
          </button>

          {show && (
            <div className="absolute right-0 top-12 w-40 rounded bg-black text-white shadow-lg">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-800">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
