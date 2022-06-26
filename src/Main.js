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
            <h4>
              <a href="https://github.com/sjgske/emotion-diary-app">
                감정 일기장
              </a>
            </h4>
            <div>
              <p>
                <code>LocalStorage</code>를 이용하여 일기를 동적으로{" "}
                <strong>추가, 수정, 삭제</strong>하는 기능을 구현하였고,{" "}
                <code>React.js</code> 상태관리 hook을 활용하였습니다.
              </p>
              <p>
                디자인 재사용성을 위해 Button과 header를{" "}
                <code className="kor">컴포넌트</code>로 분리하여 UI를
                개발하였습니다.
              </p>
            </div>
          </div>
          <div className="item">
            <h4>
              <a href="https://github.com/sjgske/moonbucks-menu">
                카페 메뉴 관리 앱
              </a>
            </h4>
            <div>
              <p>
                <code>fetch api</code>로 <strong>서버와 통신</strong>하여 메뉴
                상태 관리 기능을 구현한 <code>Vanilla JavaScript</code> 프로젝트
                입니다.
              </p>
              <p>
                <strong>DOM 이벤트 핸들링</strong>으로 메뉴를 추가, 수정,
                삭제하고 품절 메뉴를 표시하는 기능을 구현하였습니다.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>팀</h3>
          <div className="item">
            <h4>
              <a href="https://kdt-gitlab.elice.io/sw_track/class_02_seoul/web_project/team3/shoppingmall">
                쇼핑몰 프로젝트
              </a>
            </h4>
            <div>
              <p>
                엘리스 SW 엔지니어 트랙에서 2주 동안 진행한 팀 프로젝트이고,
                <strong> 회원정보, 장바구니, 주문 기능</strong> 등을
                구현하였습니다.
              </p>
              <p>
                저는 사용자와 상품 정보를 보여주고 추가, 수정, 삭제하는 기능을
                구현하였고, <strong>api로 서버와 통신</strong>하며{" "}
                <code>form</code> 입력값을 처리하는 것에 대해 배울 수
                있었습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <h1>
          <FontAwesomeIcon icon={faCode} className="icon" />
          Skills
        </h1>
        <ul>
          <li>HTML5 / CSS3</li>
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
