import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
export default function MainLayout(props) {
  const ctx = useContext(AuthContext);
  return (
    <div
      className={`min-h-screen flex flex-col ${
        ctx.isDark ? "bg-custom-secondary-700" : "bg-tertiary"
      }`}
    >
      <Navbar />
      <div className={` flex-grow`}>{props.children}</div>
      <Footer />
    </div>
  );
}
