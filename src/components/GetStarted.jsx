import styles from "../style";
import { arrowUp } from "../assets";
import { useState } from "react";

export default function GetStarted() {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`transition-all duration-500 ${styles.flexCenter} flex-col ${
          hover ? "bg-blue-gradient" : "bg-primary"
        } w-full h-full rounded-full`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className={`${hover ? "text-white" : "text-gradient"}`}>
              Get
            </span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className={`${hover ? "text-white" : "text-gradient"}`}>
            Started
          </span>
        </p>
      </div>
    </div>
  );
}
