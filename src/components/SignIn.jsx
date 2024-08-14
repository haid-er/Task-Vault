import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function SignIn() {
  const ctx = useContext(AuthContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignIn = function () {
    setIsSignUp(prev => !prev);
  };
  const handleSignInForm = function (event) {
    event.preventDefault();
    console.log("hello");
  };
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center min-h-screen">
        <div
          className={`${
            ctx.isDark ? "bg-custom-secondary-400" : "bg-tertiary"
          } shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md`}
        >
          <h2 className={`text-3xl font-bold mb-6 text-center`}>
            <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
              {isSignUp ? "Sign Up" : "Log In"}
            </span>
          </h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className={`${
                  ctx.isDark ? "text-tertiary" : "text-secondary"
                } block text-sm font-semibold mb-2`}
              >
                📧 Email
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  className={`${
                    ctx.isDark
                      ? "bg-custom-secondary-300 text-tertiary"
                      : "bg-tertiary text-secondary"
                  } shadow appearance-none border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline`}
                  placeholder="Enter your email"
                ></input>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className={`${
                  ctx.isDark ? "text-tertiary" : "text-secondary"
                } block text-sm font-bold mb-2`}
              >
                🔑 Password
              </label>
              <div>
                <input
                  id="password"
                  type="password"
                  className={`${
                    ctx.isDark
                      ? "bg-custom-secondary-300 text-tertiary"
                      : "bg-tertiary text-secondary"
                  } shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline`}
                  placeholder="Enter your password"
                ></input>
              </div>
            </div>
            {isSignUp && (
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className={`${
                    ctx.isDark ? "text-tertiary" : "text-secondary"
                  } block text-sm font-bold mb-2`}
                >
                  🔑 Confirm Password
                </label>
                <div>
                  <input
                    id="confirmPassword"
                    type="password"
                    className={`${
                      ctx.isDark
                        ? "bg-custom-secondary-300 text-tertiary"
                        : "bg-tertiary text-secondary"
                    } shadow appearance-none border rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline`}
                    placeholder="Confirm Password"
                  ></input>
                </div>
              </div>
            )}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                onClick={handleSignInForm}
              >
                {isSignUp ? "Sign Up" : "SignIn"}
              </button>
            </div>
            {!isSignUp && (
              <div className="text-center mt-4">
                <a
                  href="#"
                  className={`${
                    ctx.isDark ? "text-tertiary" : "text-secondary"
                  } hover:underline`}
                >
                  Forgot password?
                </a>
              </div>
            )}
          </form>
          <p
            className={`${
              ctx.isDark ? "text-tertiary" : "text-secondary"
            } text-center mt-6 `}
          >
            {isSignUp ? "Already have account? " : "Don't have an account? "}
            <button
              className="text-primary hover:underline"
              onClick={toggleSignIn}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
