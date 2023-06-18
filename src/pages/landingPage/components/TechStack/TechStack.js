import React from "react";
import styles from "./TachStack.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import HTML from "./../../../../assets/images/html.svg";
import CSS from "./../../../../assets/images/css.svg";
import JS from "./../../../../assets/images/js.svg";
import ReactImage from "./../../../../assets/images/react.svg";
import Redux from "./../../../../assets/images/redux.svg";
import bootstrap from "./../../../../assets/images/bootstrap.svg";

const TechStack = () => {
  const techStack = [
    {
      techImage: HTML,
    },
    {
      techImage: CSS,
    },
    {
      techImage: JS,
    },
    {
      techImage: ReactImage,
    },
    {
      techImage: Redux,
    },
    {
      techImage: bootstrap,
    },
  ];
  const { theme } = useContext(UserContext);
  return (
    <div className={styles.techContainer}>
      <div
        className={
          theme === "dark" ? styles.techHeaderDark : styles.techHeaderLight
        }
      >
        Tech
      </div>
      <div
        className={
          theme === "dark" ? styles.thingsBuiltDark : styles.thingsBuiltLight
        }
      >
        Technologies I’ve been working with recently
      </div>
      <div className={styles.tech}>
        {techStack.map((tech) => {
          return (
            <div>
              <img src={tech.techImage} alt="tech" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
