import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="Main">
      <header className="header">
        <h1>
          안녕하세요
          <br />
          김단헌입니다.
        </h1>
        <p>
          사용자들에게 좋은 인상을 주고 싶은 <strong>프론트엔드 개발자 </strong>
          김단헌입니다. 인터랙티브하고 이용하기 편한 UI를 설계하는 것에 관심이
          많습니다.
        </p>
      </header>

      <section id="project" className="section project">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Project
        </h1>
        <div>
          <h3>개인</h3>
          <div className="item">
            <h4>감정 일기장</h4>
          </div>
        </div>
        <div>
          <h3>팀</h3>
          <div className="item">
            <h4>쇼핑몰 프로젝트</h4>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Skills
        </h1>
        <ul>
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
      </section>

      <section id="education" className="section education">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Education
        </h1>
        <div className="item">
          <h4>엘리스 SW 엔지니어 트랙 2기</h4>
          <span>2022년 4월 4일 ~ 7월 22일</span>
        </div>
        {/* <div className="item">
          <h4>전북대학교 신소재공학부</h4>
          <span>2017년 3월 ~ 2022년 2월</span>
        </div> */}
      </section>

      <section id="contact" className="section contact">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Contact
        </h1>
        <ul>
          <li>
            <a className="link" href="mailto:eksgjs3847@gmail.com">
              Email
            </a>
          </li>
          <li>
            <a className="link" href="https://github.com/sjgske">
              Github
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Main;
