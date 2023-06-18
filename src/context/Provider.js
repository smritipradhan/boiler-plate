import { useState } from "react";
import { UserContext } from "./UserContext";
const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    console.log("theme", theme);
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <UserContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
