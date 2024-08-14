import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isDark: false,
  setIsDark: () => {},
  isLogin: false,
  setIsLogin: () => {},
});

export const ContextProvider = function (props) {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = function () {
    setIsDark(prev => !prev);
  };
  const [isLogin, setLogin] = useState(false);
  const setIsLogin = function () {
    setLogin(prev => !prev);
  };

  return (
    <AuthContext.Provider
      value={{
        isDark,
        setIsDark: toggleMode,
        isLogin,
        setIsLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
