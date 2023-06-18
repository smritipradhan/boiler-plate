import React from "react";
import styles from "./MyProject.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import Card from "../../../../components/Card/Card";
import projectBackground1 from "./../../../../assets/images/projectBackground.svg";
import projectBackground2 from "./../../../../assets/images/projectBackground2.svg";
import projectBackground3 from "./../../../../assets/images/projectBackground3.svg";
import projectBackground4 from "./../../../../assets/images/projectBackground4.svg";
import projectBackground5 from "./../../../../assets/images/projectBackground5.svg";
import projectBackground6 from "./../../../../assets/images/projectBackground6.svg";

const MyProject = () => {
  const { theme } = useContext(UserContext);
  const project = [
    {
      image: projectBackground1,
      projectTitle: "Favourite using Redux Toolkit",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "Redux Toolkit, JavaScript, SCSS, HTML",
      link: "",
      githubLink:
        "https://github.com/smritipradhan/react-redux-favourite-product",
    },
    {
      image: projectBackground2,
      projectTitle: "Login using Custom Hook",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "",
      githubLink: "",
    },
    {
      image: projectBackground3,
      projectTitle: "Sending HTTP Request",
      projectDescription: "Sending HTTP Requests. Connecting to Database",
      techStack: "",
      link: "",
      githubLink: "",
    },
    {
      image: projectBackground4,
      projectTitle: "Apple UI",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "",
      githubLink: "",
    },
    {
      image: projectBackground5,
      projectTitle: "React Boiler Plate",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "",
      githubLink: "",
    },
    {
      image: projectBackground6,
      projectTitle: "Project using Node JS",
      projectDescription:
        "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "",
      link: "",
      githubLink: "https://github.com/smritipradhan/nodejs-farm",
    },
  ];
  return (
    <div className={styles.projectContainer}>
      <div
        className={
          theme === "dark"
            ? styles.projectHeaderDark
            : styles.projectHeaderLight
        }
      >
        Projects
      </div>
      <div
        className={
          theme === "dark" ? styles.thingsBuiltDark : styles.thingsBuiltLight
        }
      >
        Things I've built so far
      </div>
      <div className={styles.projectCardContainer}>
        {project.map((projectElement) => {
          return <Card projectElement={projectElement} />;
        })}
      </div>
    </div>
  );
};

export default MyProject;
