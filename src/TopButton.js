import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const useScroll = (initialValue) => {
  const [isActive, setIsActive] = useState(initialValue);

  const listener = () => {
    window.pageYOffset > 30 ? setIsActive(true) : setIsActive(false);
  };

  // useEffect 안에서 setState를 부르면 무한 실행.. X
  // useEffect 안에서 함수를 리턴하면 unmount 시점에 실행됨
  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return { isActive };
};

useScroll.defaultProps = {
  initialValue: false,
};

const TopButton = () => {
  const { isActive } = useScroll(false);
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
