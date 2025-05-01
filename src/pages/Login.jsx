import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../providers/UserProvider";

const Login = () => {
  const { login, user, setUser } = use(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
      })
      .catch((err) => {
        alert("Error is :", err);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login your account
        </h2>
        <div className="divider"></div>

        <form onSubmit={handleLoginForm} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button className="btn w-full bg-neutral text-white hover:bg-neutral-focus">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don’t Have An Account?{" "}
          <Link
            to={"/auth/register"}
            className="text-red-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
