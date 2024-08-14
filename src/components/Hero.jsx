import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
export default function Hero() {
  const ctx = useContext(AuthContext);
  const handleLoginButton = function () {
    ctx.setIsLogin();
  };
  return (
    <>
      <div className="container my-24 mx-auto">
        <div className="flex items-center justify-center flex-col">
          <h2 className="lg:xl:text-6xl text-center text-3xl xl:lg:mx-52 md:sm:mx-10 md:sm:text-5xl font-semibold">
            A simple and secure solution to do list to manage it all
          </h2>
          <p className="text-xl text-gray-400 mt-10 text-center mx-14">
            Easily manage your personal tasks, projects and team's work all in
            one place.
          </p>
          <NavLink
            to="/login"
            className={`${
              ctx.isDark
                ? "bg-primary text-secondary"
                : "bg-primary text-tertiary"
            }  px-24 py-8 rounded-full mt-20 hover:shadow-lg hover:text-tertiary text-xl transition-all duration-300`}
            onClick={handleLoginButton}
          >
            Login to Enjoy
          </NavLink>
        </div>
      </div>
    </>
  );
}
