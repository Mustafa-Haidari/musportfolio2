import React from "react";
import AboutMe from "./AboutMe";
import Container from "../UI/Container";
import styles from "./Header.module.css";
import ProfileCard from "./ProfileCard";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.grid_center}>
        <ProfileCard />
        <AboutMe />
      </Container>
    </div>
  );
};

export default Header;
