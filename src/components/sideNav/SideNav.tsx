"use client";
import React, { useEffect, useState } from "react";
import styles from "./SideNav.module.scss";
import ProfilePic from "../profilePic/ProfilePic";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import CheckIcon from "@/assets/icons/CheckIcon";
import ClockIcon from "@/assets/icons/ClockIcon";
import LeftArrowIcon from "@/assets/icons/LeftArrowIcon";
import BurgerIcon from "@/assets/icons/BurgerIcon";
import Link from "next/link";

const SideNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpening = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      {!isMenuOpen && (
        <div onClick={handleMenuOpening} className={styles.iconContainer}>
          <BurgerIcon />
        </div>
      )}
      <div
        className={`${styles.sideNavContainer} ${isMenuOpen && styles.show}`}
      >
        <div className={styles.navControl}>
          <button onClick={handleMenuOpening}>
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
          <Link href={"/calendar"} className={styles.opt}>
            <CalendarIcon />
            Calendário
          </Link>
          <Link href={"/tasks"} className={styles.opt}>
            <CheckIcon />
            Tarefas
          </Link>
          <Link href={"/pomodoro"} className={styles.opt}>
            <ClockIcon />
            Pomodoro
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideNav;
