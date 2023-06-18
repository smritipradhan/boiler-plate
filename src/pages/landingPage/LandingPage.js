import styles from "./LandingPage.module.scss";
import Profile from "./../../assets/images/profile.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import MyProject from "./components/MyProject/MyProject";
import TechStack from "./components/TechStack/TechStack";

const LandingPage = () => {
  const { theme } = useContext(UserContext);
  return (
    <>
      <div className={styles.landingPageContainer}>
        <div
          className={
            theme === "dark" ? styles.introTextDark : styles.introTextLight
          }
        >
          Hi 👋,
          <br />
          My name is
          <br />
          <span className={styles.name}>Smriti</span>
          <br />
          <span className={styles.craft}>
            "I Craft digital <br />
            experiences with pixel-perfect precision."
          </span>
        </div>
        <div className={styles.imageContainer}>
          {" "}
          <img src={Profile} alt="profile" />
        </div>
      </div>
      <TechStack />
      <MyProject />
    </>
  );
};

export default LandingPage;
