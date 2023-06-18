import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import LandingPage from "./pages/landingPage/LandingPage";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { theme } = useContext(UserContext);
  console.log("theme", theme);
  return (
    <>
      <Header />
      <div
        className={
          theme === "dark" ? styles.containerDark : styles.containerLight
        }
      >
        <LandingPage />
      </div>
      <Footer />
    </>
  );
};
export default App;
