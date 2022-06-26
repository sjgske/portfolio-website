import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <div className={isActive ? "Sidebar" : "Sidebar hidden"}>
      <FontAwesomeIcon
        className="close-icon"
        icon={faX}
        onClick={() => setIsActive(false)}
      />
      <ul className="side-menu-list">
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
    </div>
  );
};

export default Sidebar;
