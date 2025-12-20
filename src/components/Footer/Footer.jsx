import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black px-6 py-14 text-gray-400">
      <div className="mx-auto max-w-6xl">
        <p className="mb-8 text-sm">
          Questions? Call
          <span className="cursor-pointer hover:underline">
            000-800-919-1694
          </span>
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3 md:grid-cols-4">
          {[
            "FAQ",
            "Help Centre",
            "Account",
            "Media Centre",
            "Investor Relations",
            "Jobs",
            "Ways to Watch",
            "Terms of Use",
            "Privacy",
            "Cookie Preferences",
            "Corporate Information",
            "Contact Us",
          ].map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </div>

        <div className="mt-8">
          <select className="rounded border border-gray-600 bg-black px-3 py-2 text-sm text-gray-300">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        <p className="mt-6 text-sm">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
