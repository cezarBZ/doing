"use client";
import React, { useState } from "react";
import styles from "./SideNav.module.scss";
import ProfilePic from "../profilePic/ProfilePic";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";

const SideNav = () => {
  const [showNav, setShowNav] = useState(true);

  return showNav? (
    <div className={`${styles.sideNavContainer} ${showNav && styles.show}`}>
      <div className={styles.navControl}>
        <button onClick={() => setShowNav(false)}>
          <LeftArrowIcon />
          Fechar
        </button>
      </div>
      <div className={styles.profileContainer}>
        <ProfilePic />
        Cézar Bezerra
      </div>
      <hr />

      <div className={styles.optsContainer}>
        <div className={styles.opt}>
          <CalendarIcon />
          Calendário
        </div>
        <div className={styles.opt}>
          <CheckIcon />
          Tarefas
        </div>
        <div className={styles.opt}>
          <ClockIcon />
          Pomodoro
        </div>
      </div>
    </div>
  ) : <button onClick={() => setShowNav(true)}>Abrir menu</button>;
};

export default SideNav;
