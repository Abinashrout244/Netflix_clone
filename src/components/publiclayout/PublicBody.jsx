import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Banner from "../../assets/images/banner.jpg";
// import hero from "../../assets/images/hero_banner.jpg";
// import text from "../../assets/images/hero_title.png";

const PublicBody = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const From = location?.state?.from?.pathname || "/app";

  const { ReisterWithGoogle } = useContext(AuthContext);

  const registerUser = (e) => {
    e.preventDefault();
    ReisterWithGoogle()
      .then(() => {
        navigate(From, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className=" h-screen w-full">
      <img
        src={Banner}
        alt="Netflix Banner"
        className="absolute h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white pt-14">
        <h1 className="max-w-xl text-2xl font-bold md:text-5xl lg:text-6xl">
          Unlimited movies, shows, and more
        </h1>

        <h2 className="mt-4 text-lg md:text-2xl">
          Starts at ₹149. Cancel at any time.
        </h2>

        <p className="mt-6 max-w-2xl text-sm md:text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* CTA */}
        <form
          onSubmit={registerUser}
          className="mt-8 flex gap-2 w-full max-w-xl flex-col overflow-hidden rounded md:flex-row"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="flex-1 bg-black/40 px-4 py-4 border border-slate-200 text-white outline-none placeholder-gray-400 "
          />

          <button
            type="submit"
            className="flex items-center justify-center bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 transition"
          >
            Get Started
            <span className="ml-2">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default PublicBody;
