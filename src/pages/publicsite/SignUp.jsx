import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Banner from "../../assets/images/banner.jpg";

const SignUp = () => {
  const { RegisterUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const From = location?.state?.from?.pathname || "/";

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const Confirm_Password = from.ConfirmPassword.value;

    //alert(FirstName, LastName, email, password);
    console.log(name, email, password);

    if (password !== Confirm_Password) {
      setErr("Password is Not match");
    } else {
      RegisterUser(email, password)
        .then(() => {
          navigate(From, { replace: true });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="min-h-screen relative ">
      <img
        src={Banner}
        alt="Netflix Banner"
        className="absolute h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/50" />
      <div className="min-h-screen relative z-10  flex items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md rounded bg-black/45 p-8 text-white">
          <h1 className="mb-6 text-3xl font-bold">Sign Up</h1>

          <form onSubmit={handleUserSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              id="firstName"
              placeholder="First Name"
              className="w-full rounded     bg-transparent
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
            <input
              type="password"
              name="ConfirmPassword"
              placeholder="Confirm Password"
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
            {err && <p className="text-red-500">{err}</p>}

            <button
              type="submit"
              className="mt-4 w-full rounded bg-red-600 py-2.5 md:py-3 text-lg font-semibold hover:bg-red-700 transition"
            >
              Sign Up
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
            Already have an account?
            <Link to="/login">
              <span className="cursor-pointer text-white hover:underline">
                Sign in
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

export default SignUp;
