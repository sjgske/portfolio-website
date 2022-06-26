import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="Nav">
      <div className="nav-container">
        <h1>
          <a href="/">danheon®</a>
        </h1>
        <div>
          <FontAwesomeIcon
            icon={faBars}
            className="nav-menu-icon"
            onClick={() => {
              setIsActive(true);
            }}
          />
          <ul className="nav-menu-list">
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <Sidebar isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
