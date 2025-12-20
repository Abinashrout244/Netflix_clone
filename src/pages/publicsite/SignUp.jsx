import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authProvider";

const SignUp = () => {
  const { RegisterUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const From = location?.state?.from?.pathname || "/app";

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
          alert("user Register Sucessfully!!");
          navigate(From, { replace: true });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="min-h-screen bg-black/85 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded bg-black/75 p-8 text-white">
        <h1 className="mb-6 text-3xl font-bold">Sign Up</h1>

        <form onSubmit={handleUserSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            id="firstName"
            placeholder="First Name"
            className="w-full rounded bg-gray-700 px-4 py-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email or phone number"
            className="w-full rounded bg-gray-700 px-4 py-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded bg-gray-700 px-4 py-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            className="w-full rounded bg-gray-700 px-4 py-4 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
          />
          {err && <p className="text-red-500">{err}</p>}

          <button
            type="submit"
            className="mt-4 w-full rounded bg-red-600 py-3 text-lg font-semibold hover:bg-red-700 transition"
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
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
