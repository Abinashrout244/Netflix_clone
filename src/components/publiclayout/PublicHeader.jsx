import React from "react";
import { Link } from "react-router-dom";

const PublicHeader = () => {
  return (
    <div>
      <header className=" top-0 left-0 z-50 w-full absolute">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix"
              className="h-8 md:h-10"
            />
          </Link>

          <div className="flex flex-row gap-5">
            <Link to="/signup">
              <button className="rounded bg-red-600 px-5 py-1.5 text-sm font-semibold text-white hover:bg-red-700 transition">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="rounded bg-red-600 px-5 py-1.5 text-sm font-semibold text-white hover:bg-red-700 transition">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PublicHeader;
