import { useState } from "react";
import { UserContext } from "./mockContexts";

const UserProvider = ({ children }) => {
  const [name] = useState("Smrit Pradhan");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);
  return (
    <UserContext.Provider value={{ name, age, happyBirthday }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
