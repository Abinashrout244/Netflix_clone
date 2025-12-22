import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Banner from "../../assets/images/banner.jpg";

const Login = () => {
  const { Login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const Form = location?.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    Login(email, password)
      .then(() => {
        alert("LoginSucessfully");
        navigate(Form, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError("Invalid Credintials!!");
      });
  };

  return (
    <div className="min-h-screen relative">
      <img
        src={Banner}
        alt="Netflix Banner"
        className="absolute h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/50" />
      <div className="flex min-h-screen z-10 relative  items-center justify-center px-4 pt-14">
        <div className="w-full flex flex-col gap-6 max-w-md rounded bg-black/55 p-8  text-white">
          <h1 className="mb-6 text-3xl font-bold">Sign In</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email or phone number"
              className="w-full rounded  bg-transparent
    border border-slate-300
    px-4 py-3 md:py-4
    text-white
    placeholder-gray-400
    outline-none
    focus:outline-none
    focus:ring-2 focus:ring-white
    focus:bg-transparent
    active:bg-transparent"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full rounded  bg-transparent
    border border-slate-300
    px-4 py-3 md:py-4
    text-white
    placeholder-gray-400
    outline-none
    focus:outline-none
    focus:ring-2 focus:ring-white
    focus:bg-transparent
    active:bg-transparent"
            />
            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full rounded bg-red-600 py-3 text-lg font-semibold hover:bg-red-700 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>

            <span className="cursor-pointer hover:underline">Need help?</span>
          </div>

          <p className="mt-6 text-gray-400">
            New to Netflix?
            <Link to="/signup">
              <span className="cursor-pointer text-white hover:underline">
                Sign up now
              </span>
            </Link>
          </p>

          <p className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
