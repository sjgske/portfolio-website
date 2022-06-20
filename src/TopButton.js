import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const TopButton = () => {
  const [isActive, setIsActive] = useState(false);

  const useScroll = () => {
    const listener = () => {
      if (window.pageYOffset > 30) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    });
  };

  useScroll();

  return (
    <div
      id="TopButton"
      className={isActive ? "active" : null}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </div>
  );
};

export default TopButton;
