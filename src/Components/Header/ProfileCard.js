import React, { useState } from "react";
import styles from "./ProfileCard.module.css";
import Mustafa from '../../assets/Mustafa.png'

const ProfileCard = () => {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHandler = (e) => {
    if(darkMode === false ){
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }

  return (
    <div className={darkMode ? styles["card-container"]+' '+ styles.dark_mode : styles["card-container"]+' '+ styles.light_mode}>
      <div className={styles.card_lightdark} onClick={darkModeHandler}>
      <i className={`uil uil-${darkMode ? 'sun' : 'moon ' + styles.light_icon}`}></i>
      </div>
      <img
        className={styles.round}
        src={Mustafa}
        alt="Mustafa"
      />
      <h1>Mustafa Haidari</h1>
      <h4>Brisbane, Australia</h4>
      <p>Front-end developer</p>

      <div className={styles.buttons}>
        <a href="https://www.linkedin.com/in/mustafa-haidari-1299b9134/" className="footer__social">
          <button className={styles.primary}>Resume</button>
        </a>
        <a href="https://www.linkedin.com/in/mustafa-haidari-1299b9134/" className="footer__social">
          <button className={styles.primary + ' ' + styles.ghost}><i className="uil uil-linkedin-alt"></i></button>
        </a>
        <a href="https://m.me/mustafa.haidari.50364/" className="footer__social">
          <button className={styles.primary + ' ' + styles.ghost}><i className="uil uil-facebook-messenger"></i></button>
        </a>
        <a href="https://github.com/mustafa-haidari" class="footer__social">
          <button className={styles.primary + ' ' + styles.ghost}><i className="uil uil-github"></i></button>
        </a>
      </div>
      <div className={styles.skills}>
        <h6>Skills</h6>
        <ul>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
