import React, { useState } from "react";
import styles from "./CheckBox.module.scss";
import ColoredCheckIcon from "@/assets/icons/ColoredCheckIcon";
type checkBoxProps = {
  onClick: () => void;
};
const CheckBox = ({ onClick }: checkBoxProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };

  return (
    <div
      className={`${styles.checkbox} ${isClicked && styles.removeBorder}`}
      onClick={handleOnClick}
    >
      <ColoredCheckIcon className={`${isClicked && styles.showIcon}`} />
    </div>
  );
};

export default CheckBox;
