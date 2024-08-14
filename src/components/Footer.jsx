import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Footer() {
  const ctx = useContext(AuthContext);
  const year = new Date().getFullYear();
  return (
    <footer
      className={
        ctx.isDark
          ? "bg-custom-secondary-300 text-tertiary"
          : "bg-primary text-secondary"
      }
    >
      <div className="container mx-auto flex items-center justify-center py-4 font-semibold">
        <p>
          Copyright &copy; {year} by{" "}
          <a
            href="https://www.github.com/haid-er/"
            target="_blank"
            className="underline"
          >
            Malik Haider Ali
          </a>
          &nbsp; | All rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
