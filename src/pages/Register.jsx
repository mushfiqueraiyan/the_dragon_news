import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../providers/UserProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Register = () => {
  const { createWithEmail, user, setUser } = use(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const profileURL = e.target.profileURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userInfo = {
      displayName: name,
      photoURL: profileURL,
    };

    createWithEmail(email, password)
      .then((res) => {
        setUser(res.user);
        // console.log(res.user);

        updateProfile(auth.currentUser, userInfo)
          .then(() => {
            console.log("Profile Updated");
          })
          .catch((err) => {
            alert(err);
          });
      })
      .catch((error) => {
        alert("Error is on peak", error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register your account
        </h2>
        <div className="divider"></div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              required
              name="name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
              name="profileURL"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full"
              required
              name="email"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
              name="password"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              name="terms"
            />
            <label className="text-sm">
              Accept <span className="font-semibold">Term & Conditions</span>
            </label>
          </div>

          <button
            type="submit"
            className="btn w-full bg-neutral text-white hover:bg-neutral-focus"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already Have Account?{" "}
          <Link to={"/auth/login"} className="underline font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
