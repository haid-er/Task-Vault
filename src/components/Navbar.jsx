import { useContext } from "react";
import ToggleButton from "./ToggleButton";
import AuthContext from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const ctx = useContext(AuthContext);
  const handleLoginButton = function () {
    ctx.setIsLogin();
  };
  return (
    <>
      <nav
        className={` ${
          !ctx.isDark
            ? "bg-primary text-primary shadow-custom-secondary-400"
            : "bg-custom-secondary-300 text-secondary shadow-custom-primary-500"
        }  flex items-center justify-between px-10 py-5 transition-all duration-200 shadow-md`}
      >
        <NavLink href="/">
          <img
            width={40}
            src={!ctx.isDark ? "/logo.png" : "/logo-light.png"}
            alt="Task Vault Logo"
          />
        </NavLink>
        <ul className="flex items-center gap-10">
          <li>
            <NavLink
              to="/home"
              className={`${
                !ctx.isDark ? "bg-secondary" : "bg-primary"
              } px-5 py-3 rounded-full hover:shadow-tertiary hover:shadow-sm hover:text-tertiary transition-all duration-300`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ctx.isLogin ? "/home" : "/login"}
              className={`${
                !ctx.isDark ? "bg-secondary" : "bg-primary"
              } px-5 py-3 rounded-full hover:shadow-tertiary hover:shadow-sm hover:text-tertiary transition-all duration-300`}
              onClick={handleLoginButton}
            >
              {ctx.isLogin ? "Logout" : "Login"}
            </NavLink>
          </li>
          {ctx.isLogin && (
            <li>
              <NavLink
                to="/tasklist"
                className={`${
                  !ctx.isDark ? "bg-secondary" : "bg-primary"
                } px-5 py-3 rounded-full hover:shadow-tertiary hover:shadow-sm hover:text-tertiary transition-all duration-300`}
              >
                Task List
              </NavLink>
            </li>
          )}
          <li>
            <ToggleButton />
          </li>
        </ul>
      </nav>
    </>
  );
}
