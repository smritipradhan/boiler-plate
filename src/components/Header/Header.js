import React from "react";
import styles from "./Header.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CONSTANT } from "../../constants/constants";
import CustomSwitch from "../CustomSwitch/CustomSwitch";

const Header = () => {
  const { theme } = useContext(UserContext);
  return (
    <div
      className={styles.headerContainer}
      style={
        theme === "dark"
          ? { backgroundColor: "#F5F5F5" }
          : { backgroundColor: "black" }
      }
    >
      <div
        className={
          theme === "dark"
            ? styles.headerItemContainerDark
            : styles.headerItemContainerLight
        }
      >
        {CONSTANT.HEADER.map((headerItem) => {
          return <div className={styles.headerItem}>{headerItem}</div>;
        })}
      </div>
      <CustomSwitch />
    </div>
  );
};

export default Header;
