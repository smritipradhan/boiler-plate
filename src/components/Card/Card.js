import React from "react";
import styles from "./Card.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Card = ({ projectElement }) => {
  console.log("projectElement", projectElement);
  const { theme } = useContext(UserContext);
  return (
    <div
      className={
        theme === "dark" ? styles.cardContainerDark : styles.cardContainerLight
      }
    >
      <div className={styles.projectBackground}>
        <img src={projectElement.image} alt="nj" />
      </div>
      <div className={styles.projectDescriptionContainer}>
        <span
          className={theme === "dark" ? styles.titleDark : styles.titleLight}
        >
          {projectElement?.projectTitle}
        </span>
        <div
          className={
            theme === "dark" ? styles.descriptionDark : styles.descriptionLight
          }
        >
          {projectElement?.projectDescription}
        </div>
        <div
          className={
            theme === "dark" ? styles.techStackDark : styles.techStackLight
          }
        >
          <span className={styles.techstackText}> Tech Stack : </span>
          {projectElement?.techStack}
        </div>
      </div>
    </div>
  );
};

export default Card;
