import { ChevronDown, SearchIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/images/avi.jpg";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataProvider";

const MainHeader = () => {
  const [show, setShow] = useState(false);
  const { Logout } = useContext(AuthContext);
  const { searchMovies } = useContext(DataContext);
  const [text, setText] = useState("");
  const handlesearch = () => {
    searchMovies(text);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-linear-to-b from-black via-black/30 to-transparent ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            className="h-5 md:h-9"
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
          <div
            className="flex items-center gap-2 rounded-full border border-gray-500
             px-3 py-1.5 w-45 sm:w-55 md:w-auto"
          >
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Search"
              className="bg-transparent text-sm text-white placeholder-gray-400
               focus:outline-none w-full min-w-0"
            />

            <SearchIcon
              onClick={handlesearch}
              size={18}
              className="text-white shrink-0 cursor-pointer"
            />
          </div>

          <div className="relative flex items-center gap-2">
            {/* PROFILE + ARROW */}
            <button
              onClick={() => setShow(!show)}
              className="flex items-center gap-1  focus:outline-none"
            >
              <img
                src={profile}
                alt="profile"
                className="h-9 w-9 rounded-full object-cover"
              />

              <ChevronDown
                size={18}
                className={`text-white transition-transform duration-200 ${
                  show ? "rotate-180" : ""
                }`}
              />
            </button>

            {show && (
              <div className="absolute right-0 top-12 w-44 rounded-md bg-black text-white shadow-lg border border-gray-700">
                <button
                  onClick={Logout}
                  className="w-full px-4 py-3 text-left text-sm hover:bg-gray-800 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
