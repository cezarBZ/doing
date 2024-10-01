import styles from './ProfilePic.module.scss'
import Image from "next/image";
import React from "react";
import profilePic from "../../assets/profilePic.webp";

const ProfilePic = () => {
  return (
    <div className={styles.profilePicContainer}>
      <Image src={profilePic} alt="" className={styles.img}/>
    </div>
  );
};

export default ProfilePic;
